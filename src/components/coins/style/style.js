import styled from 'styled-components/native';
import {charade} from '../../../resources/Colors';
import { Button } from 'react-native-elements';


export const Main = styled.View`
  flex: 1;
  background-color: ${charade};
  color: #fff;
`;

export const ArrowIndicator = styled.Image`
  width: 10px;
  margin-left: 10px;
`;

export const ContainerDetail = styled.View`
  flex: 1;
  background-color: ${charade};
`;

export const ImageDetail = styled.Image`
  width: 30px;
  height: 30px;
  margin: 0 10px;
`;

export const SubHeader = styled.View`
  background-color: rgba(0, 0, 0, 0.1);
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const TitleCoin = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const SectionItem = styled.View`
  padding: 8px;
`;

export const SectionHeader = styled.View`
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ItemText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const SectionText = styled(ItemText)`
  font-weight: bold;
`;

export const MarketsTitle = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 16px;
  margin-bottom: 16px;
  margin-left: 16px;
`;

export const ButtonFavorite = styled(Button)`
  margin: 30px 50px;
`;
