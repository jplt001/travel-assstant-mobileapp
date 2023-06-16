import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
    const trips = useSelector(state => state.trips);

    return (
        <View>
            <Text>Planned Trips:</Text>
            <FlatList
                data={trips}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>Trip Name: {item.name}</Text>
                        <Text>Location: {item.location}</Text>
                        {/* Add more trip details as needed */}
                    </View>
                )}
            />
        </View>
    );
};

export default HomeScreen;
