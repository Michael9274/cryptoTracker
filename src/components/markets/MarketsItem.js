import React from 'react';
import {ContainerMarket, NameText, PriceText} from './styles/styles';

export default ({market}) => {
  let {name, price_usd} = market;
  return (
    <ContainerMarket>
      <NameText>{name}</NameText>
      <PriceText>{price_usd}</PriceText>
    </ContainerMarket>
  );
};
