"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
export default function Header() {
  const [showNavigation,setNavigation]=useState(false)
  const navItems =[
    {
      title: "About",
      path: "#",
    },
    {
      title:"Tours",
      path:"#",
    },
    {
      title:"Our Guides",
      path:"#",
    },
    {
      title:"Hotel",
      path:"#",
    },
    {
      title:"Contact",
      path:"#",
    }
  ];

  function handleNavigation(){
    setNavigation(!showNavItems)
  };
  return (
    <header className='header'>
        <Link href="./" className='logo'>
            <Image src="/Images/beewing.jpg" width={50}  height={50} alt='bee wing'/>
            <h2>bee wing</h2>
        </Link>
        <nav  className={showNavigation?"shownavitems":""}>{
          navItems.map((item,i) =>{
            return(
              <Link key={i} href={item.path}>{item.title}</Link>
            )
          })}
            
        </nav>
        <div className="cta">
            <Link href="#">Book Now</Link>
        </div>
        <button className="menu" onClick={handleNavigation}>
          <div className="m"></div>
          <div className="m"></div>
          <div className="m"></div>
        </button>
    </header>
  )
}
