"use client";
import Image from "next/image";
import Link from "next/link";

export default function Buttons() {
  return <>
  <h3 className="text-4xl font-bold mb-4 text-center my-8 text-amber-300">Who We Are</h3>
<p className="text-lg text-center w-3/4 mx-auto">
  Fit Boost was founded as a dedicated agency that helps gyms and coaches improve their performance and increase sales. We specialize in creating strategies that optimize operations, enhance client engagement, and drive sustainable growth. At Fit Boost, we believe in people, relationships, and the power of teamwork — combining vision, focus, and innovation to deliver solutions that empower fitness professionals and gyms to reach their full potential.
</p>
<div className="text-center my-4">
<Link href="/page2" className="px-4 py-2 bg-amber-300 text-black mx-auto mt-4">
  See More
</Link>
  </div>
  </>
}