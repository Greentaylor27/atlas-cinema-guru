'use client'

import { BsFilm } from "react-icons/bs";
import { useSession } from "next-auth/react"
import LogoutButton from "./LogoutButton";

export default function Header() {
  const { data: session} = useSession();

  return(
    <nav className="flex items-center justify-between p-4 bg-[#54F4D0] text-[#00003c] shadow-md">
      <div className="flex items-center gap-2">
        <BsFilm className="text-2xl" />
        <h1 className="text-xl font-bold tracking-wide">Cinema Guru</h1>
      </div>

      <div className="flex items-center gap-4">
        <p className="text-sm">
          Welcome, {session?.user?.email ? `${session.user.email}` : ''}
        </p>
        <LogoutButton />
      </div>
    </nav>
  );
}
