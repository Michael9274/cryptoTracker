import React, {useEffect, useState} from 'react';
import {
  ContainerDetail,
  TitleCoin,
  ItemText,
  ImageDetail,
  SubHeader,
  SectionItem,
  SectionHeader,
  SectionText,
  MarketsTitle,
  ButtonFavorite,
} from './style/style';
import {getImageSymbol} from '../../resources/Helpers';
import {ActivityIndicator, SectionList} from 'react-native';
import {API_ALL_MARKETS} from '@env';
import {asyncGet} from '../../libs/Http';
import {white} from '../../resources/Colors';
import {FlatList, Alert} from 'react-native';
import MarketsItem from '../markets/MarketsItem';
import firebase from '../../database/firebase';

export default ({route, navigation}) => {
  let [currentCoin, setCurrentCoin] = useState({
    loading: true,
    coin: null,
    markets: null,
  });

  let [isFavorite, letIsFavorite] = useState({
    currentCoin: false,
    idCurrentCoin: null,
  });

  const getMarkets = async (id) => await asyncGet(`${API_ALL_MARKETS}${id}`);

  const isFavoriteQuery = (id) => {
    firebase.db.collection('favorites').onSnapshot((querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        if (doc.data().id === id) {
          letIsFavorite({currentCoin: true, idCurrentCoin: doc.id});
        }
      });
    });
  };

  useEffect(() => {
    let {coin} = route.params;
    navigation.setOptions({title: coin.symbol});

    isFavoriteQuery(coin.id);

    getMarkets(coin.id).then((response) =>
      setCurrentCoin({
        loading: false,
        coin,
        markets: response,
      }),
    );
  }, [navigation, route.params]);

  if (currentCoin.loading) {
    return (
      <ContainerDetail>
        <ActivityIndicator color={white} size="large" />
      </ContainerDetail>
    );
  }

  let {name, market_cap_usd} = currentCoin.coin;

  const getSections = () => {
    return [
      {
        title: 'Market Cap',
        data: [market_cap_usd],
      },
      {
        title: 'Volume 24h',
        data: [market_cap_usd],
      },
      {
        title: 'Change 24h',
        data: [market_cap_usd],
      },
    ];
  };

  const handleAddFavorite = async () => {
    await firebase.db.collection('favorites').add({
      ...currentCoin.coin,
    });
    isFavoriteQuery(currentCoin.coin.id);
  };

  const handleDeleteFavorite = async () => {
    Alert.alert('Remove favorite', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Remove',
        onPress: async () => {
          const favorite = firebase.db
            .collection('favorites')
            .doc(isFavorite.idCurrentCoin);
          await favorite.delete();
          letIsFavorite({currentCoin: false, idCurrentCoin: null});
        },
        style: 'destructive',
      },
    ]);
  };

  return (
    <ContainerDetail>
      <SubHeader>
        <ImageDetail source={{uri: getImageSymbol(name)}} />
        <TitleCoin>{name}</TitleCoin>
      </SubHeader>

      <SectionList
        style={{maxHeight: 220}}
        sections={getSections()}
        keyExtractor={(item) => item}
        renderItem={({item}) => (
          <SectionItem>
            <ItemText>{item}</ItemText>
          </SectionItem>
        )}
        renderSectionHeader={({section}) => (
          <SectionHeader>
            <SectionText>{section.title}</SectionText>
          </SectionHeader>
        )}
      />

      <MarketsTitle>Markets</MarketsTitle>

      <FlatList
        style={{maxHeight: 100, marginLeft: 16}}
        horizontal={true}
        data={currentCoin.markets}
        renderItem={({item}) => <MarketsItem market={item} />}
      />

      <ButtonFavorite
        title={
          isFavorite.currentCoin
            ? 'Eliminar de favoritos'
            : 'Agregar a favoritos'
        }
        onPress={
          isFavorite.currentCoin ? handleDeleteFavorite : handleAddFavorite
        }
        type={isFavorite.currentCoin ? 'clear' : 'solid'}
      />
    </ContainerDetail>
  );
};
