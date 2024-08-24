import React from 'react';
import { View } from 'react-native';
import Card from './Card';
import Button from './Button';

const ImageLibrary: React.FC = () => {
    return (
        <View>
        <Card 
            title="Image Card" 
            description="This card ha an image."
            image={require('@/assets/images/profile1.png')}
        />
        <Card 
            title="Image Card" 
            description="This card ha an image."
            image={require('@/assets/images/profile1.png')}
        />
        <Card 
            title="Image Card" 
            description="This card ha an image."
            image={require('@/assets/images/profile1.png')}
        />
        <Button title='Edit Pictures' onPress={() => console.log("button 1 pressed")}/>
        </View>
    );
};

export default ImageLibrary;