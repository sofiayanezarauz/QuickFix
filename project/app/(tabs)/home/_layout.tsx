import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="search" />
      <Stack.Screen name="bookings" />
      <Stack.Screen name="messages" />
      <Stack.Screen name="profile" />
    </Stack>
  );
}