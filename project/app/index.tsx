import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { UserType } from '@/types';
import { UserTypeSelector } from '@/components/onboarding/UserTypeSelector';
import { router } from 'expo-router';
import { ThemeColors } from '@/constants/Colors';

export default function OnboardingScreen() {
  const handleUserTypeSelect = (userType: UserType) => {
    // In a real app, you'd save this to user state/context
    switch (userType) {
      case 'home':
        router.replace('/(tabs)/home');
        break;
      case 'business':
        router.replace('/(tabs)/business');
        break;
      case 'professional':
        router.replace('/(tabs)/professional');
        break;
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <UserTypeSelector onSelectUserType={handleUserTypeSelect} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
});