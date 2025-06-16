import React from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps, ViewStyle } from 'react-native';
import { ThemeColors } from '@/constants/Colors';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  required?: boolean;
}

export function Input({
  label,
  error,
  containerStyle,
  required = false,
  style,
  ...props
}: InputProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={styles.label}>
          {label}
          {required && <Text style={styles.required}> *</Text>}
        </Text>
      )}
      <TextInput
        style={[styles.input, error && styles.inputError, style]}
        placeholderTextColor={ThemeColors.textMuted}
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: ThemeColors.text,
    marginBottom: 8,
  },
  required: {
    color: ThemeColors.error,
  },
  input: {
    borderWidth: 1,
    borderColor: ThemeColors.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.text,
    backgroundColor: ThemeColors.white,
    minHeight: 48,
  },
  inputError: {
    borderColor: ThemeColors.error,
  },
  error: {
    fontSize: 14,
    color: ThemeColors.error,
    marginTop: 4,
    fontFamily: 'Inter-Regular',
  },
});