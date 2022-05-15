import { FlatList, StyleSheet } from 'react-native';
import { useState } from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Contancts({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View>
      <Text style={styles.searchBar}>Search...</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ContactsGallery/>
    </View>
  );
}

export type Contact = {
  id: number;
  firstName: string;
  lastName?: string;
  phoneNumber?: string;
}

const defaultContacts = [
  {
    id:1,
    firstName: "Genny",
    lastName: "Bennett",
    phoneNumber: "123-456-7890"
  },
  {
    id:2,
    firstName: "Chris",
    lastName: "Hafrel",
    phoneNumber: "123-456-7890"},
  {
    id:3,
    firstName: "Jessa",
    lastName: "Write",
    phoneNumber: "123-456-7890"
  },
]

export const ContactsGallery = () => {
  const [contacts, setContacts] = useState<Contact[]>(defaultContacts);

  return(
    <FlatList
      style={styles.gallery}
      data={contacts}
      renderItem={({item}) => (
        <ContactItem data={item}/>
      )}
      keyExtractor={item => item.id.toString()}
    />
  )
}

const ContactItem = ({data}: {data: Contact}) => {
  const {firstName, lastName, phoneNumber} = data;
  return(
  <View
    style={styles.contact}>
    <Text style={{fontSize: 14}}>{firstName} {lastName}</Text>
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
