import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type IconButtonProps = {
  iconSrc: StaticImageData;
  title: string;
  href: string;
  alt?: string;
}

export default function SidebarButton({ iconSrc, title, href, alt = "" }: IconButtonProps) {
  return(
    <Link href={href} className="flex cursor-pointer items-center gap-2 p-3">
      <Image src={iconSrc} alt={alt || title} />
      <span className="whitespace-nowrap overflow-hidden opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 ">
        {title}
      </span>
    </Link>
  );
}
