import SidebarButton from "./SidebarButton";
import Clock from "@/assets/Icon/Solid/clock.svg";
import Star from "@/assets/Icon/Solid/star.svg";
import Folder from "@/assets/Icon/Solid/folder.svg";


export default function Sidebar() {
  return(
    <div className="w-20 hover:w-64 transition-all duration-300 ease-in-out h-full bg-[#1DD2AF] flex flex-col p-4 group">
      <SidebarButton iconSrc={Clock} title="Home" href="/" />
      <SidebarButton iconSrc={Star} title="Favorites" href="/favorite-page" />
      <SidebarButton iconSrc={Folder} title="Watch Later" href="/watch-later-page"/>
    </div>
  )
}
