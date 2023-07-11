import React, { useState } from 'react';

import { ButtonAddSkills } from '../../components/ButtonAddSkills';

import { ListMySkills } from '../../components/ListMySkills';

import { 
    SafeAreaView, 
    Text,
    StyleSheet,
    TextInput,
    Platform

  } from 'react-native';

export function Home() {
  const [ newSkill, setNewSkill ] = useState('');
  const [ mySkills, setMySkills ] = useState([]);

  function handleAddNewSkill() {
    //@ts-ignore
    setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Welcome
      </Text>

      <Text style={[styles.title, { marginTop: 6 }]}>Nilo Freitas</Text>

      <TextInput 
        style={styles.input}
        placeholder='New skill' 
        placeholderTextColor="#555"  
        value={newSkill}
        onChangeText={setNewSkill}
      />

      <ButtonAddSkills 
        handleAddNewSkill={handleAddNewSkill}
      />      

      <Text style={[styles.title, { marginVertical: 30 }]}>
        My Skills
      </Text>

      <ListMySkills 
        mySkills={mySkills}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 7,
    marginTop: 30
  }
})