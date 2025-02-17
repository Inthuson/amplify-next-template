"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider } from '@aws-amplify/ui-react';
import { TodoCreateForm } from "./../ui-components"

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  return (
    <ThemeProvider>

    <main>
      <h1>My todos</h1>
      <TodoCreateForm />
    </main>
    </ThemeProvider>
  );
}
