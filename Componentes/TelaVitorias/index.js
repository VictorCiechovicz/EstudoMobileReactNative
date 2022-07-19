import React from 'react'
import { ImageBackground, ScrollView, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import Fundo from '../../assets/fundo.jpg'
import Vitoria1 from '../../assets/vitoria1.jpg'
import Vitoria2 from '../../assets/vitoria2.jpg'
import Vitoria3 from '../../assets/vitoria3.jpg'

import estilos from './estilos'

export default function TelaVitorias() {
  return (
    <ScrollView>
      <ImageBackground source={Fundo} style={estilos.fundo} blurRadius={5}>
        <View style={estilos.boxinicial}>
          <Text style={estilos.titulobox}>Senna em Números</Text>
          <Text style={estilos.descricaobox}>
            Ele conquistou três campeonatos mundiais em 1988, 1990 e 1991, e
            ganhou 41 Grandes Prêmios e 65 pole positions
          </Text>
          <View style={estilos.subbox}>
            <Text style={estilos.titulosobbox}>
              <FontAwesome name="trophy" size={24} color="#F2DF3A" />
              <Text style={estilos.destaquebox}>161 </Text>GPS DISPUTADOS
            </Text>
            <Text style={estilos.titulosobbox}>
              <FontAwesome name="trophy" size={24} color="#F2DF3A" />
              <Text style={estilos.destaquebox}>65</Text> POLE POSITIONS
            </Text>
            <Text style={estilos.titulosobbox}>
              <FontAwesome name="trophy" size={24} color="#F2DF3A" />
              <Text style={estilos.destaquebox}>41</Text> VITÓRIAS
            </Text>
            <Text style={estilos.titulosobbox}>
              <FontAwesome name="trophy" size={24} color="#F2DF3A" />
              <Text style={estilos.destaquebox}>3X</Text> CAMEPEÃO MUNDIAL
            </Text>
          </View>
        </View>

        <ImageBackground style={estilos.imgbox} source={Vitoria1}>
          <View style={estilos.box}>
            <Text style={estilos.titulo}>Campeão Mundial-1988</Text>
          </View>
        </ImageBackground>

        <ImageBackground style={estilos.imgbox} source={Vitoria2}>
          <View style={estilos.box}>
            <Text style={estilos.titulo}>Campeonao Mundial-1990</Text>
          </View>
        </ImageBackground>

        <ImageBackground style={estilos.imgbox} source={Vitoria3}>
          <View style={estilos.box}>
            <Text style={estilos.titulo}>Campeonao Mundial-1991</Text>
          </View>
        </ImageBackground>
      </ImageBackground>
    </ScrollView>
  )
}
