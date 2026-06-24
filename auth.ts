import { betterAuth } from "better-auth";

export const auth = betterAuth({
  socialProviders: { 
    spotify: { 
      clientId: process.env.SPOTIFY_CLIENT_ID as string, 
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      scope: [
        "user-read-email",
        "user-read-private",
        "user-top-read",
        "user-library-read",
        "user-library-modify",
        "playlist-read-private",
        "playlist-modify-private",
        "playlist-modify-public",
        "user-read-playback-state",
        "user-modify-playback-state",
      ]
    }
  }
})