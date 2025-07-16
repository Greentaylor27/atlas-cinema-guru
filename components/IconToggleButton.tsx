import Image from "next/image"

type IconToggleButtonProps = {
  activeIcon: string;
  inactiveIcon: string;
  isActive: boolean;
  alt: string;
};

export default function IconToggleButton({
  activeIcon,
  inactiveIcon,
  isActive,
  alt
}: IconToggleButtonProps) {
  return (
    <Image
      src={isActive ? activeIcon : inactiveIcon}
      alt={alt}
      width={20}
      height={20}
    />
  )
}
