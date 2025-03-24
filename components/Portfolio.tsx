'use client'
import Portfolio1 from '@/assets/img/all-images/portfolio/portfolio-img1.png'
import Portfolio2 from '@/assets/img/all-images/portfolio/portfolio-img2.png'
import Portfolio3 from '@/assets/img/all-images/portfolio/portfolio-img3.png'
import Portfolio4 from '@/assets/img/all-images/portfolio/portfolio-img4.png'
import Sublogo1 from '@/assets/img/logo/logo1_49.png'
import Aos from 'aos'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Main from './Main'

const Portfolio = () => {
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
      <div id="list-item-3">
        <div className="portfolio-section-area">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="portfolio-header heading1">
                  <h5 data-aos="fade-left" data-aos-duration={800}>
                  <Image src={Sublogo1} alt="" height={25} width={35}/>
                    Portfolio
                  </h5>
                  <div className="space16" />
                </div>
              </Col>
              <div className="space24" />
              <Col lg={12} data-aos="fade-left" data-aos-duration={1000}>
                <div className="portfolio-boxarea click-here">
                  {/* Title */}
                  <Link href="https://jira-ffe.vercel.app/">Jira-ffe: Task Management Platform</Link>
                  {/* Image */}
                  <div className="img1">
                    <Link href="https://jira-ffe.vercel.app/">
                      <Image src={Portfolio1} alt="" />
                    </Link>
                  </div>
                  {/* Skills Tags */}
                  <div className="portfolio-skills">
                    <span className="skill-tag">Typescript</span>
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">Next.js</span>
                    <span className="skill-tag">Tailwind</span>
                    <span className="skill-tag">Zustand</span>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} data-aos="fade-left" data-aos-duration={1100}>
                <div className="portfolio-boxarea2 click-here">
                  {/* Title */}
                  <Link href="https://vuentertain.vercel.app/home">Vuentertain: Watch Anywhere</Link>
                  {/* Image */}
                  <div className="img1">
                    <Link href="https://vuentertain.vercel.app/home">
                      <Image src={Portfolio2} alt="" />
                    </Link>
                  </div>
                  {/* Skills Tags */}
                  <div className="portfolio-skills">
                    <span className="skill-tag">Javascript</span>
                    <span className="skill-tag">Vue</span>
                    <span className="skill-tag">Vuex</span>
                    <span className="skill-tag">Tailwind</span>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} data-aos="fade-left" data-aos-duration={1200}>
                <div className="portfolio-boxarea2 click-here">
                  {/* Title */}
                  <Link href="">Leadlogic: Dashboard Design</Link>
                  {/* Image */}
                  <div className="img1">
                    <Link href="">
                      <Image src={Portfolio3} alt="" />
                    </Link>
                  </div>
                  {/* Skills Tags */}
                  <div className="portfolio-skills">
                    <span className="skill-tag">UI/UX</span>
                    <span className="skill-tag">Figma</span>
                    <span className="skill-tag">Dashboard</span>
                  </div>
                </div>
              </Col>
              <div className="col-lg-12" data-aos="fade-left" data-aos-duration={1100}>
                <div className="portfolio-boxarea click-here">
                  {/* Title */}
                  <Link href="https://budgie-finance.vercel.app">Budgie: Finance Portal</Link>
                  {/* Image */}
                  <div className="img1">
                    <Link href="https://budgie-finance.vercel.app">
                      <Image src={Portfolio4} alt="" />
                    </Link>
                  </div>
                  {/* Skills Tags */}
                  <div className="portfolio-skills">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">MUI</span>
                    <span className="skill-tag">TypeScript</span>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
          <Main />
        </div>
      </div>
    </>
  )
}

export default Portfolio
