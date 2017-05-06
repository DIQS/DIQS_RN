/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as c from './app/util/contant'
import IndexPage from './app/page/IndexPage'
export default class dragInfo_Rn extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <IndexPage />
    );
  }
}



AppRegistry.registerComponent('dragInfo_Rn', () => dragInfo_Rn);
