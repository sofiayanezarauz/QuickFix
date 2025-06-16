import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Star, MapPin, Clock } from 'lucide-react-native';
import { Professional } from '@/types';
import { ThemeColors } from '@/constants/Colors';
import { Card } from '@/components/ui/Card';

interface ServiceCardProps {
  professional: Professional;
  onPress: () => void;
}

export function ServiceCard({ professional, onPress }: ServiceCardProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Card style={styles.card}>
        <View style={styles.header}>
          <Image
            source={{ uri: professional.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400' }}
            style={styles.avatar}
          />
          <View style={styles.info}>
            <Text style={styles.name}>{professional.name}</Text>
            <Text style={styles.skills}>{professional.skills.slice(0, 2).join(', ')}</Text>
            <View style={styles.stats}>
              <View style={styles.stat}>
                <Star size={16} color={ThemeColors.accent} fill={ThemeColors.accent} />
                <Text style={styles.rating}>{professional.rating.toFixed(1)}</Text>
                <Text style={styles.reviews}>({professional.reviewCount})</Text>
              </View>
              <View style={styles.stat}>
                <MapPin size={16} color={ThemeColors.textMuted} />
                <Text style={styles.distance}>{professional.location?.neighborhood}</Text>
              </View>
            </View>
          </View>
          <View style={styles.price}>
            <Text style={styles.priceAmount}>${professional.hourlyRate}</Text>
            <Text style={styles.priceUnit}>/hora</Text>
          </View>
        </View>
        
        <View style={styles.footer}>
          <View style={styles.badges}>
            {professional.backgroundCheck && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Verificado</Text>
              </View>
            )}
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{professional.completedJobs} trabajos</Text>
            </View>
          </View>
          
          <View style={styles.responseTime}>
            <Clock size={14} color={ThemeColors.success} />
            <Text style={styles.responseTimeText}>
              Responde en {professional.responseTime}min
            </Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: ThemeColors.text,
    marginBottom: 4,
    fontWeight: '600',
  },
  skills: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
    marginBottom: 8,
  },
  stats: {
    flexDirection: 'row',
    gap: 16,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: ThemeColors.text,
    fontWeight: '500',
  },
  reviews: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textMuted,
  },
  distance: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textMuted,
  },
  price: {
    alignItems: 'flex-end',
  },
  priceAmount: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: ThemeColors.primary,
    fontWeight: '700',
  },
  priceUnit: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textMuted,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badges: {
    flexDirection: 'row',
    gap: 8,
  },
  badge: {
    backgroundColor: ThemeColors.primaryLight,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: ThemeColors.primary,
    fontWeight: '500',
  },
  responseTime: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  responseTimeText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.success,
  },
});