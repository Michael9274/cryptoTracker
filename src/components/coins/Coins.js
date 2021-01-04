import React, {useEffect, useState, Fragment} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {asyncGet} from '../../libs/Http';
import CoinsItem from './CoinsItem';
import {white} from '../../resources/Colors';
import {Main} from './style/style';
import {API_ALL_COINS} from '@env';
import SearchCoins from './SearchCoins';

export default ({navigation}) => {
  let [data, setData] = useState({
    loading: true,
    coins: [],
    allCoins: [],
  });

  const getCoins = async () => await asyncGet(API_ALL_COINS);

  useEffect(() => {
    getCoins().then((response) => {
      setData({coins: response.data, allCoins: response.data});
    });
  }, []);

  let {loading, coins, allCoins} = data;

  const handlePress = (coin) => {
    navigation.navigate('CoinsDetail', {coin});
  };

  const handleSearch = (query) => {
    const coinsFiltered = allCoins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase()),
    );
    setData({...data, coins: coinsFiltered});
  };

  return (
    <Main>
      {loading ? (
        <ActivityIndicator color={white} size="large" />
      ) : (
        <Fragment>
          <SearchCoins onChange={handleSearch} />
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
