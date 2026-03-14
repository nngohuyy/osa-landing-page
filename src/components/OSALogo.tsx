'use client'

import Image from "next/image";

type OSALogoProps = {
  className?: string;
};

export const OSALogo = ({ className }: OSALogoProps) => (
    <Image
      src={`/osa_horizontal_blue.svg`}
      alt="OSA Logo"
      height={40}
      width={120}
      className={className}
    />
);