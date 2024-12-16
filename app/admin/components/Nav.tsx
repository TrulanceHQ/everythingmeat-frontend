'use client'

import { Navbar } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// type Props = {}

const Nav = () => {
  return (
    <div>
          <Navbar fluid rounded>
            <Navbar.Brand as={Link} href="/everything_meat_logo.png">
              <Image
                src="/everything_meat_logo.png"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite React Logo"
                width={50}
                height={100}
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Everything Meat
              </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Navbar.Link href="#" active>
                Home
              </Navbar.Link>
              <Navbar.Link as={Link} href="#">
                About
              </Navbar.Link>
              <Navbar.Link href="#">Services</Navbar.Link>
              <Navbar.Link href="#">Pricing</Navbar.Link>
              <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
        </div>
  )
}

export default Nav