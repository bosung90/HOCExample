// @flow
import { AppRegistry, UIManager } from 'react-native';
import App from 'src/App';

// Enable LayoutAnimation for Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

AppRegistry.registerComponent('HOCExample', () => App);
