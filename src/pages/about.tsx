import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
      <h1 className="text-4xl font-bold">About</h1>
      <p className="text-center">This is the about page for the Autolingual.</p>
      <div className="space-x-4 *:underline *:underline-offset-2 *:text-blue-500">
        <Link href="/">Home Page ( Link comp )</Link>
        <a href="/">Home Page ( a tag )</a>
      </div>
    </main>
  );
}
