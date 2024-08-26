import React, { useState } from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Button from '../Button';
import Modal from 'react-native-modal'

type Photo = {
  uri: string;
  fileName: string;
};

const PhotoGallery = () => {
    const [photoUri, setPhotoUri] = useState<string | null>(null);
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState<Photo | null>(null);

    const openFullScreen = (photo: Photo) => {
      setCurrentPhoto(photo);
      setModalVisible(true);
    };
  
    const closeFullScreen = () => {
      setModalVisible(false);
    };

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            const newPhotoUri = result.assets[0].uri;
            const newPhoto: Photo = {
              uri: newPhotoUri,
              fileName: result.assets[0].fileName || "Unnamed Photo",
            };
              setPhotoUri(newPhotoUri);
              setPhotos([...photos, newPhoto])
            }
        };

        
        return (

          <View style={styles.container}>
            {photoUri && (
              <Pressable onPress={() => openFullScreen({ uri: photoUri, fileName: 'Selected Photo' })}>
                <Image source={{uri: photoUri}}
                        style={styles.image} 
                />
              </Pressable>
            )}

            <Button title="Upload Photo" onPress={pickImage} />
      
            <Modal isVisible={modalVisible}>
              <View style={styles.modalContainer}>
                {currentPhoto && (
                    <Image 
                      source={{ uri: currentPhoto.uri }}
                      style={styles.fullScreenImage}
                    />)}
                    <Button title="Close" onPress={closeFullScreen} />
              </View>
            </Modal>

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
  modalContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});