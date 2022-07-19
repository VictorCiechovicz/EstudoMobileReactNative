import { StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxinicial: {
    width: 300,
    height: 200,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 5
  },

  titulobox: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10
  },
  descricaobox: {
    color: '#fff',
    fontSize: 10,
    margin: 5,
    textAlign: 'center'
  },
  subbox: {
    width: 300,
    height: 200,
    alignItems: 'flex-start',
    marginLeft: 15,
    marginTop: 10
  },
  titulosobbox: {
    color: '#fff'
  },
  destaquebox: {
    color: '#F2DF3A',
    fontWeight: 'bold'
  },

  box: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    opacity: 20,
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgbox: {
    width: 300,
    height: 200,
    marginBottom: 10
  },
  titulo: {
    color: '#fff'
  }
})

export default estilos
