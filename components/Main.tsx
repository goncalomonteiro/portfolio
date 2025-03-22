'use client'
import Aos from 'aos'
import Link from 'next/link'
import { useEffect } from 'react'
import { FaGithub } from 'react-icons/fa6'

const Main = () => {
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
      <div id="list-item-1">
        <div className="hero-heading-area heading1">
          <div className="main-btn-area" data-aos="fade-up" data-aos-duration={1200}>
            <Link
              href="https://github.com/goncalomonteiro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Source
              <span>
                <FaGithub className="fa-solid" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
