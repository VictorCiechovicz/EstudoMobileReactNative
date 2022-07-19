import { StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  capa: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 50,
    borderWidth: 3
  },
  box: {
    width: 300,
    height: 100,
    backgroundColor: '#000',
    borderRadius: 20,
    textAlign: 'center'
  },
  titulo: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitulo: {
    color: '#fff',
    fontSize: 14,
    marginHorizontal: 20
  }
})

export default estilos
