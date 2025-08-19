import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useTodoStore} from '../store/todoStore';
import TodoItem from './TodoItem';
import {colors} from '../styles/colors';
import {spacing, typography} from '../styles/material';

const TodoList: React.FC = () => {
  const {todos, getTodoStats, clearCompleted} = useTodoStore();
  const stats = getTodoStats();
  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  const renderTodoItem = ({item}: {item: any}) => (
    <TodoItem todo={item} />
  );

  const handleClearCompleted = () => {
    clearCompleted();
  };

  if (todos.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>No todos yet!</Text>
        <Text style={styles.emptyMessage}>
          Add your first todo using the input above
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.statsContainer}>
        <View style={styles.statsRow}>
          <Text style={styles.statsText}>
            Total: {stats.total} | Completed: {stats.completed} | Pending: {stats.pending}
          </Text>
          
          {stats.completed > 0 && (
            <TouchableOpacity
              style={styles.clearButton}
              onPress={handleClearCompleted}
              accessibilityLabel="Clear completed todos"
              accessibilityRole="button"
            >
              <Text style={styles.clearButtonText}>Clear Completed</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Active Tasks ({activeTodos.length})</Text>
        {activeTodos.length === 0 ? (
          <View style={styles.emptySection}>
            <Text style={styles.emptySectionText}>No active tasks</Text>
          </View>
        ) : (
          <FlatList
            data={activeTodos}
            renderItem={renderTodoItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={true}
            maxToRenderPerBatch={10}
            windowSize={10}
          />
        )}
      </View>

      {completedTodos.length > 0 && (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Completed Tasks ({completedTodos.length})</Text>
          <FlatList
            data={completedTodos}
            renderItem={renderTodoItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={true}
            maxToRenderPerBatch={10}
            windowSize={10}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  emptyTitle: {
    ...typography.h2,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  emptyMessage: {
    ...typography.body1,
    color: colors.textHint,
    textAlign: 'center',
    lineHeight: 24,
  },
  statsContainer: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statsText: {
    ...typography.body2,
    color: colors.textSecondary,
    flex: 1,
  },
  clearButton: {
    backgroundColor: colors.accent,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 4,
    marginLeft: spacing.sm,
  },
  clearButtonText: {
    ...typography.caption,
    color: colors.surface,
    fontWeight: '600',
  },
  listContent: {
    paddingVertical: spacing.sm,
    flexGrow: 1,
  },
  sectionContainer: {
    flex: 1,
    marginBottom: spacing.md,
  },
  sectionTitle: {
    ...typography.h2,
    color: colors.textPrimary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  emptySection: {
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
  },
  emptySectionText: {
    ...typography.body2,
    color: colors.textHint,
    fontStyle: 'italic',
  },
});

export default TodoList;
