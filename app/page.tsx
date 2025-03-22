'use client'
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import IconVertical from '@/components/IconVertical'
import SidebarPage from '@/components/Sidebar'
import { Col, Container, Row } from 'react-bootstrap'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Skills from '@/components/Skills'

const LandingPage = () => {
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
      <div className="body1">
        <div className="main-hero-area parallaxie">
          <Container>
            <Row>
              <Col lg={4}>
                <div className="personal-contact-box" data-aos="fade-right" data-aos-duration={1000}>
                  <IconVertical />
                  <SidebarPage />
                </div>
              </Col>
              <Col lg={8}>
                <div 
                  data-bs-spy="scroll" 
                  data-bs-target="#list-example" 
                  data-bs-smooth-scroll="true" 
                  className="scrollspy-example" 
                  tabIndex={0}
                >
                  <About />
                  <div className="space50" />
                  <Skills />
                  <div className="space50" />
                  <Portfolio />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default LandingPage
