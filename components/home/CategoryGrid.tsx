import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { ServiceCategory } from '@/types';
import { getAllServiceCategories } from '@/constants/ServiceCategories';
import { ThemeColors } from '@/constants/Colors';
import { Card } from '@/components/ui/Card';
import { 
  Wrench, 
  Zap, 
  Thermometer, 
  Hammer, 
  Paintbrush, 
  Sparkles, 
  Microwave, 
  Leaf, 
  Shield, 
  Settings 
} from 'lucide-react-native';

interface CategoryGridProps {
  onCategoryPress: (category: ServiceCategory) => void;
}

const categoryIcons = {
  plumbing: Wrench,
  electrical: Zap,
  hvac: Thermometer,
  carpentry: Hammer,
  painting: Paintbrush,
  cleaning: Sparkles,
  appliance_repair: Microwave,
  landscaping: Leaf,
  security: Shield,
  general_maintenance: Settings,
};

export function CategoryGrid({ onCategoryPress }: CategoryGridProps) {
  const categories = getAllServiceCategories();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Qué necesitas?</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.grid}
      >
        {categories.map((category) => {
          const IconComponent = categoryIcons[category.id];
          return (
            <TouchableOpacity
              key={category.id}
              onPress={() => onCategoryPress(category.id)}
              activeOpacity={0.8}
            >
              <Card style={styles.categoryCard}>
                <View style={[styles.iconContainer, { backgroundColor: `${category.color}15` }]}>
                  <IconComponent size={32} color={category.color} />
                </View>
                <Text style={styles.categoryName}>{category.name}</Text>
              </Card>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: ThemeColors.text,
    marginBottom: 16,
    paddingHorizontal: 20,
    fontWeight: '600',
  },
  grid: {
    paddingHorizontal: 20,
    gap: 12,
  },
  categoryCard: {
    width: 100,
    alignItems: 'center',
    padding: 16,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  categoryName: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: ThemeColors.text,
    textAlign: 'center',
    fontWeight: '500',
  },
});