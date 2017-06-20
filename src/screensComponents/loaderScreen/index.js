import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {Colors, Typography, ThemeManager} from '../../style';
import * as Constants from '../../helpers/Constants';
import {BaseComponent} from '../../commons';
import Text from '../../components/text';
import View from '../../components/view';

/**
 * Component that shows a full screen with an activity indicator
 */
export default class LoaderScreen extends BaseComponent {

  static displayName = 'LoaderScreen';

  static propTypes = {
    ...ActivityIndicator.propTypes,
    /**
     * Color of the loading indicator
     */
    loaderColor: React.PropTypes.string,
    /**
     * loader message
     */
    message: PropTypes.string,
    /**
     * message style
     */
    messageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
    /**
    * Show the screen as an overlay
    */
    overlay: PropTypes.bool,
  };

  render() {
    const {message, messageStyle, loaderColor, overlay, ...others} = this.props;
    return (
      <View center style={[overlay ? styles.overlayContainer : styles.container]}>
        <ActivityIndicator
          size={'large'}
          animating
          color={loaderColor || (Constants.isIOS ? Colors.dark60 : ThemeManager.primaryColor)}
          {...others}
        />
        {message && <Text style={[styles.message, messageStyle]}>{message}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.rgba(Colors.white, 0.85),
    zIndex: 100,
  },
  message: {
    ...Typography.text70,
    marginTop: 18,
    color: Colors.dark10,
  },
});
