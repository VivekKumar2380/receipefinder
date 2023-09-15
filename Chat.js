import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SectionList, ActivityIndicator } from 'react-native';
import { chatWithGPT } from './ApiFunc';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (message.trim() !== '') {
      try {
        setIsLoading(true); // Start loading
        const gptResponse = await chatWithGPT(message);
        // Add the new message to the sections
        setSections([...sections, { title: 'Chat', data: [gptResponse] }]);
      } catch (error) {
        // Handle error
      } finally {
        setIsLoading(false); // Stop loading, whether successful or not
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chat with Recipe Assistant</Text>
      <SectionList
        style={styles.messageContainer}
        sections={sections}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.responseContainer}>
            <Text style={styles.response}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        keyboardShouldPersistTaps="always"
      />
      <TextInput
        style={styles.input}
        placeholder="Type your message..."
        onChangeText={(text) => setMessage(text)}
        value={message}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Send" onPress={handleSendMessage} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  messageContainer: {
    flex: 1,
    marginBottom: 16,
  },
  responseContainer: {
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  response: {
    fontSize: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    padding: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
});

export default Chat;
