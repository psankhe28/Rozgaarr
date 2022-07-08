//This is WelcomePg page, It will contains all the sections require in this page.

//Import all the require sections here
import HeroSection from "../Sections/Hero/index";
import About from "../Sections/About/index";
import Services from "../Sections/Services/index";
import Testimonials from "../Sections/Testimonials/index";
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const WelcomePg = () => {
  return (
    <div>
    <Header/>
    <Container>
      <HeroSection />
      <About />
      <Services />
      <Testimonials />
    </Container>
    </div>
  );
};

export default WelcomePg;
