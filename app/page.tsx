'use client'
import Navbar from "@/components/header/Navbar"
import TopContainer from "@/components/topcontainer/TopContainer"
import Features from "@/components/features/Features"
import CTA from "@/components/cta/CTA"
import Highlights from "@/components/highlights/Highlights"
import {Box} from "@chakra-ui/react"

export default function Home() {
  return (
    <>
    {/* <Heading> Wrapped in Chkra</Heading> */}
    <Navbar/>
    <Box as="main">
      <TopContainer/>
      <Features />
      <CTA />
      <Highlights/>
      
    </Box>

    </>

  )

}
