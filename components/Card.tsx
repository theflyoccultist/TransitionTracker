import React from 'react';
import { View, Text, ViewStyle, TextStyle, Image, ImageSourcePropType } from 'react-native';
import styles from '../src/styles/CardStyle';

interface CardProps {
  title: string;
  description: string;
  image?: ImageSourcePropType;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  descriptionStyle?: TextStyle;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  description,
  image,
  backgroundColor = '#fff',
  textColor = '#000',
  style,
  titleStyle,
  descriptionStyle
  }) => {
  return (
    <View style={[styles.container, style, {backgroundColor}]}>
      {image && <Image source={image} style={styles.image}/>}
      <Text style={[styles.title, titleStyle, { color: textColor }]}>{title}</Text>
      <Text style={[styles.description, descriptionStyle, { color: textColor }]}>{description}</Text>
    </View>
  );
};

export default Card;
