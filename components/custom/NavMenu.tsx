"use client"

import { signIn, signOut, useSession } from "next-auth/react";

const Auth = () => {
  const { data: session } = useSession();

  if (session) { 
    return (
      <>
        <p>{session.user?.name}</p>
        <button onClick={() => signOut()}>sign out</button>
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
  
  return(
    <div>
      <Auth/>
    </div>
  )

}