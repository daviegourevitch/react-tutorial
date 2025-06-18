import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

import type { Todo } from "@/types/todo";
import { useTodoList } from "@/hooks/useTodoList";

type TodoItemProps = {
	todo: Todo;
	id: string;
};

export function TodoItem({ todo, id }: TodoItemProps) {
	const [isEditing, setIsEditing] = React.useState(false);
	const [text, setText] = React.useState(todo.text);

	const { updateTodo, deleteTodo } = useTodoList();

	return (
		<View style={styles.todoItem}>
			{isEditing ? (
				<TextInput
					value={text}
					onChangeText={setText}
					style={styles.input}
					onSubmitEditing={() => {
						updateTodo(id, { text });
						setIsEditing(false);
					}}
				/>
			) : (
				<View style={styles.todoContent}>
					<Button
						mode="text"
						onPress={() => {
							updateTodo(todo.id, { completed: !todo.completed });
						}}
						style={styles.completeButton}
					>
						{todo.completed ? "Undo" : "Complete"}
					</Button>
					<View style={styles.todoTextContainer}>
						<Button mode="text" onPress={() => setIsEditing(true)}>
							{todo.text}
						</Button>
					</View>
				</View>
			)}
			<Button
				mode="text"
				onPress={() => {
					deleteTodo(todo.id);
				}}
				style={styles.deleteButton}
			>
				Delete
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	todoItem: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	input: {
		flex: 1,
		marginRight: 10,
	},
	todoContent: {
		flexDirection: "row",
		alignItems: "center",
		flex: 1,
	},
	completeButton: {
		marginRight: 10,
	},
	todoTextContainer: {
		flex: 1,
	},
	deleteButton: {
		marginLeft: 10,
	},
});
