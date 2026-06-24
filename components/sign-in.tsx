"use client";

import { signIn } from "next-auth/react";
 
export default function SignIn() {
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        await signIn("spotify");
      }}
    >
      <button type="submit">Sign in with Spotify</button>
    </form>
  )
}
