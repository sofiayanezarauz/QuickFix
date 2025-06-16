import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ArrowLeft, Bell, Search } from 'lucide-react-native';
import { ThemeColors } from '@/constants/Colors';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showNotifications?: boolean;
  showSearch?: boolean;
  onBack?: () => void;
  onNotifications?: () => void;
  onSearch?: () => void;
  transparent?: boolean;
}

export function Header({
  title,
  showBack = false,
  showNotifications = false,
  showSearch = false,
  onBack,
  onNotifications,
  onSearch,
  transparent = false,
}: HeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[
      styles.container,
      { paddingTop: insets.top },
      transparent && styles.transparent
    ]}>
      <StatusBar barStyle="dark-content" backgroundColor={transparent ? 'transparent' : ThemeColors.background} />
      <View style={styles.header}>
        <View style={styles.leftSection}>
          {showBack && (
            <TouchableOpacity onPress={onBack} style={styles.iconButton}>
              <ArrowLeft size={24} color={ThemeColors.text} />
            </TouchableOpacity>
          )}
        </View>
        
        <View style={styles.centerSection}>
          <Text style={styles.title}>{title}</Text>
        </View>
        
        <View style={styles.rightSection}>
          {showSearch && (
            <TouchableOpacity onPress={onSearch} style={styles.iconButton}>
              <Search size={24} color={ThemeColors.text} />
            </TouchableOpacity>
          )}
          {showNotifications && (
            <TouchableOpacity onPress={onNotifications} style={styles.iconButton}>
              <Bell size={24} color={ThemeColors.text} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: ThemeColors.background,
    borderBottomWidth: 1,
    borderBottomColor: ThemeColors.borderLight,
  },
  transparent: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 56,
  },
  leftSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  centerSection: {
    flex: 2,
    alignItems: 'center',
  },
  rightSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: ThemeColors.text,
    fontWeight: '600',
  },
  iconButton: {
    padding: 8,
    borderRadius: 12,
    marginHorizontal: 4,
  },
});