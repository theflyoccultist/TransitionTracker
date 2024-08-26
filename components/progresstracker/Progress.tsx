import React from 'react';
import { View } from 'react-native';
import Card from '../Card';
import Button from '../Button';
 

const Progress: React.FC = () => {
    
    const editList = () => {
        console.log('editing the list')
    }

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
            <Button title="Edit List" onPress={editList} />
        </View>
    )
}

export default Progress;