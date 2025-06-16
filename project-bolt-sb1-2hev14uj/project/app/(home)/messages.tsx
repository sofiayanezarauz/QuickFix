import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Header } from '@/components/ui/Header';
import { Card } from '@/components/ui/Card';
import { Chat } from '@/types';
import { ThemeColors } from '@/constants/Colors';
import { MessageCircle, Clock } from 'lucide-react-native';

export default function MessagesScreen() {
  // Mock chat data
  const mockChats: Chat[] = [
    {
      id: '1',
      serviceId: 'service1',
      participants: ['user1', 'professional1'],
      messages: [],
      lastMessage: {
        id: 'msg1',
        senderId: 'professional1',
        content: 'Perfecto, llego a las 14:00 como acordamos. ¿Tienes todas las herramientas listas?',
        timestamp: new Date('2024-01-14T13:30:00'),
        type: 'text',
        read: false,
      },
      createdAt: new Date('2024-01-14T10:00:00'),
    },
    {
      id: '2',
      serviceId: 'service2',
      participants: ['user1', 'professional2'],
      messages: [],
      lastMessage: {
        id: 'msg2',
        senderId: 'professional2',
        content: 'Hola! Ya terminé con la instalación. Todo funcionando correctamente. Te mando las fotos.',
        timestamp: new Date('2024-01-14T12:15:00'),
        type: 'text',
        read: true,
      },
      createdAt: new Date('2024-01-14T09:00:00'),
    },
    {
      id: '3',
      serviceId: 'service3',
      participants: ['user1', 'professional3'],
      messages: [],
      lastMessage: {
        id: 'msg3',
        senderId: 'user1',
        content: 'Muchas gracias por el excelente trabajo. Te dejo 5 estrellas!',
        timestamp: new Date('2024-01-13T18:00:00'),
        type: 'text',
        read: true,
      },
      createdAt: new Date('2024-01-13T16:00:00'),
    },
  ];

  // Mock professional data
  const professionals = {
    professional1: {
      id: 'professional1',
      name: 'Carlos Mendoza',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      service: 'Reparación de Grifo',
      online: true,
    },
    professional2: {
      id: 'professional2',
      name: 'María Rodriguez',
      avatar: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=400',
      service: 'Instalación Eléctrica',
      online: false,
    },
    professional3: {
      id: 'professional3',
      name: 'Roberto Silva',
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      service: 'Reparación de Mueble',
      online: false,
    },
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}min`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h`;
    } else {
      return date.toLocaleDateString('es-AR', { month: 'short', day: 'numeric' });
    }
  };

  const handleChatPress = (chat: Chat) => {
    console.log('Opening chat:', chat.id);
    // Navigate to chat detail screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Mensajes" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {mockChats.length > 0 ? (
          <View style={styles.chatsList}>
            {mockChats.map((chat) => {
              const professional = professionals[chat.participants.find(p => p !== 'user1') as keyof typeof professionals];
              const isUnread = chat.lastMessage && !chat.lastMessage.read && chat.lastMessage.senderId !== 'user1';
              
              return (
                <TouchableOpacity
                  key={chat.id}
                  onPress={() => handleChatPress(chat)}
                  activeOpacity={0.8}
                >
                  <Card style={[styles.chatCard, isUnread && styles.unreadCard]}>
                    <View style={styles.chatHeader}>
                      <View style={styles.avatarContainer}>
                        <Image
                          source={{ uri: professional.avatar }}
                          style={styles.avatar}
                        />
                        {professional.online && <View style={styles.onlineIndicator} />}
                      </View>
                      
                      <View style={styles.chatInfo}>
                        <View style={styles.chatTitleRow}>
                          <Text style={[styles.professionalName, isUnread && styles.unreadText]}>
                            {professional.name}
                          </Text>
                          <Text style={styles.timestamp}>
                            {chat.lastMessage && formatTime(chat.lastMessage.timestamp)}
                          </Text>
                        </View>
                        
                        <Text style={styles.serviceName}>{professional.service}</Text>
                        
                        {chat.lastMessage && (
                          <Text 
                            style={[styles.lastMessage, isUnread && styles.unreadMessage]}
                            numberOfLines={2}
                          >
                            {chat.lastMessage.senderId === 'user1' ? 'Tú: ' : ''}
                            {chat.lastMessage.content}
                          </Text>
                        )}
                      </View>
                      
                      {isUnread && <View style={styles.unreadDot} />}
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <MessageCircle size={64} color={ThemeColors.textMuted} />
            <Text style={styles.emptyStateText}>No tienes mensajes</Text>
            <Text style={styles.emptyStateSubtext}>
              Cuando contrates un servicio, podrás chatear con el profesional aquí
            </Text>
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
  content: {
    flex: 1,
  },
  chatsList: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  chatCard: {
    marginBottom: 12,
    padding: 16,
  },
  unreadCard: {
    backgroundColor: ThemeColors.primaryLight,
    borderColor: ThemeColors.primary + '30',
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: ThemeColors.success,
    borderWidth: 2,
    borderColor: ThemeColors.white,
  },
  chatInfo: {
    flex: 1,
  },
  chatTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  professionalName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: ThemeColors.text,
    fontWeight: '600',
  },
  unreadText: {
    color: ThemeColors.primary,
  },
  timestamp: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textMuted,
  },
  serviceName: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
    marginBottom: 8,
  },
  lastMessage: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: ThemeColors.textSecondary,
    lineHeight: 20,
  },
  unreadMessage: {
    color: ThemeColors.text,
    fontFamily: 'Inter-Medium',
    fontWeight: '500',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: ThemeColors.primary,
    marginLeft: 8,
    marginTop: 4,
  },
  emptyState: {
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: 40,
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