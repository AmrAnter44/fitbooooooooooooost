import React from 'react'
import { MessageCircle } from 'lucide-react'
export default function Cta() {
  return (
          <div className="fixed bottom-8 right-8 z-50">
        <a href='https://wa.me/201143564657' className="w-16 h-16 bg-amber-300 text-white rounded-full flex items-center justify-center font-bold text-xl hover:bg-white hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce hover:animate-none cursor-pointer">
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
  )
}
