import React from 'react';

import { 
    TouchableOpacity, 
    StyleSheet, 
    Text 
} from 'react-native';

interface ButtonAddSkillProps {
  handleAddNewSkill: any;
}

export function ButtonAddSkills({ handleAddNewSkill }: ButtonAddSkillProps) {
  return (
    <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
  },
})