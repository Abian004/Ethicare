import React from 'react'
import Image from 'next/image';
import headerImg from '@/images/Header.png'
import Navbar from './Navbar/Navbar';

export default function Header() {
  return (
    <>
      <Image
        src={headerImg}
        alt="Logo"
        className="w-full h-auto"
      />

      <span className='flex justify-center w-full'>
        <Navbar />
      </span>
    </>
  )
}
