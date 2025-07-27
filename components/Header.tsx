'use client';

import Image from 'next/image';

export default function Header() {
  const handleSayHello = () => {
    window.location.href = 'mailto:fatihaerosperdana@gmail.com?subject=Hello! Let\'s work together&body=Hi Fatiha, I\'d love to discuss a potential project with you.';
  };

  return (
    <header className="flex justify-between items-center mb-16">
      <div className="flex items-center space-x-2">
        <Image
          alt="Fatiha's profile picture - Product Designer"
          className="w-8 h-8 rounded-full"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrxJ-8qq7haBmLMqVZnn-_Ld8aBnfTsfExj1a-ye_1IcpnGGih4ZhLxTtmwqf7J84bBaYovgN2tj6dhPkIf-VQR6BspncKRxgv-9GIjH676-3Am1M7q8BM3SDp4b2byJVH6f8LKL4J_krrIo3yJEkS7jfdYFdHRy8idLwe5qLstGGP4QNZxjo_UY-0iV2Y9zTzKcyIWi30NZ249pCxMovKzMo1OBtNvUDPaMswX0Us7l3JVtr1_XFioYaSgZuHkZ6s_1lv9Xdz7J_J"
          width={32}
          height={32}
          priority
        />
        <span className="material-icons text-gray-400" title="Profile">person_outline</span>
        <span className="material-icons text-gray-400" title="Design Services">palette</span>
        <span className="material-icons text-gray-400" title="Portfolio">description</span>
      </div>
      
      <button 
        onClick={handleSayHello}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label="Send email to say hello"
      >
        <span>Say Hello!</span>
        <span className="material-icons">waving_hand</span>
      </button>
    </header>
  );
}