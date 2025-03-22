'use client'
import Sublogo1 from '@/assets/img/logo/logo1_49.png'
import responsive from '@/assets/img/icons/responsive.png'
import interactive from '@/assets/img/icons/interactive.png'
import quality from '@/assets/img/icons/quality-assurance.png'
import performance from '@/assets/img/icons/performance.png'
import Aos from 'aos'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

const About = () => {
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
        <div className="about-section-area">
          <div className="heading1">
            <h5 data-aos="fade-left" data-aos-duration={800}>
              <Image src={Sublogo1} alt="" height={25} width={35}/>
              Expertise
            </h5>
            <div className="space24" />
            <h1 data-aos="fade-left" data-aos-duration={1000}>
              Empowering 
            </h1>
            <div className="space24" />
            <h1 className="head" data-aos="fade-left" data-aos-duration={1100}>
            Digital Solutions
            </h1>
          </div>
          <div className="space60" />
          <div className="about-boxarea">
            <Row>
              <Col lg={6} md={6} data-aos="fade-up" data-aos-duration={900}>
                <div className="about-boxes2">
                  <Image src={responsive} alt="" />
                  <div className="content-area">
                    <h4>Responsive Web Development</h4>
                    <div className="space16" />
                    <p>Crafting seamless, responsive interfaces using modern frameworks and best practices.</p>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} data-aos="fade-up" data-aos-duration={1000}>
                <div className="about-boxes2">
                  <Image src={interactive} alt="" />
                  <div className="content-area">
                    <h4>Interactive UI/UX</h4>
                    <div className="space16" />
                    <p>Designing engaging user experiences with intuitive design and robust functionality.</p>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} data-aos="fade-up" data-aos-duration={1100}>
                <div className="about-boxes2">
                  <Image src={quality} alt="" />
                  <div className="content-area">
                    <h4>Quality Assurance</h4>
                    <div className="space16" />
                    <p>Implementing automated and manual testing to ensure reliable, bug-free interfaces.</p>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} data-aos="fade-up" data-aos-duration={1200}>
                <div className="about-boxes2">
                  <Image src={performance} alt="" />
                  <div className="content-area">
                    <h4>Performance Optimization</h4>
                    <div className="space16" />
                    <p>Enhancing load speeds and overall performance through advanced debugging and tuning.</p>
                  </div>
                </div>
              </Col>
              <div className="space20" />
              <Col lg={6} md={6}>
                <h3>Work Experience</h3>
                <div className="space32" />
                <div className="about-others-box" data-aos="zoom-in" data-aos-duration={900}>
                  <Link href="">05/2024 – Present</Link>
                  <div className="space16" />
                  <h4>
                    <Link href="">Gen AI Banking Platforms</Link>
                  </h4>
                  <div className="space16" />
                  <p>Devoteam – Junior Frontend Developer</p>
                  <div className="space32" />
                  <Link href="">09/2023 – 05/2024</Link>
                  <div className="space16" />
                  <h4>
                    <Link href="">Energy Portal</Link>
                  </h4>
                  <div className="space16" />
                  <p>Devoteam – Junior Frontend Developer</p>
                  <div className="space32" />
                  <Link href="">09/2022 – 08/2023</Link>
                  <div className="space16" />
                  <h4>
                    <Link href="">Retail Analytics Dashboard</Link>
                  </h4>
                  <div className="space16" />
                  <p>Devoteam – Junior Frontend Developer</p>
                </div>
              </Col>
              <Col lg={6} md={6}>
                <h3>Education</h3>
                <div className="space32" />
                <div className="about-others-box" data-aos="zoom-in" data-aos-duration={1100}>
                  <Link href="" target="_blank" rel="noopener noreferrer">
                    10/2022 – Present
                  </Link>
                  <div className="space16" />
                  <h4>
                    <Link href="" target="_blank" rel="noopener noreferrer">
                      Master’s in Artificial Intelligence Engineering
                    </Link>
                  </h4>
                  <div className="space16" />
                  <p>ISEP – Porto Institute of Engineering</p>
                  <div className="space32" />
                  <Link
                    href="https://www.isep.ipp.pt/Course/Course/462"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    10/2018 – 04/2021
                  </Link>
                  <div className="space16" />
                  <h4>
                    <Link
                      href="https://www.ipc.pt/en/formative-offer/estgoh/bachelor/bachelor-in-computer-engineering/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bachelor’s in Software Engineering
                    </Link>
                  </h4>
                  <div className="space16" />
                  <p>ISEC – Coimbra Institute of Engineering</p>
                </div>
              </Col>

              <div className="space20" />
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
