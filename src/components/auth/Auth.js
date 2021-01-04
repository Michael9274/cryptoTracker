import React, {Fragment, useState} from 'react';
import {SocialIcon} from 'react-native-elements';
import {ContainerAuth} from './styles/styles';

export default () => {
  let [login, setLogin] = useState();

  return (
    <ContainerAuth>
      <SocialIcon
        title="Sign In With Google"
        button
        type="google"
      />
    </ContainerAuth>
  );
};
