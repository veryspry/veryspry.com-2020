import React from "react";
import ReactPlayer from "react-player";

import {
  Loading,
  Error,
  Flex,
  Box,
  TimelineText,
  TimelineDate,
  BodyHome,
  FooterText,
  StyledAnchor
} from "../components";

const projectList = [
  {
    title: "Go Chat",
    description:
      "Go chat is a Facebook Messenger clone. It has a Go (Golang) server, React UI, and Postgres database.",
    sourceCode: [
      {
        description: "Server code",
        url: "https://github.com/veryspry/go-chat"
      },
      {
        description: "UI code",
        url: "https://github.com/veryspry/js-chat"
      },
      {
        description: "Live demo",
        url: "https://verysprys-chat-ui.herokuapp.com"
      }
    ],
    videoURL: "https://youtu.be/fMsScW4w77w"
  },
  {
    title: "Evence",
    description:
      "Evence is an event curation service that uses information about you from your LinkedIn profile to find relevant, high quality Meetups in your area. We built the app in React Native and Node and used GraphQL, Apollo and Postgres to manage data. In order to sift through user information, we built a parser so that we could find useful, relevant words to query Meetup's api to deliver events to a user.",
    sourceCode: [
      {
        description: "Server code",
        url: "https://github.com/JEM-Capstone/Evence_server"
      },
      {
        description: "UI code",
        url: "https://github.com/JEM-Capstone/evenceUI"
      }
    ],
    videoURL: "https://youtu.be/B7OTSDAX0bE"
  },
  {
    title: "Remote Teacher",
    description:
      'Remote teacher is an app that helps teachers connect with students with video & audio chat, a "whiteboard" component and an embedded music player. It\'s built with React, Redux, Node, WebRTC, Websocket.io and Postgres.',
    sourceCode: [
      {
        description: "Source",
        url: "https://github.com/veryspry/remote-teacher"
      }
    ],
    videoURL: "https://youtu.be/Qf3riTYHY5Y"
  }
];

const Projects = props => {
  return (
    <Flex justifyContent="spaceBetween" alignItems="center" py="60px">
      <Flex textAlign="center" width={["95vw", "80vw", "800px"]} zIndex="1000">
        <Box mb="26px">
          <BodyHome fontSize={["2rem", "2.5rem", "2.5rem"]}>
            Here are some projects I've worked on. Most of these are just side
            projects. If you want to hear about some of the other things I've
            worked on, get in touch!
          </BodyHome>
        </Box>
      </Flex>

      {projectList.map(({ title, description, sourceCode, videoURL }) => {
        return (
          <Flex alignItems="center" zIndex="1000" mb="100px">
            <Flex alignItems="center" zIndex="1000">
              <Flex
                width={["80vw", "80vw", "600px"]}
                border="1px solid lightgrey"
                borderRadius="7px"
                bg="#fafafa"
                textAlign="center"
                p="20px"
              >
                <Flex mb="20px">
                  <TimelineText fontSize={["1.5rem", "1.7rem", "1.7rem"]}>
                    {title}
                  </TimelineText>
                </Flex>

                <Flex mb="20px" textAlign="left">
                  <TimelineText fontSize={["1rem", "1.2rem", "1.2rem"]}>
                    {description}
                  </TimelineText>
                </Flex>
                {sourceCode.map(({ description, url }) => {
                  return (
                    <Flex mb="20px" textAlign="left">
                      <TimelineText fontSize={["1rem", "1.2rem", "1.2rem"]}>
                        {description}:{" "}
                        <StyledAnchor
                          color="link"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={url}
                        >
                          {url}
                        </StyledAnchor>
                      </TimelineText>
                    </Flex>
                  );
                })}
              </Flex>
              <Flex
                my="5px"
                bg="#fafafa"
                border="1px solid lightgrey"
                height="70px"
                width="0px"
                borderRadius="7px"
              />
            </Flex>
            <Flex
              width={["80vw", "80vw", "608px"]}
              height={["45vw", "45vw", "342px"]}
              alignItems="center"
              zIndex="1000"
            >
              <ReactPlayer url={videoURL} controls width="100%" height="100%" />
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Projects;
