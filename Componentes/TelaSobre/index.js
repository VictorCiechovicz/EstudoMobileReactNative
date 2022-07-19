import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'

import estilos from './estilos'
import Capa from '../../assets/foto-capa.jpg'
import Reidachuva from '../../assets/rei-da-chuva.png'
import Reidemonaco from '../../assets/rei-de-monaco.png'
import Silvastone from '../../assets/silvastone.png'
import Preparacao from '../../assets/preparacao.png'

export default function TelaSobre() {
  return (
    <ScrollView>
      <View style={estilos.container}>
        <Text style={estilos.tituloprincipal}>Ayrton Senna</Text>
        <Image style={estilos.imginicial} source={Capa} />

        <Text style={estilos.descricao}>
          No esporte mais global e veloz do mundo, um piloto é considerado o
          mais rápido de todos os tempos: Ayrton Senna. Seus expressivos números
          ajudam a explicar porque o piloto ganhou status de mito do esporte.
          Mas Senna é mais do que isso: o brasileiro foi responsável por alguns
          dos momentos mais mágicos da principal categoria do automobilismo
          mundial.
        </Text>

        <View style={estilos.box}>
          <Image style={estilos.imgbox} source={Reidachuva} />
          <View style={estilos.subbox}>
            <Text style={estilos.titulo}>Rei da Chuva</Text>
            <Text style={estilos.descricaobox}>
              Aprimorou a pilotagem no asfalto molhado e mostrou ser um piloto
              de determinação, garra e persistência.
            </Text>
          </View>
        </View>

        <View style={estilos.box}>
          <Image style={estilos.imgbox} source={Reidemonaco} />
          <View style={estilos.subbox}>
            <Text style={estilos.titulo}>Rei de Mônaco</Text>
            <Text style={estilos.descricaobox}>
              Conquistou o posto por ser o maior recordista com mais numero de
              vitórias, com seis conquistas.
            </Text>
          </View>
        </View>

        <View style={estilos.box}>
          <Image style={estilos.imgbox} source={Silvastone} />
          <View style={estilos.subbox}>
            <Text style={estilos.titulo}>Silvastone</Text>
            <Text style={estilos.descricaobox}>
              Por seu currículo impressionante em Silverstone, Ayrton recebeu o
              apelido de 'Silvastone' pela imprensa inglesa.
            </Text>
          </View>
        </View>

        <View style={estilos.box}>
          <Image style={estilos.imgbox} source={Preparacao} />
          <View style={estilos.subbox}>
            <Text style={estilos.titulo}>Preparação</Text>
            <Text style={estilos.descricaobox}>
              Para vencer corridas e campeonatos o piloto precisava ter uma
              preparação fisíca de atleta.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
