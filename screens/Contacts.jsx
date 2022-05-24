import { FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Text, View } from '../components/Themed';
import { useContext } from 'react';
import { ContactsContext } from '../contexts/ContactsContext';

export default function Contancts({ navigation }) {
  return (
    <View>
      <Text style={styles.searchBar}>Search...</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ContactsGallery navigation={navigation}/>
    </View>
  );
}



export const ContactsGallery = ({navigation}) => {
  const {contacts} = useContext(ContactsContext);
  return(
    <FlatList
      style={styles.gallery}
      data={contacts}
      renderItem={({item}) => (
        <ContactItem data={item} navigation={navigation}/>
      )}
      keyExtractor={item => item.id.toString()}
    />
  )
}



const ContactItem = ({data, navigation}) => {
  const {firstName, lastName} = data;
  const handlePress = () =>{
    navigation.navigate('Details', {data: data})
  }
  return(
  <View
    style={styles.contact}>
    <TouchableOpacity
      onPress={handlePress}
    >
    <Text style={{fontSize: 14}}>{firstName} {lastName}</Text>
    </TouchableOpacity>
  </View>
  )
};


const styles = StyleSheet.create({
  searchBar: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  gallery:{
    backgroundColor: 'black',
    height: '100%',
  },
  contact:{
    borderRadius: 1,
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 2,
  },
  separator: {
    marginVertical: 3,
    backgroundColor: 'gray',
    height: 1,
    width: '100%',
  },
});
