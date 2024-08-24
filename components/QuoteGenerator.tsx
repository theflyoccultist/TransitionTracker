import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '@/src/styles/QuoteGeneratorStyle';

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "Get busy living or get busy dying. - Stephen King",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy"
  // Add more quotes here
];

const QuoteGenerator: React.FC = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    generateRandomQuote(); // Generate a quote when the component mounts
  }, []);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.quoteText}>{quote}</Text>
      <Button title="New Quote" onPress={generateRandomQuote} />
    </View>
  );
};

export default QuoteGenerator;
