import React from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { register } from '../../actions/authActions';


export default function RegisterScreen() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const dispatch = useDispatch();


    const handleRegister = () => {
        // Dispatch the register action with email and password
        dispatch(register(email, password));
        // Navigate to the login screen
        navigation.navigate('Login');
    };

    return (
        <View>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <Button title="Register" onPress={handleRegister} />
        </View>
    );
}