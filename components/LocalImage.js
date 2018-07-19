import React, { Component } from 'react';
import {Image, Dimensions} from 'react-native';

const LocalImage = ({source, originalWidth, originalHeight}) => {
    let windowWidth = Dimensions.get('window').width;
    let widthChange = (windowWidth)/originalWidth;
    let newWidth = widthChange*originalWidth;
    let newHeight = widthChange*originalHeight;

    return(
        <Image source={source} style={{width: newWidth, height: newHeight}}></Image>
    );
}

export default LocalImage;
