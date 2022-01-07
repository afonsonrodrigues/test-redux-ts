import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface IFimes {
  key: number;
  title: string;
  released: string;
  genre: string;
  plot: string;
  poster: string;
  rating: number;
}

const Home = () => {
  const db: IFimes[] = require('../../../db.json');

  return (
    <SafeAreaView>
      <Text style={{fontSize: 35, fontWeight: 'bold', textAlign: 'center'}}>
        Filmes
      </Text>
      <FlatList
        data={db}
        style={{marginHorizontal: 15}}
        renderItem={({item}) => (
          <TouchableOpacity style={{flexDirection: 'row', marginVertical: 10}}>
            <Image
              source={{uri: item.poster}}
              style={{width: 120, height: 120}}
            />
            <View style={{padding: 15}}>
              <Text style={{fontSize: 23, fontWeight: 'bold'}}>
                {item.title}
              </Text>
              <Text>{item.genre}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
