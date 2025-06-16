import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image } from 'react-native';
import { Header } from '@/components/ui/Header';
import { SearchBar } from '@/components/home/SearchBar';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { ServiceCard } from '@/components/home/ServiceCard';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ServiceCategory, Professional } from '@/types';
import { ThemeColors } from '@/constants/Colors';
import { Star, MapPin, Clock } from 'lucide-react-native';

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);

  // Mock data for featured professionals
  const featuredProfessionals: Professional[] = [
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
  ];

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  const handleLocationPress = () => {
    console.log('Location pressed');
  };

  const handleCategoryPress = (category: ServiceCategory) => {
    setSelectedCategory(category);
    console.log('Category selected:', category);
  };

  const handleProfessionalPress = (professional: Professional) => {
    console.log('Professional selected:', professional.name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="QuickFix" 
        showNotifications 
        onNotifications={() => console.log('Notifications')}
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>¡Hola!</Text>
          <Text style={styles.welcomeSubtext}>
            Encuentra profesionales confiables para tu hogar
          </Text>
        </View>

        {/* Search Bar */}
        <SearchBar 
          onSearch={handleSearch}
          onLocationPress={handleLocationPress}
        />

        {/* Categories */}
        <CategoryGrid onCategoryPress={handleCategoryPress} />

        {/* Featured Professionals */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Profesionales Destacados</Text>
            <Text style={styles.sectionSubtitle}>Los mejores valorados cerca tuyo</Text>
          </View>
          
          <View style={styles.professionalsContainer}>
            {featuredProfessionals.map((professional) => (
              <ServiceCard
                key={professional.id}
                professional={professional}
                onPress={() => handleProfessionalPress(professional)}
              />
            ))}
          </View>
        </View>

        {/* Emergency Services */}
        <Card style={styles.emergencyCard}>
          <View style={styles.emergencyContent}>
            <View style={styles.emergencyIcon}>
              <Clock size={24} color={ThemeColors.error} />
            </View>
            <View style={styles.emergencyInfo}>
              <Text style={styles.emergencyTitle}>¿Necesitas ayuda urgente?</Text>
              <Text style={styles.emergencySubtitle}>
                Servicios de emergencia disponibles 24/7
              </Text>
            </View>
            <Button
              title="Emergencia"
              onPress={() => console.log('Emergency pressed')}
              variant="outline"
              size="small"
            />
          </View>
        </Card>

        {/* Tutorials Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Aprende y Ahorra</Text>
            <Text style={styles.sectionSubtitle}>Tutoriales paso a paso</Text>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.tutorialContainer}>
              <Card style={styles.tutorialCard}>
                <Image
                  source={{ uri: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=400' }}
                  style={styles.tutorialImage}
                />
                <View style={styles.tutorialInfo}>
                  <Text style={styles.tutorialTitle}>Cambiar un Grifo</Text>
                  <Text style={styles.tutorialPrice}>$500</Text>
                  <View style={styles.tutorialRating}>
                    <Star size={14} color={ThemeColors.accent} fill={ThemeColors.accent} />
                    <Text style={styles.tutorialRatingText}>4.7</Text>
                  </View>
                </View>
              </Card>
              
              <Card style={styles.tutorialCard}>
                <Image
                  source={{ uri: 'https://images.pexels.com/photos/5974401/pexels-photo-5974401.jpeg?auto=compress&cs=tinysrgb&w=400' }}
                  style={styles.tutorialImage}
                />
                <View style={styles.tutorialInfo}>
                  <Text style={styles.tutorialTitle}>Reparar Enchufe</Text>
                  <Text style={styles.tutorialPrice}>$300</Text>
                  <View style={styles.tutorialRating}>
                    <Star size={14} color={ThemeColors.accent} fill={ThemeColors.accent} />
                    <Text style={styles.tutorialRatingText}>4.9</Text>
                  </View>
                </View>
              </Card>
            </View>
          </ScrollView>
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
  content: {
    flex: 1,
  },
  welcomeSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: ThemeColors.text,
    marginBottom: 4,
    fontWeight: '700',
  },
  welcomeSubtext: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: ThemeColors.text,
    marginBottom: 4,
    fontWeight: '600',
  },
  sectionSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
  },
  professionalsContainer: {
    paddingHorizontal: 20,
  },
  emergencyCard: {
    marginHorizontal: 20,
    marginBottom: 24,
    backgroundColor: ThemeColors.error + '10',
    borderColor: ThemeColors.error + '20',
  },
  emergencyContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emergencyIcon: {
    width: 48,
    height: 48,
    backgroundColor: ThemeColors.error + '20',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  emergencyInfo: {
    flex: 1,
  },
  emergencyTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: ThemeColors.text,
    marginBottom: 4,
    fontWeight: '600',
  },
  emergencySubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
  },
  tutorialContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
  },
  tutorialCard: {
    width: 160,
    padding: 0,
  },
  tutorialImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  tutorialInfo: {
    padding: 12,
  },
  tutorialTitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: ThemeColors.text,
    marginBottom: 8,
    fontWeight: '600',
  },
  tutorialPrice: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: ThemeColors.primary,
    marginBottom: 4,
    fontWeight: '700',
  },
  tutorialRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  tutorialRatingText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: ThemeColors.textSecondary,
    fontWeight: '500',
  },
});