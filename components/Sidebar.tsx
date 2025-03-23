'use client'
import Hero from '@/assets/img/all-images/hero/hero-img1.png'
import Sicon1 from '@/assets/img/icons/linkedin.svg'
import Aos from 'aos'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

const SidebarPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    })
    return () => {
      Aos.refresh()
    }
  }, [])
  return (
    <>
      <div className="reveal-item  rounded img1 image-anime" data-aos="reveal-item">
        <div className="reveal-animation reveal-end reveal-primary aos" data-aos="reveal-end" />
        <Image className="w-100" src={Hero} alt="image" style={{ height: "100%" }}/>
      </div>
      <div className="space18" />
      <h3>Gonçalo Monteiro</h3>
      <div className="space16" />
      <p>Hi, I’m Gonçalo, a dedicated Junior Web Developer with 2 years of hands-on experience, I deliver innovative solutions for high-profile clients in banking, energy, and retail. </p>
      <div className="space32" />
      <ul>
        <li>
          <Link href="https://www.linkedin.com/in/goncalo--monteiro/" target="_blank" rel="noopener noreferrer">
            <Image src={Sicon1} alt="" />
          </Link>
        </li>
      </ul>
      <div className="space30" />
    </>
  )
}

export default SidebarPage
