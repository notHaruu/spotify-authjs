import { auth } from "@/auth";
import SignIn from "@/components/sign-in";

console.log(auth)

export default async function HomePage() {
  const session = await auth()
  return (
    <div>
      <h1>Homepage</h1>
      <SignIn />

      <pre>{JSON.stringify(session)}</pre>
    </div>
  )
}

console.log(auth)