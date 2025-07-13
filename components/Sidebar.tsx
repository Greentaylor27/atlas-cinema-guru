import SidebarButton from "./SidebarButton";
import Clock from "@/assets/Icon/Solid/clock.png";
import Star from "@/assets/Icon/Solid/star.svg";
import Folder from "@/assets/Icon/Solid/folder.svg";


export default function Sidebar() {
  return(
    <div className="w-20 hover:w-64 transition-all duration-300 ease-in-out h-full bg-[#1DD2AF] flex flex-col p-4 group">
      <SidebarButton iconSrc={Clock} title="Home" />
      <SidebarButton iconSrc={Star} title="Favorites" />
      <SidebarButton iconSrc={Folder} title="Watch Later" />
    </div>
  )
}
