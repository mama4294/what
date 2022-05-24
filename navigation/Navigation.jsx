import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';

import Contacts from '../screens/Contacts';
import TabTwoScreen from '../screens/TabTwoScreen';
import AddContactModal from '../screens/AddContactModal'

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={({ navigation }) => ({
            title: 'Contacts',
            headerRight: () => (
              <Button 
              title="+"
              onPress={() => navigation.navigate('Modal')} />
            )
            })}
        />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen 
            name="Modal" 
            component={AddContactModal}           
            options={({ navigation }) => ({
            title: 'New Contact',
            headerLeft: () => (
              <Button 
              title="Cancel"
              onPress={() =>navigation.goBack()} />
            ),
            headerRight: () => (
              <Button 
              title="Add"
              onPress={() => alert("Done")} />
            )
            })}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};