import styled from 'styled-components/native';
import {zircon} from '../../../resources/Colors';

export const ContainerMarket = styled.View`
  background-color: rgba(0, 0, 0, 0.1);
  border-color: ${zircon};
  border-width: 1px;
  padding: 16px;
  margin-right: 8px;
  align-items: center;
`;

export const NameText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const PriceText = styled.Text`
  color: #fff;
`;
