import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Header } from '@/components/ui/Header';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Service, ServiceStatus } from '@/types';
import { ThemeColors } from '@/constants/Colors';
import { Briefcase, Clock, MapPin, DollarSign, Star, CircleCheck as CheckCircle, CircleAlert as AlertCircle, Calendar, TrendingUp } from 'lucide-react-native';

export default function ProfessionalJobsScreen() {
  const [activeTab, setActiveTab] = useState<'available' | 'active' | 'completed'>('available');

  const todayStats = {
    earnings: 8400,
    jobsCompleted: 3,
    rating: 4.9,
    responseTime: 12,
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Mis Trabajos"
        showNotifications
        onNotifications={() => console.log('Notifications')}
      />
      
      {/* Today's Stats */}
      <Card style={styles.statsCard}>
        <Text style={styles.statsTitle}>Resumen de Hoy</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <DollarSign size={20} color={ThemeColors.success} />
            <Text style={styles.statValue}>${todayStats.earnings}</Text>
            <Text style={styles.statLabel}>Ganado</Text>
          </View>
          <View style={styles.statItem}>
            <CheckCircle size={20} color={ThemeColors.primary} />
            <Text style={styles.statValue}>{todayStats.jobsCompleted}</Text>
            <Text style={styles.statLabel}>Completados</Text>
          </View>
          <View style={styles.statItem}>
            <Star size={20} color={ThemeColors.accent} />
            <Text style={styles.statValue}>{todayStats.rating}</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statItem}>
            <Clock size={20} color={ThemeColors.secondary} />
            <Text style={styles.statValue}>{todayStats.responseTime}min</Text>
            <Text style={styles.statLabel}>Respuesta</Text>
          </View>
        </View>
      </Card>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'available' && styles.activeTab]}
          onPress={() => setActiveTab('available')}
        >
          <Text style={[styles.tabText, activeTab === 'available' && styles.activeTabText]}>
            Disponibles (2)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'active' && styles.activeTab]}
          onPress={() => setActiveTab('active')}
        >
          <Text style={[styles.tabText, activeTab === 'active' && styles.activeTabText]}>
            Activos (1)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'completed' && styles.activeTab]}
          onPress={() => setActiveTab('completed')}
        >
          <Text style={[styles.tabText, activeTab === 'completed' && styles.activeTabText]}>
            Completados
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.jobsList}>
          <View style={styles.emptyState}>
            <Briefcase size={64} color={ThemeColors.textMuted} />
            <Text style={styles.emptyStateText}>
              {activeTab === 'available' && 'No hay trabajos disponibles'}
              {activeTab === 'active' && 'No tienes trabajos activos'}
              {activeTab === 'completed' && 'No tienes trabajos completados'}
            </Text>
            <Text style={styles.emptyStateSubtext}>
              {activeTab === 'available' && 'Los nuevos trabajos aparecerán aquí cuando estén disponibles'}
              {activeTab === 'active' && 'Acepta trabajos disponibles para que aparezcan aquí'}
              {activeTab === 'completed' && 'Tus trabajos finalizados aparecerán aquí'}
            </Text>
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
  statsCard: {
    margin: 20,
    marginBottom: 16,
  },
  statsTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: ThemeColors.text,
    marginBottom: 16,
    fontWeight: '600',
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
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: ThemeColors.text,
    marginTop: 8,
    marginBottom: 4,
    fontWeight: '700',
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: ThemeColors.surface,
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: ThemeColors.accent,
  },
  tabText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: ThemeColors.textMuted,
    fontWeight: '500',
  },
  activeTabText: {
    color: ThemeColors.white,
  },
  content: {
    flex: 1,
  },
  jobsList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  emptyState: {
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  emptyStateText: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: ThemeColors.text,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 8,
    fontWeight: '600',
  },
  emptyStateSubtext: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
});