import React, {Fragment, useEffect, useState} from 'react';
import {Main} from '../coins/style/style';
import {ActivityIndicator, FlatList} from 'react-native';
import {white} from '../../resources/Colors';
import CoinsItem from '../coins/CoinsItem';
import firebase from '../../database/firebase';

export default ({navigation}) => {
  let [data, setData] = useState({
    loading: true,
    coins: [],
  });

  const isFavoriteQuery = () => {
    firebase.db.collection('favorites').onSnapshot((querySnapshot) => {
      const coins = [];
      querySnapshot.docs.map((doc) => {
        coins.push(doc.data());
      });
      setData({coins: coins});
    });
  };

  useEffect(() => {
    isFavoriteQuery();
    return setData({coins: []});
  }, [navigation]);

  let {loading, coins} = data;

  const handlePress = (coin) => {
    navigation.navigate('CoinsDetail', {coin});
  };

  return (
    <Main>
      {loading ? (
        <ActivityIndicator color={white} size="large" />
      ) : (
        <Fragment>
          <FlatList
            data={coins}
            renderItem={({item}) => (
              <CoinsItem item={item} onPress={handlePress.bind(this, item)} />
            )}
          />
        </Fragment>
      )}
    </Main>
  );
};
