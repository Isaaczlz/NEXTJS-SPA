import React from 'react'
import { Container } from 'semantic-ui-react'
import * as i from "index"
import Navbar from '@components/NavBar/NavBar'
import Footer from '@components/Footer/Footer'


const Layout = ({ children }: i.Props) => (
  <>
    <Navbar />
    <Container as="main" text>
      {children}
    </Container>
    <Footer />
  </>
)

export default Layout