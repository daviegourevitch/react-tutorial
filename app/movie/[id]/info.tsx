import React from "react";
import { Text } from "react-native";
import { useGlobalSearchParams } from "expo-router";

export default function MovieInfo() {
	console.log("MovieInfo component rendered");
	const { id, tabOpen } = useGlobalSearchParams<{
		id: string;
		tabOpen: string;
	}>();
	return (
		<Text style={{ color: "white" }}>
			You are viewing movie with id {id} with tab open {tabOpen}
		</Text>
	);
}
