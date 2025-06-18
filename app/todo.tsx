import { TodoTemplate } from "@/components/TodoTemplate";
import React from "react";

import { TodoProvider } from "@/hooks/useTodoList";

export default function Todo() {
	return (
		<>
			<TodoProvider>
				<TodoTemplate />
			</TodoProvider>
		</>
	);
}
