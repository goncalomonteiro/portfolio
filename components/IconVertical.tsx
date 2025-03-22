'use client'
import Puzzle from '@/assets/img/icons/puzzle.svg'
import Profile from '@/assets/img/icons/experience-expert.svg'
import Portfolio from '@/assets/img/icons/portfolio.svg'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'

const IconVertical = () => {
  return (
    <>
      <div id="list-example" className="list-group">
        <div className="btn-area d-lg-flex">
          <ThemeToggle />
        </div>
        <a className="list-group-item list-group-item-action" href="#list-item-1">
        <Image src={Profile} alt="" /> <span>Expertise</span>
        </a>
        <a className="list-group-item list-group-item-action" href="#list-item-2">
          <Image src={Puzzle} alt="" /> <span>Tech Stack</span>
        </a>
        <a className="list-group-item list-group-item-action" href="#list-item-3">
        <Image src={Portfolio} alt="" /> <span>Portfolio</span>
        </a>
      </div>
    </>
  )
}

export default IconVertical
