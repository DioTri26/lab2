import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Manager from './Manager';
import {View, Text, Button} from 'react-native';
import Info from './Src/Screen/info';

const Stack = createNativeStackNavigator();

const Home = (props) => {
    const navigation = props.navigation;
    return (<View>
        <Text>TRANG CHU</Text>
        <Button
            title='Thông tin cá nhân'
            onPress={() => navigation.navigate('Info', {name: 'Tri'})}
        />
    </View>);
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Manager' component={Manager} /> 
                <Stack.Screen name='Info' component={Info} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
