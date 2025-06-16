import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Search, MapPin } from 'lucide-react-native';
import { ThemeColors } from '@/constants/Colors';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onLocationPress: () => void;
  placeholder?: string;
}

export function SearchBar({ 
  onSearch, 
  onLocationPress, 
  placeholder = "¿Qué servicio necesitas?" 
}: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Search size={20} color={ThemeColors.textMuted} style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={ThemeColors.textMuted}
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
        <TouchableOpacity onPress={onLocationPress} style={styles.locationButton}>
          <MapPin size={20} color={ThemeColors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ThemeColors.surface,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: ThemeColors.borderLight,
  },
  searchIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.text,
  },
  locationButton: {
    padding: 4,
    marginLeft: 8,
  },
});