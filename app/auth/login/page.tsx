'use client'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import logo from "../../../public/images/svg/loginLogo.svg"
import CommonButton from '@/app/components/common/CommonButton'
import CommonSelect from '@/app/components/common/CommonSelect'
import CommonInput from '@/app/components/common/CommonInput'
import Link from 'next/link'

const page = () => {
  return (
    <div className='bg_darkTheme py-5 min-vh-100 d-flex align-items-center'>
      <Container>
        <Row className='justify-content-center' >
            <Col md={10}>
            <Row className='justify-content-between align-items-center'>
          <Col md={4} className='text-center d-md-block d-none mb-4 mb-md-0'>
            <Image src={logo} width={180} height={152} alt="Jhpiego Logo" />
          </Col>

          <Col md={6}>
            <div className="login-card bg-white rounded-3 shadow-sm p-4">
              <h4 className='text-center fs-4 fw-bold text-dark mb-1'>Welcome Back</h4>
              <p className='text-center text-muted mb-4'>Please Log in to continue</p>

              <Form>
                 <CommonSelect
    label="Log in as"
    options={["HR", "Employees"]}
    placeholder = "Select your role"
    // value={} onChange={} optional
  />

               <CommonInput
    label="Email Address"
    type="email"
    placeholder="Enter email address"
  />

  <CommonInput
    label="Password"
    type="password"
    placeholder="Enter password"
  />


                <div className='text-end'>
                    <a href='#' style={{textDecoration:"none"}} className='fs_14 fw-normal clr_theme  d-inline-block'>Forgot Password?</a>
                  </div>
                <div className='d-flex justify-content-center mt-4 mb-4'>
                 <Link style={{textDecoration:"none"}} href={"/dashboard"}> <CommonButton
        text="Log in"
        color="#fff"
        width="172px"
        height="40px"
        fontSize="14px"
        fontWeight="700"
        backgroundColor="#00bcd4"
        // onClick={() => alert('Logged in!')}
      /></Link>
                </div>
              </Form>

              <p className='text-center fs_14 fw-normal clr_theme mb-0'>
                © 2025 Company Co. - All rights reserved
              </p>
            </div>
          </Col>
        </Row></Col>
        </Row>
      </Container>
    </div>
  )
}

export default page
