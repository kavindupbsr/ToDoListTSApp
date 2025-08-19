import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import {useTodoStore} from '../store/todoStore';
import {colors} from '../styles/colors';
import {spacing, typography, elevation, borderRadius} from '../styles/material';

const AddTodoForm: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const {addTodo} = useTodoStore();

  const handleAddTodo = () => {
    const trimmedText = inputText.trim();
    
    if (trimmedText.length === 0) {
      Alert.alert('Invalid Input', 'Please enter a todo item.');
      return;
    }

    addTodo(trimmedText);
    setInputText('');
  };

  const handleSubmitEditing = () => {
    handleAddTodo();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleSubmitEditing}
          placeholder="Add a new todo..."
          placeholderTextColor={colors.textHint}
          returnKeyType="done"
          blurOnSubmit={false}
          accessibilityLabel="Todo input field"
          accessibilityHint="Enter your new todo item here"
        />
        
        <TouchableOpacity
          style={[
            styles.addButton,
            inputText.trim().length === 0 && styles.addButtonDisabled
          ]}
          onPress={handleAddTodo}
          disabled={inputText.trim().length === 0}
          accessibilityLabel="Add todo"
          accessibilityRole="button"
          accessibilityState={{disabled: inputText.trim().length === 0}}
        >
          <Text style={[
            styles.addButtonText,
            inputText.trim().length === 0 && styles.addButtonTextDisabled
          ]}>
            ADD
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: spacing.md,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: borderRadius.medium,
    ...elevation.low,
    overflow: 'hidden',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    fontSize: typography.body1.fontSize,
    color: colors.textPrimary,
    backgroundColor: colors.surface,
  },
  addButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
  },
  addButtonDisabled: {
    backgroundColor: colors.border,
  },
  addButtonText: {
    color: colors.surface,
    fontSize: typography.body2.fontSize,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  addButtonTextDisabled: {
    color: colors.textHint,
  },
});

export default AddTodoForm;
