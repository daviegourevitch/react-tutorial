import React from "react";
import { StyleSheet, View } from "react-native";

import { TodoItem } from "@/components/TodoItem";

import { Button } from "react-native-paper";
import { useTodoList } from "@/hooks/useTodoList";

export const TodoTemplate = () => {
	const { todoList, addTodo } = useTodoList();
	return (
		<View style={styles.container}>
			{Object.entries(todoList).map(([id, todo], index) => (
				<TodoItem key={index} todo={todo} id={id} />
			))}
			<Button
				mode="contained"
				onPress={() => addTodo({ text: "New Todo", completed: false })}
				style={{ marginTop: 16 }}
			>
				Add Todo
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: "#fff",
	},
});
