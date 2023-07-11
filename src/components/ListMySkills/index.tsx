import React from 'react-native';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface MySkillsProps {
  mySkills: any;
}

export function ListMySkills({ mySkills }: MySkillsProps) {
  return (
    <View>
      {mySkills.map((item: any) => {
        return (
          <TouchableOpacity 
            style={styles.buttonSkill}
            activeOpacity={0.8}
            key={item}
          >
            <Text style={styles.textSkill}>
              {item}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  }
})