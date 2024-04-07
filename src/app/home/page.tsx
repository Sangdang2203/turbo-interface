import { Box, Button, Container, Grid, Link, Typography } from "@mui/material"
import { ArrowRightRounded } from '@mui/icons-material';
import logoTurbo from "../../../public/images/logoTurbo.png"
import Image from "next/image";

export const metadata = () => {
  return {
    title: "Home"
  }
}
export default function HomePage() {
  return (
    <>
      <Container>
        <Grid container my={1}>
          <Grid item xs={12} md={6} className="text-center">
            <h1 className="text-[2.5rem] font-serif" >Make what life needs next</h1>
            <p className="text-[1.25rem] font-extralight">We are a global innovation firm, imagining tomorrow’s products, services and businesses – and creating them today.</p>
            <Button
              href="/about-us" endIcon={<ArrowRightRounded fontSize="large" color="error" />}
              className="mt-4 hover:text-[#FFC72C] duration-500">Explore our sofeware & AI Solutions
            </Button>
          </Grid>
          <Grid item xs={12} md={6} className="">
            <Image src={logoTurbo} alt="" className="w-auto h-full float-end"></Image>
          </Grid>
        </Grid>

        <Typography className="text-center text-[4rem] font-serif leading-tight font-light my-10">We join forces with the world&apos;s most ambitious businesses.</Typography>
        <Grid container my={1}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography className="font-extralight text-lg my-2">Cutting through the noise to bring new perspectives. Backing up our big ideas with deep research. Leading with empathy and delivering on impact.</Typography>
              <Typography className="font-extralight text-lg my-2">As a global independent innovation firm, we deliver with speed, agility and an objective point of view.</Typography>
              <Typography className="font-extralight text-lg my-2">Learn more about how we are making what life needs next</Typography>
            </Box>

            <Button
              href="/about-us" endIcon={<ArrowRightRounded fontSize="large" color="error" />}
              className="mt-4 hover:text-[#FFC72C] duration-500">Explore our services
            </Button>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>

        <Typography className="text-center text-[4rem] font-serif leading-tight font-light my-10">Our services</Typography>

        <Grid container my={1}>
          <Grid item xs={12} md={4}>
            <Typography className="text-[1.5rem] pb-2">Make big moves</Typography>
            <p className="font-extralight">Strategic foresight Growth & innovation strategy Opportunity identification</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography className="text-[1.5rem] pb-2">Design new experiences</Typography>
            <p className="font-extralight">Product & service design Behavioral validation CX and digital design</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography className="text-[1.5rem] pb-2">Launch new bussinesses</Typography>
            <p className="font-extralight">Business model development Go-to-market activation Venture building</p>
          </Grid>

          <Button
            href="/about-us" endIcon={<ArrowRightRounded fontSize="large" color="error" />}
            className="mt-4 hover:text-[#FFC72C] duration-500">Explore our services
          </Button>
        </Grid>

      </Container >
    </>
  )
}
