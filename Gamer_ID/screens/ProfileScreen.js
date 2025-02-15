import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Canvas } from '@react-three/fiber/native';
import { Sphere } from '@react-three/drei';

const ProfileScreen = () => {
  const [coins, setCoins] = useState(1000);

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image source={{ uri: 'https://your-avatar-url.com' }} style={styles.avatar} />
      <Text style={styles.name}>Gamer Name</Text>

      {/* Profile Details */}
      <Text style={styles.info}>Games Played: 50</Text>
      <Text style={styles.info}>Posts: 20</Text>
      <Text style={styles.info}>Popularity Score: 200</Text>
      <Text style={styles.coinText}>Coins: {coins}</Text>

      {/* Boost Popularity Button */}
      <TouchableOpacity style={styles.button} onPress={() => setCoins(coins + 100)}>
        <Text style={styles.buttonText}>Boost Popularity</Text>
      </TouchableOpacity>

      {/* Floating Game Icons */}
      <View style={styles.canvasContainer}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Sphere position={[0, 1, 0]} args={[0.2, 32, 32]} />
        </Canvas>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  name: { fontSize: 20, fontWeight: 'bold' },
  info: { fontSize: 16, color: 'gray' },
  coinText: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  button: { backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 10 },
  buttonText: { color: 'white', fontWeight: 'bold' },
  canvasContainer: { width: 300, height: 300 },
});

export default ProfileScreen;
