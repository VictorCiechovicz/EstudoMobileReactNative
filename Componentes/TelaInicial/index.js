import React from 'react'
import { Text, ImageBackground, View, Image } from 'react-native'

import Capa from '../../assets/fundo.jpg'
import AyrtonInicial from '../../assets/foto-capa.jpg'

import estilos from './estilos'

export default function TelaInicial() {
  return (
    <ImageBackground source={Capa} style={estilos.fundo} blurRadius={5}>
      <Image source={AyrtonInicial} style={estilos.capa} />

      <View style={estilos.box}>
        <Text style={estilos.titulo}>Ayrton Senna</Text>
        <Text style={estilos.subtitulo}>
          Através desse App, voce vai conhecer um pouco sobre quem foi esse
          grande piloto.
        </Text>
      </View>
    </ImageBackground>
  )
}
