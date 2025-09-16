import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Choose() {
  return <>    
    <div className="w-full flex flex-col lg:flex-row gap-6 p-6">

      <Link href="/coach" className="w-full lg:w-1/2">
        <div className="relative w-full h-60 lg:h-96 rounded-2xl overflow-hidden group cursor-pointer">
          <Image
            src="/coach.jpg"
            alt="Button 1"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/20 transition duration-500"></div>
          <h2 className="absolute inset-0 flex items-center justify-center text-2xl lg:text-4xl  font-bold text-amber-300">
            Coach
          </h2>
        </div>
      </Link>


      <Link href="/gym" className="w-full lg:w-1/2">
        <div className="relative w-full h-60 lg:h-96 rounded-2xl overflow-hidden group cursor-pointer">
          <Image
            src="/gym.jpg"
            alt="Button 2"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/20 transition duration-500"></div>
          <h2 className="absolute inset-0 flex items-center justify-center text-2xl lg:text-4xl font-bold text-amber-300 ">
            Gym
          </h2>
        </div>
      </Link>
    </div>
  </>
}
