import React from "react";

import { Flex, BodyHome, StyledAnchor } from "../components";

const Home = props => {
  const sections = [
    {
      text:
        "Hi, I’m Matt! I am a Software Engineer with a keen eye for design and a knack for creativity. I used to be a professional musician but realized that I really loved taking on the daily challenges that coding presents."
    },
    {
      text:
        "As a musician, I learned that creating something shouldn’t be hindered by what you have to work with. I embrace the tools at hand and work to design and build something beautiful. I work in Node, Express, GraphQl, AWS, Postgres, React, React-Native, mocha.js, chai.js, plain old JavaScript & CSS. (The list continues to grow.) I’m also a songwriter and music theory nerd. (Guitar & pedal steel if you're interested.)"
    }
  ];

  return (
    <Flex width="100%" alignItems="center" mt="50px" mb="50px">
      <Flex width={["80vw", "80vw", "700px"]}>
        {sections.map(({ text }, i) => {
          return (
            <Flex key={i} mb="26px">
              <BodyHome
                color="bluePurple"
                fontSize={["1.5rem", "2rem", "2.5rem"]}
                zIndex="4000"
              >
                {text}
              </BodyHome>
            </Flex>
          );
        })}
        <Flex>
          <BodyHome
            color="bluePurple"
            fontSize={["1.5rem", "2rem", "2.5rem"]}
            zIndex="4000"
          >
            I'd love to hear from you! Send me an{" "}
            <StyledAnchor color="link" href="mailto:ehlinger.matt@gmail.com">
              email
            </StyledAnchor>{" "}
            and lets chat.
          </BodyHome>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
