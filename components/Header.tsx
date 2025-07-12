'use client'

import { BsFilm } from "react-icons/bs";
import { useSession } from "next-auth/react"

export default function Header() {
  const { data: session} = useSession();

  return(
    <nav className="flex items-center justify-between p-4 bg-[#54F4D0] text-[#00003c] shadow-md">
      <div className="flex items-center gap-2">
        <BsFilm className="text-2xl" />
        <h1 className="text-xl font-semibold tracking-wide">Cinema Guru</h1>
      </div>

      {session?.user?.email && (
        <p className="text-sm font-medium">Welcome, {session.user.email}</p>
      )}
    </nav>
  );
}
