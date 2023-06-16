import React from 'react';
import { View, KeyboardAvoidingView, StatusBar } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/authActions';
import LoginStyle from './styles/LoginStyle';
import FormGroup from '../../components/FormGroup'
export default function LoginScreen({ navigation }) {
    const [email, setEmail] = React.useState('josephpatricktimcang@gmail.com');
    const [password, setPassword] = React.useState('123123');
    const dispatch = useDispatch();


    const handleLogin = () => {
        // Dispatch the login action with email and password
        dispatch(login(email, password));
        // Navigate to the home screen
        // navigation.navigate('Home');
    };


    return (
        <KeyboardAvoidingView style={LoginStyle.baseContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <StatusBar/>
            <View style={LoginStyle.container}>
                <FormGroup>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        mode='outlined'
                        onChangeText={(text) => setEmail(text)}
                        right={<TextInput.Icon icon="email" />}
                    />
                </FormGroup>

                <FormGroup>
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        mode='outlined'
                        secureTextEntry
                        right={<TextInput.Icon icon="eye" />}
                        style={{ width: '100%' }}
                    />
                </FormGroup>
                <Button mode='outlined' onPress={() => handleLogin()}>
                    {'Login '}
                </Button>
            </View>
        </KeyboardAvoidingView>
    );

}