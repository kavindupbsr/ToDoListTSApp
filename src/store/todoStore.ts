import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  clearCompleted: () => void;
  getTodoStats: () => {
    total: number;
    completed: number;
    pending: number;
  };
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      todos: [],

      addTodo: (text: string) => {
        if (text.trim().length === 0) return;
        
        const newTodo: Todo = {
          id: `${Date.now()}-${Math.random()}`,
          text: text.trim(),
          completed: false,
          createdAt: new Date(),
        };

        set((state) => ({
          todos: [...state.todos, newTodo],
        }));
      },

      deleteTodo: (id: string) => {
        set((state) => ({
          todos: state.todos.filter(todo => todo.id !== id),
        }));
      },

      toggleTodo: (id: string) => {
        set((state) => ({
          todos: state.todos.map(todo =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
          ),
        }));
      },

      editTodo: (id: string, newText: string) => {
        if (newText.trim().length === 0) return;
        
        set((state) => ({
          todos: state.todos.map(todo =>
            todo.id === id ? {...todo, text: newText.trim()} : todo
          ),
        }));
      },

      clearCompleted: () => {
        set((state) => ({
          todos: state.todos.filter(todo => !todo.completed),
        }));
      },

      getTodoStats: () => {
        const todos = get().todos;
        const completed = todos.filter(todo => todo.completed).length;
        
        return {
          total: todos.length,
          completed,
          pending: todos.length - completed,
        };
      },
    }),
    {
      name: 'todo-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({todos: state.todos}),
    }
  )
);
