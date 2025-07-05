import { SignOutButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignUpButton />
      <br />
      <SignOutButton />
    </div>
  );
}
// *NOTE - we write "use client" to make the page client side, by default it is on server
