import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather, MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

import dados from '../../../db.json';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather name="menu" size={25} color="#706fd3" />
        <View style={styles.boxSearch}>
          <Feather name="search" size={25} color="#706fd3" />
          <Feather name="bell" size={25} style={{ marginLeft: 14 }} color="#706fd3" />
        </View>
      </View>

      <View style={styles.boxTitle}>
        <Text style={styles.boxTitleTitle}>Find your</Text>
        <Text style={styles.boxTitleSubTitle}>Favorite Workout</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator ={false}>
        {dados.map(item => (
          <TouchableOpacity 
            style={[styles.workout, 
              {backgroundColor:`${item.color}`}
            ]} 
            key={item.exercicie}
            onPress={()=>navigation.navigate('Detail',{ item })}
          >
            <View style={styles.workoutDescription}>
              <Text style={styles.workoutDescriptionTitle}>{item.exercicie}</Text>

              <View style={styles.workoutExercicie}>
                <MaterialIcons name="fitness-center" color="#fff" />
                <Text style={styles.workoutExercicieTitle}>{item.quantity} Exercicies</Text>
              </View>

              <View style={styles.workoutTime}>
                <Feather name="clock" color="#fff" />
                <Text style={styles.workoutTimeTitle}>{item.duration} Hours</Text>
              </View>

            </View>
            <Image source={{uri:`${item.wallpaper}`}} style={{ width: 150, height: 100 }} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },

  boxSearch: {
    flexDirection: 'row'
  },

  boxTitle: {
    marginBottom: 15
  },

  boxTitleTitle: {
    fontSize: 19,
    color: '#706fd3'
  },

  boxTitleSubTitle: {
    fontSize: 22,
    color: '#706fd3',
    fontWeight: 'bold'
  },

  content: {
    flex: 1,
  },

  workout: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: '#c56cf0',
    borderRadius: 15,
    marginBottom: 13,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
  },

  workoutDescription: {},

  workoutDescriptionTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8
  },

  workoutExercicie: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  workoutExercicieTitle: {
    color: '#fff',
    marginLeft: 5
  },

  workoutTime: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  workoutTimeTitle: {
    color: '#fff',
    marginLeft: 5
  }
})

export default Home;