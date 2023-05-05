"use client";

import Image from "next/image";

interface Props {
  src?: string | null | undefined;
}

const Avatar = ({ src }: Props) => {
  return (
    <Image
      src={src || "/images/placeholder.jpg"}
      alt="User Avatar"
      height={30}
      width={30}
      className="rounded-full"
    />
  );
};
export default Avatar;
