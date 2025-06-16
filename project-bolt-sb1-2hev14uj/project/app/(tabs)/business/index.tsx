import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { Header } from '@/components/ui/Header';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ThemeColors } from '@/constants/Colors';
import { Building2, Calendar, TriangleAlert as AlertTriangle, TrendingUp, Users, DollarSign, Clock, CircleCheck as CheckCircle, Wrench } from 'lucide-react-native';

export default function BusinessDashboard() {
  const quickStats = [
    { label: 'Servicios Activos', value: '8', icon: Wrench, color: ThemeColors.secondary },
    { label: 'Costo Mensual', value: '$15,400', icon: DollarSign, color: ThemeColors.primary },
    { label: 'Ahorro Anual', value: '22%', icon: TrendingUp, color: ThemeColors.success },
    { label: 'Proveedores', value: '12', icon: Users, color: ThemeColors.accent },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Dashboard Empresarial"
        showNotifications
        onNotifications={() => console.log('Notifications')}
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>¡Bienvenido!</Text>
          <Text style={styles.welcomeSubtext}>
            Gestiona el mantenimiento de tu empresa de forma eficiente
          </Text>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          {quickStats.map((stat, index) => (
            <Card key={index} style={styles.statCard}>
              <View style={styles.statContent}>
                <View style={[styles.statIcon, { backgroundColor: `${stat.color}20` }]}>
                  <stat.icon size={24} color={stat.color} />
                </View>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            </Card>
          ))}
        </View>

        {/* Emergency Button */}
        <Card style={styles.emergencyCard}>
          <View style={styles.emergencyContent}>
            <View style={styles.emergencyIcon}>
              <AlertTriangle size={24} color={ThemeColors.error} />
            </View>
            <View style={styles.emergencyInfo}>
              <Text style={styles.emergencyTitle}>¿Emergencia?</Text>
              <Text style={styles.emergencySubtitle}>
                Atención prioritaria 24/7 para tu empresa
              </Text>
            </View>
            <Button
              title="Solicitar"
              onPress={() => console.log('Emergency')}
              variant="outline"
              size="small"
            />
          </View>
        </Card>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Acciones Rápidas</Text>
          <View style={styles.quickActions}>
            <Button
              title="Solicitar Servicio"
              onPress={() => console.log('Request service')}
              style={styles.actionButton}
            />
            <Button
              title="Programar Mantenimiento"
              onPress={() => console.log('Schedule maintenance')}
              variant="outline"
              style={styles.actionButton}
            />
          </View>
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
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 20,
  },
  statCard: {
    width: '48%',
    padding: 16,
  },
  statContent: {
    alignItems: 'center',
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  statValue: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: ThemeColors.text,
    marginBottom: 4,
    fontWeight: '700',
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
    textAlign: 'center',
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: ThemeColors.text,
    fontWeight: '600',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
  },
  actionButton: {
    flex: 1,
  },
});