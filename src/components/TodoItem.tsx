
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput,
} from 'react-native';
import {Todo, useTodoStore} from '../store/todoStore';
import {colors} from '../styles/colors';
import {spacing, typography, elevation, borderRadius} from '../styles/material';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
  const {toggleTodo, deleteTodo, editTodo} = useTodoStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    Alert.alert(
      'Delete Todo',
      `Are you sure you want to delete "${todo.text}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => deleteTodo(todo.id),
        },
      ]
    );
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (editText.trim().length === 0) {
      Alert.alert('Invalid Input', 'Todo text cannot be empty.');
      setEditText(todo.text);
      return;
    }
    
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={handleToggle}
        accessibilityLabel={`Mark ${todo.text} as ${todo.completed ? 'incomplete' : 'complete'}`}
        accessibilityRole="checkbox"
        accessibilityState={{checked: todo.completed}}
      >
        <View style={[
          styles.checkbox,
          todo.completed && styles.checkboxCompleted
        ]}>
          {todo.completed && (
            <Text style={styles.checkmark}>✓</Text>
          )}
        </View>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        {isEditing ? (
          <View style={styles.editContainer}>
            <TextInput
              style={styles.editInput}
              value={editText}
              onChangeText={setEditText}
              onSubmitEditing={handleSaveEdit}
              autoFocus
              returnKeyType="done"
              blurOnSubmit={false}
            />
            <View style={styles.editButtons}>
              <TouchableOpacity
                style={[styles.editButton, styles.saveButton]}
                onPress={handleSaveEdit}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.editButton, styles.cancelButton]}
                onPress={handleCancelEdit}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <TouchableOpacity onPress={handleEdit} style={styles.textTouchable}>
            <Text style={[
              styles.todoText,
              todo.completed && styles.todoTextCompleted
            ]}>
              {todo.text}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={handleDelete}
        accessibilityLabel={`Delete ${todo.text}`}
        accessibilityRole="button"
      >
        <Text style={styles.deleteButtonText}>×</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    marginHorizontal: spacing.md,
    marginVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.medium,
    ...elevation.low,
  },
  checkboxContainer: {
    padding: spacing.xs,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: borderRadius.small,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxCompleted: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkmark: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
    marginLeft: spacing.sm,
    justifyContent: 'center',
  },
  textTouchable: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: spacing.xs,
  },
  todoText: {
    ...typography.body1,
    color: colors.textPrimary,
  },
  todoTextCompleted: {
    color: colors.textSecondary,
    textDecorationLine: 'line-through',
  },
  editContainer: {
    flex: 1,
  },
  editInput: {
    ...typography.body1,
    color: colors.textPrimary,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    paddingVertical: spacing.xs,
    marginBottom: spacing.sm,
  },
  editButtons: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  editButton: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.small,
    minWidth: 60,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: colors.primary,
  },
  cancelButton: {
    backgroundColor: colors.border,
  },
  saveButtonText: {
    color: colors.surface,
    fontSize: typography.caption.fontSize,
    fontWeight: '600',
  },
  cancelButtonText: {
    color: colors.textSecondary,
    fontSize: typography.caption.fontSize,
    fontWeight: '600',
  },
  deleteButton: {
    padding: spacing.xs,
    marginLeft: spacing.sm,
  },
  deleteButtonText: {
    fontSize: 24,
    color: colors.error,
    fontWeight: 'bold',
  },
});

export default TodoItem;
