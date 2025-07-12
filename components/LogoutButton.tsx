import { FiLogOut } from "react-icons/fi";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      type="button"
      className="flex items-center gap-2 cursor-pointer"
    >
      <FiLogOut />
      <span>Logout</span>
    </button>
  )
}
