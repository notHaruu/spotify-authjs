// import TEST from "./test";
import { auth } from "@/auth";
import { headers } from "next/headers";
import SignOut from "@/components/sign-out";
import { redirect } from "next/navigation";
import SpotifyProfile from "@/components/spotify_profile";

export default async function Profile() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="p-6">
      <h1>Profile</h1>

      <div className="flex items-center gap-3 bg-neutral-800 rounded-lg p-5">
        <img
          src={session?.user?.image}
          alt={session?.user?.name ?? "User avatar"}
          className="rounded-full w-20 h-20"
        />

        <div className="flex flex-col pl-2">
          <p className="text-xl">{session?.user?.name}</p>
          <p className="text-xs text-gray-500">{session?.user?.email}</p>
        </div>

        <SignOut />
      </div>

      {/* 🔥 NEW: Spotify profile section */}
      <SpotifyProfile />

      {/* <TEST /> */}
    </div>
  );
}