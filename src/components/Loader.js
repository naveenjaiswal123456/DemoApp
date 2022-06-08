import React, { Component } from "react";
import { ActivityIndicator, Dimensions, Image, Modal, StyleSheet, Text, View } from "react-native";
import { Colors } from "../assets/colors";
import Spinner from 'react-native-loading-spinner-overlay';

const Loader = (props) => {
  return (
    props.loading && (
      <Spinner
        size={'small'}
        visible={true}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
        textContent={''}
        customIndicator={<ActivityIndicator size={'small'} color={Colors.primary} />}
      />
    )
  );
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: Colors.primary
  }
});

export default Loader;