import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, Foundation, FontAwesome, AntDesign } from '@expo/vector-icons'

import TelaInicial from './Componentes/TelaInicial/index'
import TelaSobre from './Componentes/TelaSobre/index'
import TelaVitorias from './Componentes/TelaVitorias/index'

const Tabs = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 50
          },
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#F2DF3A',
          tabBarActiveBackgroundColor: '#F2DF3A',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#F2DF3A'
          },
          headerTitleStyle: {
            fontSize: 20
          }
        }}
      >
        <Tabs.Screen
          name="Inicio"
          component={TelaInicial}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            )
          }}
        />
        <Tabs.Screen
          name="Sobre"
          component={TelaSobre}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="questioncircleo" size={24} color={color} />
            )
          }}
        />
        <Tabs.Screen
          name="Vitórias"
          component={TelaVitorias}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="trophy" size={24} color={color} />
            )
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}
