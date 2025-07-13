import Image, { StaticImageData } from "next/image";

interface IconButtonProps {
  iconSrc: StaticImageData;
  title: string;
  alt?: string
}

export default function SidebarButton({ iconSrc, title, alt = "" }: IconButtonProps) {
  return(
    <button type="button" className="flex cursor-pointer items-center gap-2 p-3">
      <Image src={iconSrc} alt={alt || title} />
      <span className="whitespace-nowrap overflow-hidden opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 ">
        {title}
      </span>
    </button>
  );
}
