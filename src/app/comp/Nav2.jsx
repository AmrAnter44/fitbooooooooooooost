import React from "react";
import Image from "next/image";   // 👈 يكون هنا فوق مش تحت

export default function Nav2() {
  return (
    <section className="relative h-[720px] flex items-start justify-start text-white">
      {/* Background image */}
      <Image
        src="/bg.webp"
        alt="Background"
        fill
        priority
        fetchPriority="high"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* محتوى السيكشن */}
      <div className="relative z-10 p-8">

      </div>
    </section>
  );
}
