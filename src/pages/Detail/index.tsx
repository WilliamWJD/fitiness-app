import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


interface IDetail {
  exercicie: string,
  color: string,
  duration: number,
  quantity: number,
  wallpaper: string,
  exercicies: Array<{
    duration: string,
    image: string,
    nivel: string,
    subTitle: string,
    title: string
  }>
}

const Detail: React.FC = ({ route }) => {
  const [trainingDetail, setTrainingDetail] = useState<IDetail>()

  useEffect(() => {
    const { item } = route.params
    setTrainingDetail(item)
    console.log(trainingDetail)
  })

  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: `${trainingDetail?.color}` }]}>
        <Image
          source={{ uri: `${trainingDetail?.wallpaper}` }}
          style={{ width: 200, height: 180 }}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.detailAndFilter}>
          <View style={styles.detail}>
            <Text style={styles.detailTitle}>{trainingDetail?.exercicie}</Text>
            <View style={styles.boxTraining}>
              <View style={styles.BoxExercicie}>
                <MaterialIcons name="fitness-center" color="#706fd3" size={18} />
                <Text style={styles.BoxExercicieTitle}>{trainingDetail?.quantity} Exercicies</Text>
              </View>

              <View style={styles.BoxTime}>
                <Feather name="clock" color="#706fd3" size={18} />
                <Text style={styles.BoxTimeTitle}>{trainingDetail?.duration} Hours</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonFilter}>
            <Feather name="filter" size={15} color="#706fd3" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.contentExercises} showsVerticalScrollIndicator={false}>
          {trainingDetail?.exercicies.map((treino: any) => (
            <TouchableOpacity style={styles.exercise} key={treino.title}>
              <Image
                source={{ uri: 'https://i.pinimg.com/originals/9f/0a/e9/9f0ae95353300399303515a52e370c9c.png' }}
                style={{ width: 80, height: 90 }}
              />
              <View style={styles.exerciseType}>
                <Text style={styles.exerciseTypeTitle}>Supino Reto</Text>
                <Text style={styles.exerciseTypeSubTitle}>Peitoral</Text>
                <View style={styles.exerciseTypeSeries}>
                  <Text style={styles.exerciseTypeSeriesNivel}>Iniciante</Text>
                  <Text style={styles.exerciseTypeSeriesNivelSeries}>4 séries</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    width: '100%',
    height: 250,
    backgroundColor: '#c56cf0',

    alignItems: 'center',
    justifyContent: 'center'
  },

  content: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fcfcfc',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -43,
    paddingHorizontal: 25,
    paddingTop: 30
  },

  detailAndFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detail: {},

  detailTitle: {
    fontSize: 22,
    color: '#706fd3',
    fontWeight: 'bold',
    marginBottom: 10
  },

  BoxExercicie: {
    alignItems: 'center',
    flexDirection: 'row'
  },

  BoxExercicieTitle: {
    marginLeft: 5,
    fontSize: 16,
    color: '#706fd3',
  },

  BoxTime: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10
  },

  BoxTimeTitle: {
    marginLeft: 5,
    fontSize: 16,
    color: '#706fd3'
  },

  boxTraining: {
    flexDirection: 'row'
  },

  buttonFilter: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  contentExercises: {
    marginTop: 20
  },

  exercise: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 14,
    marginBottom:15,
    alignItems: 'center',
    paddingLeft: 10,

    shadowColor: "#f4f4f4",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },

  exerciseType: {
    marginLeft: 15
  },

  exerciseTypeTitle: {
    fontSize: 18,
    color: '#706fd3',
    fontWeight: 'bold',
    marginBottom: 3
  },

  exerciseTypeSubTitle: {
    fontSize: 15,
    color: '#a5a5e2'
  },

  exerciseTypeSeries: {
    flexDirection: 'row',
    marginTop: 10
  },

  exerciseTypeSeriesNivel: {
    fontSize: 13,
    color: '#706fd3',
    fontWeight: 'bold',
  },

  exerciseTypeSeriesNivelSeries: {
    fontSize: 13,
    color: '#706fd3',
    fontWeight: 'bold',
    marginLeft: 10
  }
})

export default Detail;