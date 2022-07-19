import { StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  tituloprincipal: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
    color: '#000'
  },
  imginicial: {
    width: 350,
    height: 150,
    borderRadius: 4,
    marginBottom: 10
  },
  descricao: {
    fontSize: 13,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    textAlign: 'justify'
  },
  box: {
    width: 350,
    height: 100,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  imgbox: {
    width: 100,
    height: 100
  },
  titulo: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  descricaobox: {
    fontSize: 12,
    textAlign: 'justify'
  },
  subbox: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: 230,
    height: 100,
    marginLeft: 10,
    marginRight: 10
  }
})
export default estilos
