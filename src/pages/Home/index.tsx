import React, { useState } from 'react';

import { 
    SafeAreaView, 
    Text,
    StyleSheet,
    TextInput,
    Platform,
    TouchableOpacity

  } from 'react-native';

export function Home() {
  const [ newSkill, setNewSkill ] = useState('');

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

      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginTop: 50 }]}>
        My Skills
      </Text>
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
  },
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  }
})