import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { ThemeColors } from '@/constants/Colors';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: 'none' | 'small' | 'medium' | 'large';
  shadow?: boolean;
}

export function Card({ children, style, padding = 'medium', shadow = true }: CardProps) {
  const cardStyles = [
    styles.card,
    styles[padding],
    shadow && styles.shadow,
    style,
  ];

  return <View style={cardStyles}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: ThemeColors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: ThemeColors.borderLight,
  },
  shadow: {
    shadowColor: ThemeColors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  none: {
    padding: 0,
  },
  small: {
    padding: 12,
  },
  medium: {
    padding: 16,
  },
  large: {
    padding: 24,
  },
});