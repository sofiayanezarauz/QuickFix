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

  const upcomingMaintenance = [
    {
      id: '1',
      title: 'Mantenimiento HVAC',
      location: 'Oficina Principal',
      date: '15 Ene 2024',
      time: '10:00',
      priority: 'high',
      professional: 'Carlos Mendoza',
    },
    {
      id: '2',
      title: 'Revisión Eléctrica',
      location: 'Sucursal Norte',
      date: '18 Ene 2024',
      time: '14:00',
      priority: 'medium',
      professional: 'María Rodriguez',
    },
    {
      id: '3',
      title: 'Limpieza de Oficinas',
      location: 'Todas las sucursales',
      date: '20 Ene 2024',
      time: '18:00',
      priority: 'low',
      professional: 'Equipo de Limpieza',
    },
  ];

  const recentAlerts = [
    {
      id: '1',
      type: 'emergency',
      title: 'Fuga de agua - Oficina Principal',
      time: '2 horas',
      resolved: false,
    },
    {
      id: '2',
      type: 'maintenance',
      title: 'Mantenimiento programado completado',
      time: '1 día',
      resolved: true,
    },
    {
      id: '3',
      type: 'info',
      title: 'Nuevo proveedor verificado',
      time: '3 días',
      resolved: true,
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return ThemeColors.error;
      case 'medium': return ThemeColors.warning;
      case 'low': return ThemeColors.success;
      default: return ThemeColors.textMuted;
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'emergency': return AlertTriangle;
      case 'maintenance': return CheckCircle;
      default: return Building2;
    }
  };

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

        {/* Upcoming Maintenance */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Próximos Mantenimientos</Text>
            <Button
              title="Ver Todos"
              onPress={() => console.log('View all maintenance')}
              variant="ghost"
              size="small"
            />
          </View>
          
          <View style={styles.maintenanceList}>
            {upcomingMaintenance.map((maintenance) => (
              <Card key={maintenance.id} style={styles.maintenanceCard}>
                <View style={styles.maintenanceHeader}>
                  <View style={styles.maintenanceInfo}>
                    <Text style={styles.maintenanceTitle}>{maintenance.title}</Text>
                    <Text style={styles.maintenanceLocation}>{maintenance.location}</Text>
                  </View>
                  <View style={[
                    styles.priorityDot,
                    { backgroundColor: getPriorityColor(maintenance.priority) }
                  ]} />
                </View>
                
                <View style={styles.maintenanceDetails}>
                  <View style={styles.maintenanceDate}>
                    <Calendar size={16} color={ThemeColors.textMuted} />
                    <Text style={styles.maintenanceText}>
                      {maintenance.date} - {maintenance.time}
                    </Text>
                  </View>
                  <View style={styles.maintenanceProfessional}>
                    <Users size={16} color={ThemeColors.textMuted} />
                    <Text style={styles.maintenanceText}>{maintenance.professional}</Text>
                  </View>
                </View>
              </Card>
            ))}
          </View>
        </View>

        {/* Recent Alerts */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Alertas Recientes</Text>
            <Button
              title="Ver Todo"
              onPress={() => console.log('View all alerts')}
              variant="ghost"
              size="small"
            />
          </View>
          
          <View style={styles.alertsList}>
            {recentAlerts.map((alert) => {
              const AlertIcon = getAlertIcon(alert.type);
              return (
                <Card key={alert.id} style={styles.alertCard}>
                  <View style={styles.alertContent}>
                    <View style={styles.alertIcon}>
                      <AlertIcon 
                        size={20} 
                        color={alert.resolved ? ThemeColors.success : ThemeColors.error} 
                      />
                    </View>
                    <View style={styles.alertInfo}>
                      <Text style={styles.alertTitle}>{alert.title}</Text>
                      <Text style={styles.alertTime}>Hace {alert.time}</Text>
                    </View>
                    {alert.resolved && (
                      <View style={styles.resolvedBadge}>
                        <Text style={styles.resolvedText}>Resuelto</Text>
                      </View>
                    )}
                  </View>
                </Card>
              );
            })}
          </View>
        </View>

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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: ThemeColors.text,
    fontWeight: '600',
  },
  maintenanceList: {
    paddingHorizontal: 20,
    gap: 12,
  },
  maintenanceCard: {
    padding: 16,
  },
  maintenanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  maintenanceInfo: {
    flex: 1,
  },
  maintenanceTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: ThemeColors.text,
    marginBottom: 4,
    fontWeight: '600',
  },
  maintenanceLocation: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
  },
  priorityDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: 12,
  },
  maintenanceDetails: {
    gap: 8,
  },
  maintenanceDate: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  maintenanceProfessional: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  maintenanceText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
  },
  alertsList: {
    paddingHorizontal: 20,
    gap: 8,
  },
  alertCard: {
    padding: 12,
  },
  alertContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alertIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: ThemeColors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  alertInfo: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: ThemeColors.text,
    marginBottom: 2,
    fontWeight: '500',
  },
  alertTime: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textMuted,
  },
  resolvedBadge: {
    backgroundColor: ThemeColors.success + '20',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  resolvedText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: ThemeColors.success,
    fontWeight: '500',
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