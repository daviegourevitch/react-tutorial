# app

## What is this?

The app folder is a common practice for a variety of frameworks.
In essence, it lets you break down your website's routes into a folder structure.

### Example

Imagine you have a website that has these routes:

1. my-app.com (root)
2. my-app.com/login
3. my-app.com/settings
4. my-app.com/movie/1234

You would have this folder structure:
/app
index.tsx (used for #1)
login.tsx (used for #2)
/settings
index.tsx (used for #3, works the same as login just a different structure)
/movie
/[id].tsx (used for #4, the [id] lets us capture any URL as the id of the movie to look up)

in short:

- The names of the folders match the names of the url
- When a user goes to a webpage, the app tries to figure out which file to serve them
- If there's a direct match, it goes with that (i.e., /app/login.tsx)
- If there's a folder, it goes into that folder then serves the index file (i.e., /app/settings/index.tsx)
- If it hits a folder without an index, it'll try to match a generic route (i.e., /app/movie/[id])

## How do I add a new page?

1. Start by creating your components in /components
2. (Optional) Standard react practice suggests that you build the full page in your components folder. It would be called a "template"
3. Once you have everything you need (either the components or the template) make a new route following the practices above
4. In your route, write code like this:

```tsx
// This file is /app/movie/[id].tsx
import React from "react";
import { Text } from "react-native";
import { useGlobalSearchParams } from "expo-router";

export default function MovieId() {
  const { id } = useGlobalSearchParams();
  return <Text>You are viewing a movie with ID {id}</Text>;
}
```
