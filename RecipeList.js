import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const RecipeList = ({ recipes }) => {
  // Convert recipes into sections based on some criteria (e.g., categories)
  const sections = [
    {
      title: 'Recipes', // Section title
      data: recipes,    // Data for this section
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recipes:</Text>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.recipe.uri}
        renderItem={({ item }) => (
          <View style={styles.recipeItem}>
            <Text style={styles.recipeLabel}>{item.recipe.label}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
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
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  recipeItem: {
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  recipeLabel: {
    fontSize: 16,
  },
});

export default RecipeList;
