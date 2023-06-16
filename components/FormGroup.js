import { View } from "react-native";


export default function FormGroup(props) {
    return (
        <View style={{ paddingBottom: 10, width: '100%'}}>
            { props.children }
        </View>
    );
}