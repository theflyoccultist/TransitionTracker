import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Button from '../Button';


const PhotoGallery = () => {
    const [photoUri, setPhotoUri] = useState<string | null>(null);

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

            if (!result.canceled && result.assets && result.assets.length > 0) {
            const newPhotoUri = result.assets[0].uri;
              setPhotoUri(newPhotoUri);
            }
        };
        
        return (
          <View style={styles.container}>
            <Image 
              source={photoUri ? {uri: photoUri}
            : require('@/assets/images/profile1.png')
          }
          style={styles.image}
            />
            <Button title="Upload Photo" onPress={pickImage} />
          </View>
        );
      };


export default PhotoGallery;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
});