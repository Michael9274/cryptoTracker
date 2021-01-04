import React from 'react';
import {ArrowIndicator} from './style/style';
import {ListItem, Avatar} from 'react-native-elements';
import {grey} from '../../resources/Colors';
import {getImageSymbol} from '../../resources/Helpers';
import {Text, View} from 'react-native';

export default ({item, onPress}) => {
  let {symbol, name, percent_change_1h, price_usd} = item;

  const routeImages = 'cryptoTracker/src/assets/';

  const getImageByMovement = () => {
    if (percent_change_1h > 0) {
      return require(`${routeImages}arrow_up.png`);
    }
    return require(`${routeImages}arrow_down.png`);
  };

  return (
    <ListItem bottomDivider onPress={onPress}>
      <Avatar source={{uri: getImageSymbol(name)}} />
      <ListItem.Content>
        <ListItem.Title style={{fontWeight: 'bold'}}>{symbol}</ListItem.Title>
        <ListItem.Subtitle style={{color: grey}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <Text style={{color: grey}}>{name}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>${price_usd}</Text>
              <ArrowIndicator source={getImageByMovement()} />
            </View>
          </View>
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron color={grey} />
    </ListItem>
  );
};
