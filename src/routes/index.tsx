import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Presentation from '../pages/Presentation';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

const Routes:React.FC = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown:false }}>
                <Stack.Screen name="Presentation" component={Presentation} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;