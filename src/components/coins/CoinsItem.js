import React from 'react';
import {ArrowIndicator} from './style/style';
import {ListItem, Avatar} from 'react-native-elements';
import {grey} from '../../resources/Colors';
import {getImageSymbol} from '../../resources/Helpers';

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
        <ListItem.Title>{symbol}</ListItem.Title>
        <ListItem.Subtitle style={{color: grey}}>{name}</ListItem.Subtitle>
        <ListItem.Subtitle style={{color: grey}}>
          ${price_usd} <ArrowIndicator source={getImageByMovement()} />
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron color={grey} />
    </ListItem>
  );
};
