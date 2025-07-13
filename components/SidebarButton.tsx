import React from "react";

interface IconButtonProps {
  iconSrc: string;
  title: string;
  alt?: string
}

export default function SidebarButton({ iconSrc, title, alt = "" }: IconButtonProps) {
  return(
    <button type="button" className="flex cursor-pointer items-center gap-2">
      <img src={iconSrc} alt={alt || title} />
      <span>{title}</span>
    </button>
  );
}
