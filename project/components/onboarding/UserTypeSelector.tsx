import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Chrome as Home, Building2, Wrench } from 'lucide-react-native';
import { UserType } from '@/types';
import { ThemeColors } from '@/constants/Colors';
import { Card } from '@/components/ui/Card';

interface UserTypeSelectorProps {
  onSelectUserType: (userType: UserType) => void;
}

export function UserTypeSelector({ onSelectUserType }: UserTypeSelectorProps) {
  const userTypes = [
    {
      type: 'home' as UserType,
      title: 'Soy un Hogar',
      subtitle: 'Necesito servicios para mi casa',
      description: 'Encuentra profesionales confiables para reparaciones y mantenimiento de tu hogar',
      icon: Home,
      color: ThemeColors.primary,
      benefits: ['Profesionales verificados', 'Garantía de calidad', 'Precios transparentes']
    },
    {
      type: 'business' as UserType,
      title: 'Soy una PyME',
      subtitle: 'Mantenimiento para mi empresa',
      description: 'Gestiona el mantenimiento de tu negocio con profesionales especializados',
      icon: Building2,
      color: ThemeColors.secondary,
      benefits: ['Mantenimiento programado', 'Atención prioritaria', 'Facturación centralizada']
    },
    {
      type: 'professional' as UserType,
      title: 'Soy un Profesional',
      subtitle: 'Ofrezco servicios de calidad',
      description: 'Conecta con clientes que necesitan tus servicios profesionales',
      icon: Wrench,
      color: ThemeColors.accent,
      benefits: ['Más clientes', 'Pagos garantizados', 'Crecimiento profesional']
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>¿Cómo usarás QuickFix?</Text>
        <Text style={styles.subtitle}>
          Selecciona el tipo de cuenta que mejor se adapte a tus necesidades
        </Text>
      </View>

      <View style={styles.options}>
        {userTypes.map((userType) => {
          const IconComponent = userType.icon;
          return (
            <TouchableOpacity
              key={userType.type}
              onPress={() => onSelectUserType(userType.type)}
              activeOpacity={0.8}
            >
              <Card style={styles.optionCard}>
                <View style={styles.optionHeader}>
                  <View style={[styles.iconContainer, { backgroundColor: `${userType.color}15` }]}>
                    <IconComponent size={32} color={userType.color} />
                  </View>
                  <View style={styles.optionInfo}>
                    <Text style={styles.optionTitle}>{userType.title}</Text>
                    <Text style={styles.optionSubtitle}>{userType.subtitle}</Text>
                  </View>
                </View>
                
                <Text style={styles.optionDescription}>{userType.description}</Text>
                
                <View style={styles.benefits}>
                  {userType.benefits.map((benefit, index) => (
                    <View key={index} style={styles.benefit}>
                      <View style={[styles.bullet, { backgroundColor: userType.color }]} />
                      <Text style={styles.benefitText}>{benefit}</Text>
                    </View>
                  ))}
                </View>
              </Card>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.background,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    marginBottom: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: ThemeColors.text,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  options: {
    gap: 16,
  },
  optionCard: {
    padding: 20,
    borderWidth: 2,
    borderColor: ThemeColors.borderLight,
  },
  optionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  optionInfo: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: ThemeColors.text,
    marginBottom: 4,
    fontWeight: '600',
  },
  optionSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
  },
  optionDescription: {
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
    lineHeight: 22,
    marginBottom: 16,
  },
  benefits: {
    gap: 8,
  },
  benefit: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 12,
  },
  benefitText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: ThemeColors.text,
    fontWeight: '500',
  },
});