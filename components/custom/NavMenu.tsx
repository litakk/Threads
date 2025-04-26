"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const Auth = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Выход</button>
      </>
    );
  }

  return (
    <>
      <p>Not Signed in</p>
      <button onClick={() => signIn()}>sign in</button>
    </>
  );
};

export default function NavMenu() {
  return (
    <div>
      <Auth />
    </div>
  );
}
