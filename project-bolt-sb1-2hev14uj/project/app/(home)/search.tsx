import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { Header } from '@/components/ui/Header';
import { SearchBar } from '@/components/home/SearchBar';
import { ServiceCard } from '@/components/home/ServiceCard';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Professional } from '@/types';
import { ThemeColors } from '@/constants/Colors';
import { Filter, SlidersHorizontal } from 'lucide-react-native';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedDistance, setSelectedDistance] = useState('10');

  // Mock search results
  const searchResults: Professional[] = [
    {
      id: '1',
      name: 'Carlos Mendoza',
      email: 'carlos@email.com',
      userType: 'professional',
      skills: ['Plomería', 'Instalaciones'],
      experience: 8,
      rating: 4.8,
      reviewCount: 127,
      certifications: ['Instalador Gas', 'Plomero Matriculado'],
      availability: {} as any,
      hourlyRate: 2500,
      serviceRadius: 15,
      backgroundCheck: true,
      completedJobs: 234,
      responseTime: 15,
      subscription: 'basic',
      createdAt: new Date(),
      isVerified: true,
      location: {
        latitude: -34.6037,
        longitude: -58.3816,
        address: 'Av. Corrientes 1234',
        city: 'CABA',
        neighborhood: 'San Nicolás',
      },
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: '2',
      name: 'María Rodriguez',
      email: 'maria@email.com',
      userType: 'professional',
      skills: ['Electricidad', 'Instalaciones'],
      experience: 6,
      rating: 4.9,
      reviewCount: 89,
      certifications: ['Electricista Matriculada'],
      availability: {} as any,
      hourlyRate: 2800,
      serviceRadius: 20,
      backgroundCheck: true,
      completedJobs: 156,
      responseTime: 12,
      subscription: 'advanced',
      createdAt: new Date(),
      isVerified: true,
      location: {
        latitude: -34.6037,
        longitude: -58.3816,
        address: 'Av. Santa Fe 2456',
        city: 'CABA',
        neighborhood: 'Palermo',
      },
      avatar: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: '3',
      name: 'Roberto Silva',
      email: 'roberto@email.com',
      userType: 'professional',
      skills: ['Carpintería', 'Muebles'],
      experience: 12,
      rating: 4.7,
      reviewCount: 203,
      certifications: ['Carpintero Profesional'],
      availability: {} as any,
      hourlyRate: 3200,
      serviceRadius: 25,
      backgroundCheck: true,
      completedJobs: 387,
      responseTime: 20,
      subscription: 'advanced',
      createdAt: new Date(),
      isVerified: true,
      location: {
        latitude: -34.6037,
        longitude: -58.3816,
        address: 'Av. Rivadavia 5678',
        city: 'CABA',
        neighborhood: 'Caballito',
      },
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleLocationPress = () => {
    console.log('Location pressed');
  };

  const handleProfessionalPress = (professional: Professional) => {
    console.log('Professional selected:', professional.name);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const applyFilters = () => {
    console.log('Applying filters...');
    setShowFilters(false);
  };

  const clearFilters = () => {
    setPriceRange({ min: '', max: '' });
    setSelectedDistance('10');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Buscar Profesionales" 
        showBack={false}
      />
      
      <View style={styles.searchSection}>
        <SearchBar 
          onSearch={handleSearch}
          onLocationPress={handleLocationPress}
          placeholder="Buscar por servicio o profesional..."
        />
        
        <View style={styles.filterBar}>
          <Button
            title="Filtros"
            onPress={toggleFilters}
            variant="outline"
            size="small"
            style={styles.filterButton}
          />
          <View style={styles.filterIcon}>
            <SlidersHorizontal size={20} color={ThemeColors.primary} />
          </View>
        </View>
      </View>

      {showFilters && (
        <View style={styles.filtersContainer}>
          <Text style={styles.filtersTitle}>Filtros de Búsqueda</Text>
          
          <View style={styles.filterSection}>
            <Text style={styles.filterLabel}>Rango de Precio (por hora)</Text>
            <View style={styles.priceInputs}>
              <Input
                placeholder="Mín."
                value={priceRange.min}
                onChangeText={(text) => setPriceRange({...priceRange, min: text})}
                style={styles.priceInput}
                keyboardType="numeric"
              />
              <Text style={styles.priceSeparator}>-</Text>
              <Input
                placeholder="Máx."
                value={priceRange.max}
                onChangeText={(text) => setPriceRange({...priceRange, max: text})}
                style={styles.priceInput}
                keyboardType="numeric"
              />
            </View>
          </View>

          <View style={styles.filterSection}>
            <Text style={styles.filterLabel}>Distancia Máxima</Text>
            <View style={styles.distanceOptions}>
              {['5', '10', '15', '20'].map((distance) => (
                <Button
                  key={distance}
                  title={`${distance} km`}
                  onPress={() => setSelectedDistance(distance)}
                  variant={selectedDistance === distance ? 'primary' : 'outline'}
                  size="small"
                  style={styles.distanceButton}
                />
              ))}
            </View>
          </View>

          <View style={styles.filterActions}>
            <Button
              title="Limpiar"
              onPress={clearFilters}
              variant="ghost"
              size="small"
              style={styles.clearButton}
            />
            <Button
              title="Aplicar Filtros"
              onPress={applyFilters}
              size="small"
              style={styles.applyButton}
            />
          </View>
        </View>
      )}
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.resultsHeader}>
          <Text style={styles.resultsCount}>
            {searchResults.length} profesionales encontrados
          </Text>
          <Text style={styles.resultsLocation}>
            en CABA y alrededores
          </Text>
        </View>

        <View style={styles.resultsList}>
          {searchResults.map((professional) => (
            <ServiceCard
              key={professional.id}
              professional={professional}
              onPress={() => handleProfessionalPress(professional)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.background,
  },
  searchSection: {
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: ThemeColors.borderLight,
  },
  filterBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 8,
  },
  filterButton: {
    minWidth: 80,
  },
  filterIcon: {
    padding: 8,
  },
  filtersContainer: {
    backgroundColor: ThemeColors.surface,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: ThemeColors.borderLight,
  },
  filtersTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: ThemeColors.text,
    marginBottom: 16,
    fontWeight: '600',
  },
  filterSection: {
    marginBottom: 16,
  },
  filterLabel: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: ThemeColors.text,
    marginBottom: 8,
    fontWeight: '500',
  },
  priceInputs: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  priceInput: {
    flex: 1,
  },
  priceSeparator: {
    fontSize: 16,
    color: ThemeColors.textMuted,
  },
  distanceOptions: {
    flexDirection: 'row',
    gap: 8,
  },
  distanceButton: {
    flex: 1,
  },
  filterActions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  clearButton: {
    flex: 1,
  },
  applyButton: {
    flex: 2,
  },
  content: {
    flex: 1,
  },
  resultsHeader: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  resultsCount: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: ThemeColors.text,
    marginBottom: 4,
    fontWeight: '600',
  },
  resultsLocation: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
  },
  resultsList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});