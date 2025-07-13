import SidebarButton from "./SidebarButton";


export default function Sidebar() {
  return(
    <div className="flex flex-col bg-[#1DD2AF]">
      <SidebarButton iconSrc="/assets/Icon/Solid/folder.png" title="Home" />
      <SidebarButton iconSrc="/assets/Icon/Solid/star.png" title="Favorites" />
      <SidebarButton iconSrc="/assests/Icon/Solid/clock.png" title="Watch Later" />
    </div>
  )
}
