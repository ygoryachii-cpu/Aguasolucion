"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
};

export function ProductImage({ src, alt }: Props) {
  const [hideImage, setHideImage] = useState(false);

  if (hideImage) {
    return (
      <div
        className="flex aspect-[4/3] flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-100 to-brand-50 text-brand-400"
        role="img"
        aria-label={alt}
      >
        <ImageIcon className="h-14 w-14 opacity-60" strokeWidth={1.25} aria-hidden />
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain p-3"
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={() => setHideImage(true)}
      />
    </div>
  );
}
