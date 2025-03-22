'use client'
import Skill1 from '@/assets/img/icons/skill1.svg'
import Skill2 from '@/assets/img/icons/javascript.svg'
import Skill3 from '@/assets/img/icons/typescript.svg'
import Skill4 from '@/assets/img/icons/react.svg'
import Skill5 from '@/assets/img/icons/nextjs.svg'
import Skill6 from '@/assets/img/icons/vue.svg'
import Skill7 from '@/assets/img/icons/mui.svg'
import Skill8 from '@/assets/img/icons/redux.svg'
import Skill9 from '@/assets/img/icons/cypress.svg'
import Skill10 from '@/assets/img/icons/vitest.svg'
import Skill11 from '@/assets/img/icons/jest.svg'
import Skill12 from '@/assets/img/icons/tailwind.svg'
import Skill13 from '@/assets/img/icons/more.svg'
import Sublogo1 from '@/assets/img/icons/sublogo1.svg'
import Aos from 'aos'
import Image from 'next/image'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Skills = () => {
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
      <div id="list-item-2">
        <div className="skill-section-area">
          <Container>
            <Row>
              <Col gl={12}>
                <div className="skill-header heading1">
                  <h5 data-aos="fade-left" data-aos-duration={800}>
                    <Image src={Sublogo1} alt="" />
                    Tech Stack
                  </h5>
                </div>
                <div className="space20" />
                <Row>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={900}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill1} alt="" />
                      </div>
                      <div className="space16" />
                      <p>Figma</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={1000}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill2} alt="" />
                      </div>
                      <div className="space16" />
                      <p>Javascript</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={1100}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill3} alt="" />
                      </div>
                      <div className="space16" />
                      <p>Typescript</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={1200}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill4} alt="" />
                      </div>
                      <div className="space16" />
                      <p>React</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={1000}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill5} alt="" />
                      </div>
                      <div className="space16" />
                      <p>NextJS</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={11000}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill6} alt="" /*className="Wordpress"*/ />
                      </div>
                      <div className="space16" />
                      <p>Vue</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={11000}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill7} alt="" /*className="Wordpress"*/ />
                      </div>
                      <div className="space16" />
                      <p>MUI</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={11000}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill8} alt="" /*className="Wordpress"*/ />
                      </div>
                      <div className="space16" />
                      <p>Redux</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={11000}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill12} alt="" /*className="Wordpress"*/ />
                      </div>
                      <div className="space16" />
                      <p>Tailwind</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={11000}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill9} alt="" /*className="Wordpress"*/ />
                      </div>
                      <div className="space16" />
                      <p>Cypress</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={11000}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill10} alt="" /*className="Wordpress"*/ />
                      </div>
                      <div className="space16" />
                      <p>Vitest</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos="zoom-out" data-aos-duration={11000}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill11} alt="" /*className="Wordpress"*/ />
                      </div>
                      <div className="space16" />
                      <p>Jest</p>
                    </div>
                  </Col>
                  <Col lg={12} md={12} data-aos="zoom-out" data-aos-duration={11000}>
                    <div className="skill-boxarea">
                      <div className="icons">
                        <Image src={Skill13} alt="" /*className="Wordpress"*/ />
                      </div>
                      <div className="space16" />
                      <p>And Many More</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Skills
