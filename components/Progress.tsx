import React from 'react';
import { View } from 'react-native';
import Card from './Card';

const Progress: React.FC = () => {
    return (
        <View>
            <Card 
                title='Buy a dress'
                description='it will fit you well.'
            />
            <Card 
                title='Find a job'
                description='that you will liek?'
            />
            <Card 
                title='Come out to family'
                description='Aw hell naw..'
            />
        </View>
    )
}

export default Progress;