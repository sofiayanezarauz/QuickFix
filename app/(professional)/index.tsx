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

  // Mock jobs data
  const availableJobs: Service[] = [
    {
      id: '1',
      title: 'Reparación de Grifo',
      description: 'Grifo de cocina goteando, necesita cambio de empaque. Cliente disponible mañana por la tarde.',
      category: 'plumbing',
      professionalId: '',
      clientId: 'client1',
      status: 'requested',
      price: 3500,
      estimatedDuration: 120,
      scheduledDate: new Date('2024-01-16T14:00:00'),
      location: {
        latitude: -34.6037,
        longitude: -58.3816,
        address: 'Av. Corrientes 1234',
        city: 'CABA',
        neighborhood: 'San Nicolás',
      },
    },
    {
      id: '2',
      title: 'Instalación Eléctrica',
      description: 'Instalación de 3 tomas corrientes en habitación nueva. Materiales incluidos.',
      category: 'electrical',
      professionalId: '',
      clientId: 'client2',
      status: 'requested',
      price: 4200,
      estimatedDuration: 180,
      scheduledDate: new Date('2024-01-17T10:00:00'),
      location: {
        latitude: -34.6037,
        longitude: -58.3816,
        address: 'Av. Santa Fe 2456',
        city: 'CABA',
        neighborhood: 'Palermo',
      },
    },
  ];

  const activeJobs: Service[] = [
    {
      id: '3',
      title: 'Reparación de Mueble',
      description: 'Mesa de comedor con pata suelta, necesita refuerzo.',
      category: 'carpentry',
      professionalId: 'prof1',
      clientId: 'client3',
      status: 'accepted',
      price: 2800,
      estimatedDuration: 90,
      scheduledDate: new Date('2024-01-15T16:00:00'),
      location: {
        latitude: -34.6037,
        longitude: -58.3816,
        address: 'Av. Rivadavia 5678',
        city: 'CABA',
        neighborhood: 'Caballito',
      },
    },
  ];

  const completedJobs: Service[] = [
    {
      id: '4',
      title: 'Limpieza Profunda',
      description: 'Limpieza completa de oficina después de mudanza.',
      category: 'cleaning',
      professionalId: 'prof1',
      clientId: 'client4',
      status: 'completed',
      price: 5600,
      estimatedDuration: 240,
      scheduledDate: new Date('2024-01-10T09:00:00'),
      completedDate: new Date('2024-01-10T13:00:00'),
      location: {
        latitude: -34.6037,
        longitude: -58.3816,
        address: 'Av. Libertador 9876',
        city: 'CABA',
        neighborhood: 'Núñez',
      },
      rating: 5,
      review: 'Excelente trabajo, muy detallista y profesional.',
    },
  ];

  const todayStats = {
    earnings: 8400,
    jobsCompleted: 3,
    rating: 4.9,
    responseTime: 12,
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-AR', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-AR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getDistance = (location: any) => {
    // Mock distance calculation
    return `${Math.floor(Math.random() * 15) + 1} km`;
  };

  const handleAcceptJob = (jobId: string) => {
    console.log('Accepting job:', jobId);
  };

  const handleRejectJob = (jobId: string) => {
    console.log('Rejecting job:', jobId);
  };

  const handleCompleteJob = (jobId: string) => {
    console.log('Completing job:', jobId);
  };

  const renderJobCard = (job: Service, showActions: boolean = false) => (
    <Card key={job.id} style={styles.jobCard}>
      <View style={styles.jobHeader}>
        <View style={styles.jobInfo}>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <Text style={styles.jobCategory}>{job.category}</Text>
        </View>
        <View style={styles.jobPrice}>
          <Text style={styles.priceAmount}>${job.price}</Text>
          <Text style={styles.priceUnit}>total</Text>
        </View>
      </View>

      <Text style={styles.jobDescription}>{job.description}</Text>

      <View style={styles.jobDetails}>
        <View style={styles.detailItem}>
          <Calendar size={16} color={ThemeColors.textMuted} />
          <Text style={styles.detailText}>
            {formatDate(job.scheduledDate)} - {formatTime(job.scheduledDate)}
          </Text>
        </View>
        <View style={styles.detailItem}>
          <Clock size={16} color={ThemeColors.textMuted} />
          <Text style={styles.detailText}>{job.estimatedDuration} min</Text>
        </View>
        <View style={styles.detailItem}>
          <MapPin size={16} color={ThemeColors.textMuted} />
          <Text style={styles.detailText}>
            {job.location.neighborhood} - {getDistance(job.location)}
          </Text>
        </View>
      </View>

      {job.status === 'completed' && job.rating && (
        <View style={styles.reviewSection}>
          <View style={styles.ratingContainer}>
            <Star size={16} color={ThemeColors.accent} fill={ThemeColors.accent} />
            <Text style={styles.ratingText}>{job.rating}/5</Text>
          </View>
          {job.review && (
            <Text style={styles.reviewText}>{job.review}</Text>
          )}
        </View>
      )}

      {showActions && (
        <View style={styles.jobActions}>
          {job.status === 'requested' && (
            <>
              <Button
                title="Rechazar"
                onPress={() => handleRejectJob(job.id)}
                variant="outline"
                size="small"
                style={styles.actionButton}
              />
              <Button
                title="Aceptar"
                onPress={() => handleAcceptJob(job.id)}
                size="small"
                style={styles.actionButton}
              />
            </>
          )}
          {job.status === 'accepted' && (
            <Button
              title="Marcar Completado"
              onPress={() => handleCompleteJob(job.id)}
              size="small"
              fullWidth
            />
          )}
        </View>
      )}
    </Card>
  );

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
            Disponibles ({availableJobs.length})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'active' && styles.activeTab]}
          onPress={() => setActiveTab('active')}
        >
          <Text style={[styles.tabText, activeTab === 'active' && styles.activeTabText]}>
            Activos ({activeJobs.length})
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
          {activeTab === 'available' && (
            <>
              {availableJobs.length > 0 ? (
                availableJobs.map(job => renderJobCard(job, true))
              ) : (
                <View style={styles.emptyState}>
                  <Briefcase size={64} color={ThemeColors.textMuted} />
                  <Text style={styles.emptyStateText}>No hay trabajos disponibles</Text>
                  <Text style={styles.emptyStateSubtext}>
                    Los nuevos trabajos aparecerán aquí cuando estén disponibles
                  </Text>
                </View>
              )}
            </>
          )}
          
          {activeTab === 'active' && (
            <>
              {activeJobs.length > 0 ? (
                activeJobs.map(job => renderJobCard(job, true))
              ) : (
                <View style={styles.emptyState}>
                  <AlertCircle size={64} color={ThemeColors.textMuted} />
                  <Text style={styles.emptyStateText}>No tienes trabajos activos</Text>
                  <Text style={styles.emptyStateSubtext}>
                    Acepta trabajos disponibles para que aparezcan aquí
                  </Text>
                </View>
              )}
            </>
          )}
          
          {activeTab === 'completed' && (
            <>
              {completedJobs.length > 0 ? (
                completedJobs.map(job => renderJobCard(job))
              ) : (
                <View style={styles.emptyState}>
                  <CheckCircle size={64} color={ThemeColors.textMuted} />
                  <Text style={styles.emptyStateText}>No tienes trabajos completados</Text>
                  <Text style={styles.emptyStateSubtext}>
                    Tus trabajos finalizados aparecerán aquí
                  </Text>
                </View>
              )}
            </>
          )}
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
  jobCard: {
    marginBottom: 16,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: ThemeColors.text,
    marginBottom: 4,
    fontWeight: '600',
  },
  jobCategory: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
    textTransform: 'capitalize',
  },
  jobPrice: {
    alignItems: 'flex-end',
  },
  priceAmount: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: ThemeColors.accent,
    fontWeight: '700',
  },
  priceUnit: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textMuted,
  },
  jobDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
    marginBottom: 16,
    lineHeight: 20,
  },
  jobDetails: {
    gap: 8,
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
  },
  reviewSection: {
    marginBottom: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: ThemeColors.borderLight,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: ThemeColors.text,
    fontWeight: '500',
  },
  reviewText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
    fontStyle: 'italic',
    lineHeight: 20,
  },
  jobActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flex: 1,
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