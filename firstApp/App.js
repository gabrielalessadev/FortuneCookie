import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [broken, setBroken] = useState(false);
  const [phrase, setPhrase] = useState('');

  const phrases = [
    "A vida trará coisas boas se tiveres paciência.",
    "A vida coloca em nossa frente opções.",
    "Pare de procurar eternamente; a felicidade está bem ao seu lado.",
  ];

  const handlePress = () => {
    if (broken) {
      setBroken(false);
      setPhrase('');
    } else {
      const random = Math.floor(Math.random() * phrases.length);
      setPhrase(phrases[random]);
      setBroken(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cookieContainer}>
        <Image
          source={
            broken
              ? require('./assets/cookie_open.png')
              : require('./assets/cookie_closed.png')
          }
          style={styles.image}
        />
        {broken && <Text style={styles.phrase}>{phrase}</Text>}
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>
            {broken ? 'Tentar Novamente' : 'Quebrar Biscoito'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  cookieContainer: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: { width: 250, height: 250, resizeMode: 'contain' },
  phrase: {
    position: 'absolute',
    top: '40%',
    width: '90%',
    textAlign: 'center',
    fontSize: 18,
    fontStyle: 'italic',
    color: '#333',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 10,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#f39c12',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
