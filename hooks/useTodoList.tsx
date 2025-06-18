import React, { useState, useCallback } from "react";
import type { Todo } from "@/types/todo";

type TodoContextReturn = {
	todoList: Record<string, Todo>;
	updateTodo: (id: string, updatedTodo: Todo) => void;
	addTodo: (newTodo: Todo) => void;
	deleteTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodoContextReturn>({
	todoList: {},
	updateTodo: () => {
		throw new Error("updateTodo used outside of TodoProvider");
	},
	addTodo: () => {
		throw new Error("addTodo used outside of TodoProvider");
	},
	deleteTodo: () => {
		throw new Error("deleteTodo used outside of TodoProvider");
	},
});

type TodoProviderProps = {
	initialTodos?: Record<string, Todo>;
	children: React.ReactNode;
};

export const TodoProvider = ({ children, initialTodos }: TodoProviderProps) => {
	const [todoList, setTodoList] = useState<Record<string, Todo>>(
		initialTodos || {},
	);

	const newId = useCallback(() => {
		return Math.random().toString(36).substring(2, 15);
	}, []);

	const updateTodo = useCallback(
		(id: string, updatedTodo: Todo) => {
			setTodoList((prev) => ({
				...prev,
				[id]: { ...prev[id], ...updatedTodo },
			}));
		},
		[setTodoList],
	);

	const addTodo = useCallback(
		(newTodo: Todo) => {
			setTodoList((prev) => ({
				...prev,
				[newId()]: newTodo,
			}));
		},
		[setTodoList, newId],
	);

	const deleteTodo = useCallback(
		(id: string) => {
			setTodoList((prev) => {
				const { [id]: _, ...rest } = prev;
				return rest;
			});
		},
		[setTodoList],
	);

	const context = {
		updateTodo,
		addTodo,
		deleteTodo,
		todoList,
	};

	return (
		<TodoContext.Provider value={context}>{children}</TodoContext.Provider>
	);
};

export const useTodoList = () => {
	const context = React.useContext(TodoContext);
	if (!context) {
		throw new Error("useTodoList must be used within a TodoListProvider");
	}
	return context;
};
