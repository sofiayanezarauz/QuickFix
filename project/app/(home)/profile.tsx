import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Header } from '@/components/ui/Header';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { User, SubscriptionPlan } from '@/types';
import { ThemeColors } from '@/constants/Colors';
import { User as UserIcon, Settings, CreditCard, Shield, CircleHelp as HelpCircle, LogOut, Star, MapPin, Bell, Crown, Heart, Gift } from 'lucide-react-native';

export default function ProfileScreen() {
  const [user] = useState<User>({
    id: 'user1',
    email: 'juan.perez@email.com',
    name: 'Juan Pérez',
    userType: 'home',
    phone: '+54 9 11 1234-5678',
    subscription: 'basic',
    createdAt: new Date('2023-06-15'),
    isVerified: true,
    location: {
      latitude: -34.6037,
      longitude: -58.3816,
      address: 'Av. Corrientes 1234',
      city: 'CABA',
      neighborhood: 'San Nicolás',
    },
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
  });

  const subscriptionInfo = {
    free: {
      name: 'Plan Gratuito',
      price: 'Gratis',
      color: ThemeColors.textMuted,
      icon: Gift,
    },
    basic: {
      name: 'Plan Básico',
      price: 'USD $4/mes',
      color: ThemeColors.secondary,
      icon: Star,
    },
    advanced: {
      name: 'Plan Avanzado',
      price: 'USD $8/mes',
      color: ThemeColors.accent,
      icon: Crown,
    },
  };

  const currentPlan = subscriptionInfo[user.subscription];

  const menuItems = [
    {
      id: 'personal',
      title: 'Información Personal',
      description: 'Editar perfil y datos de contacto',
      icon: UserIcon,
      onPress: () => console.log('Personal info'),
    },
    {
      id: 'subscription',
      title: 'Mi Suscripción',
      description: currentPlan.name,
      icon: currentPlan.icon,
      onPress: () => console.log('Subscription'),
      badge: user.subscription !== 'free' ? currentPlan.name : undefined,
    },
    {
      id: 'payment',
      title: 'Métodos de Pago',
      description: 'Tarjetas y formas de pago',
      icon: CreditCard,
      onPress: () => console.log('Payment methods'),
    },
    {
      id: 'notifications',
      title: 'Notificaciones',
      description: 'Configurar alertas y avisos',
      icon: Bell,
      onPress: () => console.log('Notifications'),
    },
    {
      id: 'security',
      title: 'Seguridad',
      description: 'Privacidad y verificación',
      icon: Shield,
      onPress: () => console.log('Security'),
    },
    {
      id: 'help',
      title: 'Ayuda y Soporte',
      description: 'Preguntas frecuentes y contacto',
      icon: HelpCircle,
      onPress: () => console.log('Help'),
    },
  ];

  const stats = [
    { label: 'Servicios Completados', value: '12' },
    { label: 'Calificación Promedio', value: '4.8' },
    { label: 'Ahorro Total', value: '$2,400' },
  ];

  const handleLogout = () => {
    console.log('Logging out...');
    // Implement logout logic
  };

  const handleUpgradePress = () => {
    console.log('Upgrade subscription');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Mi Perfil" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <Card style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <Image
              source={{ uri: user.avatar }}
              style={styles.avatar}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userEmail}>{user.email}</Text>
              <View style={styles.locationContainer}>
                <MapPin size={14} color={ThemeColors.textMuted} />
                <Text style={styles.locationText}>{user.location?.neighborhood}, {user.location?.city}</Text>
              </View>
              {user.isVerified && (
                <View style={styles.verifiedBadge}>
                  <Shield size={14} color={ThemeColors.success} />
                  <Text style={styles.verifiedText}>Cuenta Verificada</Text>
                </View>
              )}
            </View>
          </View>
        </Card>

        {/* Current Subscription */}
        <Card style={styles.subscriptionCard}>
          <View style={styles.subscriptionHeader}>
            <View style={styles.subscriptionInfo}>
              <View style={styles.subscriptionIcon}>
                <currentPlan.icon size={20} color={currentPlan.color} />
              </View>
              <View>
                <Text style={styles.subscriptionTitle}>{currentPlan.name}</Text>
                <Text style={styles.subscriptionPrice}>{currentPlan.price}</Text>
              </View>
            </View>
            {user.subscription !== 'advanced' && (
              <Button
                title="Mejorar"
                onPress={handleUpgradePress}
                size="small"
                variant="outline"
              />
            )}
          </View>
          
          <View style={styles.benefits}>
            <Text style={styles.benefitsTitle}>Beneficios activos:</Text>
            {user.subscription === 'basic' && (
              <View style={styles.benefitsList}>
                <Text style={styles.benefitItem}>• 5% descuento en servicios</Text>
                <Text style={styles.benefitItem}>• 1 diagnóstico remoto anual</Text>
                <Text style={styles.benefitItem}>• Garantía extendida 15 días</Text>
              </View>
            )}
            {user.subscription === 'advanced' && (
              <View style={styles.benefitsList}>
                <Text style={styles.benefitItem}>• 10% descuento en servicios</Text>
                <Text style={styles.benefitItem}>• 2 diagnósticos remotos anuales</Text>
                <Text style={styles.benefitItem}>• 2 emergencias gratuitas</Text>
                <Text style={styles.benefitItem}>• Garantía extendida 1 mes</Text>
              </View>
            )}
            {user.subscription === 'free' && (
              <Text style={styles.benefitItem}>Acceso básico a la plataforma</Text>
            )}
          </View>
        </Card>

        {/* Stats */}
        <Card style={styles.statsCard}>
          <View style={styles.statsContainer}>
            {stats.map((stat, index) => (
              <View key={index} style={styles.statItem}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </Card>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={item.onPress}
              activeOpacity={0.8}
            >
              <Card style={styles.menuCard}>
                <View style={styles.menuItem}>
                  <View style={styles.menuIcon}>
                    <item.icon size={24} color={ThemeColors.primary} />
                  </View>
                  <View style={styles.menuContent}>
                    <Text style={styles.menuTitle}>{item.title}</Text>
                    <Text style={styles.menuDescription}>{item.description}</Text>
                  </View>
                  {item.badge && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>{item.badge}</Text>
                    </View>
                  )}
                </View>
              </Card>
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          onPress={handleLogout}
          activeOpacity={0.8}
          style={styles.logoutContainer}
        >
          <Card style={styles.logoutCard}>
            <View style={styles.logoutItem}>
              <LogOut size={24} color={ThemeColors.error} />
              <Text style={styles.logoutText}>Cerrar Sesión</Text>
            </View>
          </Card>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Miembro desde {user.createdAt.toLocaleDateString('es-AR', { month: 'long', year: 'numeric' })}
          </Text>
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
  profileCard: {
    margin: 20,
    marginBottom: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 22,
    fontFamily: 'Inter-Bold',
    color: ThemeColors.text,
    marginBottom: 4,
    fontWeight: '700',
  },
  userEmail: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 8,
  },
  locationText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textMuted,
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: ThemeColors.success + '20',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  verifiedText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: ThemeColors.success,
    fontWeight: '500',
  },
  subscriptionCard: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  subscriptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  subscriptionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subscriptionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: ThemeColors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  subscriptionTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: ThemeColors.text,
    marginBottom: 2,
    fontWeight: '600',
  },
  subscriptionPrice: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
  },
  benefits: {
    borderTopWidth: 1,
    borderTopColor: ThemeColors.borderLight,
    paddingTop: 16,
  },
  benefitsTitle: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: ThemeColors.text,
    marginBottom: 8,
    fontWeight: '500',
  },
  benefitsList: {
    gap: 4,
  },
  benefitItem: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
    lineHeight: 20,
  },
  statsCard: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: ThemeColors.primary,
    marginBottom: 4,
    fontWeight: '700',
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
    textAlign: 'center',
  },
  menuContainer: {
    paddingHorizontal: 20,
    gap: 8,
  },
  menuCard: {
    padding: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: ThemeColors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: ThemeColors.text,
    marginBottom: 2,
    fontWeight: '500',
  },
  menuDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
  },
  badge: {
    backgroundColor: ThemeColors.secondary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: ThemeColors.white,
    fontWeight: '500',
  },
  logoutContainer: {
    paddingHorizontal: 20,
    marginTop: 16,
  },
  logoutCard: {
    padding: 16,
    borderColor: ThemeColors.error + '20',
  },
  logoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  logoutText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: ThemeColors.error,
    fontWeight: '500',
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textMuted,
  },
});