import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Header } from '@/components/ui/Header';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Service, ServiceStatus } from '@/types';
import { ThemeColors } from '@/constants/Colors';
import { Calendar, Clock, MapPin, User, Phone, Star } from 'lucide-react-native';

export default function BookingsScreen() {
  const [activeTab, setActiveTab] = useState<'current' | 'past'>('current');

  // Mock bookings data
  const mockBookings: Service[] = [
    {
      id: '1',
      title: 'Reparación de Grifo',
      description: 'Grifo de cocina goteando, necesita cambio de empaque',
      category: 'plumbing',
      professionalId: '1',
      clientId: 'user1',
      status: 'accepted',
      price: 3500,
      estimatedDuration: 120,
      scheduledDate: new Date('2024-01-15T14:00:00'),
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
      description: 'Instalación de tomas corrientes en habitación',
      category: 'electrical',
      professionalId: '2',
      clientId: 'user1',
      status: 'in_progress',
      price: 4200,
      estimatedDuration: 180,
      scheduledDate: new Date('2024-01-12T10:00:00'),
      location: {
        latitude: -34.6037,
        longitude: -58.3816,
        address: 'Av. Santa Fe 2456',
        city: 'CABA',
        neighborhood: 'Palermo',
      },
    },
    {
      id: '3',
      title: 'Reparación de Mueble',
      description: 'Reparación de mesa de comedor',
      category: 'carpentry',
      professionalId: '3',
      clientId: 'user1',
      status: 'completed',
      price: 2800,
      estimatedDuration: 90,
      scheduledDate: new Date('2024-01-08T16:00:00'),
      completedDate: new Date('2024-01-08T17:30:00'),
      location: {
        latitude: -34.6037,
        longitude: -58.3816,
        address: 'Av. Rivadavia 5678',
        city: 'CABA',
        neighborhood: 'Caballito',
      },
      rating: 5,
      review: 'Excelente trabajo, muy profesional y puntual.',
    },
  ];

  const currentBookings = mockBookings.filter(booking => 
    booking.status === 'accepted' || booking.status === 'in_progress' || booking.status === 'requested'
  );

  const pastBookings = mockBookings.filter(booking => 
    booking.status === 'completed' || booking.status === 'cancelled'
  );

  const getStatusColor = (status: ServiceStatus) => {
    switch (status) {
      case 'requested':
        return ThemeColors.warning;
      case 'accepted':
        return ThemeColors.secondary;
      case 'in_progress':
        return ThemeColors.accent;
      case 'completed':
        return ThemeColors.success;
      case 'cancelled':
        return ThemeColors.error;
      default:
        return ThemeColors.textMuted;
    }
  };

  const getStatusText = (status: ServiceStatus) => {
    switch (status) {
      case 'requested':
        return 'Solicitado';
      case 'accepted':
        return 'Confirmado';
      case 'in_progress':
        return 'En Progreso';
      case 'completed':
        return 'Completado';
      case 'cancelled':
        return 'Cancelado';
      default:
        return status;
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-AR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-AR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const renderBookingCard = (booking: Service) => (
    <Card key={booking.id} style={styles.bookingCard}>
      <View style={styles.bookingHeader}>
        <View style={styles.bookingInfo}>
          <Text style={styles.bookingTitle}>{booking.title}</Text>
          <View style={[styles.statusBadge, { backgroundColor: `${getStatusColor(booking.status)}20` }]}>
            <Text style={[styles.statusText, { color: getStatusColor(booking.status) }]}>
              {getStatusText(booking.status)}
            </Text>
          </View>
        </View>
        <Text style={styles.bookingPrice}>${booking.price}</Text>
      </View>

      <Text style={styles.bookingDescription}>{booking.description}</Text>

      <View style={styles.bookingDetails}>
        <View style={styles.detailItem}>
          <Calendar size={16} color={ThemeColors.textMuted} />
          <Text style={styles.detailText}>{formatDate(booking.scheduledDate)}</Text>
        </View>
        <View style={styles.detailItem}>
          <Clock size={16} color={ThemeColors.textMuted} />
          <Text style={styles.detailText}>{formatTime(booking.scheduledDate)}</Text>
        </View>
        <View style={styles.detailItem}>
          <MapPin size={16} color={ThemeColors.textMuted} />
          <Text style={styles.detailText}>{booking.location.neighborhood}</Text>
        </View>
      </View>

      {booking.status === 'completed' && booking.rating && (
        <View style={styles.reviewSection}>
          <View style={styles.ratingContainer}>
            <Star size={16} color={ThemeColors.accent} fill={ThemeColors.accent} />
            <Text style={styles.ratingText}>{booking.rating}/5</Text>
          </View>
          {booking.review && (
            <Text style={styles.reviewText}>{booking.review}</Text>
          )}
        </View>
      )}

      <View style={styles.bookingActions}>
        {booking.status === 'accepted' && (
          <>
            <Button
              title="Contactar"
              onPress={() => console.log('Contact professional')}
              variant="outline"
              size="small"
              style={styles.actionButton}
            />
            <Button
              title="Cancelar"
              onPress={() => console.log('Cancel booking')}
              variant="ghost"
              size="small"
              style={styles.actionButton}
            />
          </>
        )}
        {booking.status === 'in_progress' && (
          <Button
            title="Ver Progreso"
            onPress={() => console.log('View progress')}
            size="small"
            fullWidth
          />
        )}
        {booking.status === 'completed' && !booking.rating && (
          <Button
            title="Calificar Servicio"
            onPress={() => console.log('Rate service')}
            size="small"
            fullWidth
          />
        )}
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Mis Reservas" />
      
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'current' && styles.activeTab]}
          onPress={() => setActiveTab('current')}
        >
          <Text style={[styles.tabText, activeTab === 'current' && styles.activeTabText]}>
            Actuales
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'past' && styles.activeTab]}
          onPress={() => setActiveTab('past')}
        >
          <Text style={[styles.tabText, activeTab === 'past' && styles.activeTabText]}>
            Historial
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {activeTab === 'current' ? (
          <View style={styles.bookingsList}>
            {currentBookings.length > 0 ? (
              currentBookings.map(renderBookingCard)
            ) : (
              <View style={styles.emptyState}>
                <Text style={styles.emptyStateText}>No tienes reservas activas</Text>
                <Text style={styles.emptyStateSubtext}>
                  Busca profesionales y agenda tus servicios
                </Text>
                <Button
                  title="Buscar Servicios"
                  onPress={() => console.log('Navigate to search')}
                  style={styles.emptyStateButton}
                />
              </View>
            )}
          </View>
        ) : (
          <View style={styles.bookingsList}>
            {pastBookings.length > 0 ? (
              pastBookings.map(renderBookingCard)
            ) : (
              <View style={styles.emptyState}>
                <Text style={styles.emptyStateText}>No tienes servicios completados</Text>
                <Text style={styles.emptyStateSubtext}>
                  Aquí aparecerán tus servicios finalizados
                </Text>
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.background,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: ThemeColors.surface,
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 12,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: ThemeColors.primary,
  },
  tabText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: ThemeColors.textMuted,
    fontWeight: '500',
  },
  activeTabText: {
    color: ThemeColors.white,
  },
  content: {
    flex: 1,
    marginTop: 20,
  },
  bookingsList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  bookingCard: {
    marginBottom: 16,
  },
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  bookingInfo: {
    flex: 1,
  },
  bookingTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: ThemeColors.text,
    marginBottom: 8,
    fontWeight: '600',
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    fontWeight: '500',
  },
  bookingPrice: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: ThemeColors.primary,
    fontWeight: '700',
  },
  bookingDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
    marginBottom: 16,
    lineHeight: 20,
  },
  bookingDetails: {
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
  bookingActions: {
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
    marginBottom: 8,
    fontWeight: '600',
  },
  emptyStateSubtext: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  emptyStateButton: {
    minWidth: 200,
  },
});