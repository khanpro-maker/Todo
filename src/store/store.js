import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useTodo = create(
    persist(
        (set) => ({
            id:1,
            todo: [],
            addTodo: (newTodo) => set((state) => ({
                todo: [...state.todo, newTodo],
                id:state.id+1
            })),
            removeTodo: (todoToRemove) => set((state) => ({
                todo: state.todo.filter((todo) => todo !== todoToRemove)
              }))
        }
    ),
    {
        name:"todo-storeage"
    }
));

export default useTodo;



