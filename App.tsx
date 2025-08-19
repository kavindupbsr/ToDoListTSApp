/**
 * TodoList React Native App
 * 
 * A modern, Material Design-inspired todo list application built with React Native.
 * Features include adding, deleting, and marking todos as complete with persistent storage.
 * 
 * Architecture:
 * - React Native CLI (Bare Workflow) for full native control
 * - Zustand for lightweight, performant state management
 * - AsyncStorage for persistent data storage
 * - Material Design principles for clean, professional UI
 * - TypeScript for type safety and better developer experience
 * 
 * @format
 */

import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

// Import our custom components
import AddTodoForm from './src/components/AddTodoForm';
import TodoList from './src/components/TodoList';

// Import our styling constants
import {colors} from './src/styles/colors';
import {spacing, typography, elevation} from './src/styles/material';

/**
 * Main App Component
 * 
 * Provides the overall structure and layout for the todo application.
 * Includes proper keyboard handling and safe area management for different devices.
 */
function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      {/* Configure status bar for Material Design look */}
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryDark}
        translucent={false}
      />
      
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          {/* App Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>My Todo List</Text>
            <Text style={styles.headerSubtitle}>Stay organized, get things done</Text>
          </View>

          {/* Add Todo Form */}
          <AddTodoForm />

          {/* Todo List */}
          <TodoList />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg,
    ...elevation.medium,
  },
  headerTitle: {
    ...typography.h1,
    color: colors.surface,
    textAlign: 'center',
  },
  headerSubtitle: {
    ...typography.body2,
    color: colors.primaryLight,
    textAlign: 'center',
    marginTop: spacing.xs,
    opacity: 0.9,
  },
});

export default App;
