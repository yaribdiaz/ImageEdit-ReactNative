import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const ImageViewer = ({ placeholderImage, selectedImage }) => {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImage

  return (
      <View>
        <Image 
          style={ styles.image }
          source={ imageSource }
        />
      </View>
    )
}

const styles = StyleSheet.create({

  image: {
    width: 360,
    height: 440,
    borderRadius: 18
  }
});

export default ImageViewer


