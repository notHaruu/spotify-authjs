import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import SignIn from "@/components/sign-in";

export default async function HomePage() {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <h1>Homepage</h1>
      <SignIn />

      <pre>{JSON.stringify(session)}</pre>
    </div>
  )
}
