import { BsFilm } from "react-icons/bs";

export default function Header() {
  return(
    <nav className="flex items-center gap-2 p-4 bg-gray-600 text-white shadow-md">
      <BsFilm className="text-2xl" />
      <h1 className="text-xl font-semibold tracking-wide">Cinema Guru</h1>
    </nav>
  )
}
