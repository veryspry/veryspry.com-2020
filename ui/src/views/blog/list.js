import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import dayjs from "dayjs";

import {
  Loading,
  Error,
  Flex,
  Box,
  TimelineText,
  TimelineDate,
  BodyHome,
  FooterText
} from "../../components";

const listSummaries = gql`
  {
    listSummaries {
      items {
        id
        summary
        coffee {
          id
          name
          country
          roaster
          varietal
          processType
        }
        music {
          id
          album
          artist
          song
        }
        displayDate
      }
    }
  }
`;

const BlogList = props => {
  return (
    <Query query={listSummaries}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) {
          console.log(error);
          return <Error />;
        }
        const {
          listSummaries: { items }
        } = data;
        return (
          <Flex justifyContent="spaceBetween" alignItems="center" py="60px">
            <Flex
              textAlign="center"
              width={["95vw", "80vw", "800px"]}
              zIndex="4000"
            >
              <Box mb="26px">
                <BodyHome fontSize={["2rem", "2.5rem", "2.5rem"]}>
                  Below you'll find a record of what I've been working on,
                  thinking about, coffee I've been drinking and music I've been
                  listening to.
                </BodyHome>
              </Box>
              <Box mb="26px">
                <FooterText fontSize={["1.2rem", "1.4rem", "1.4rem"]}>
                  <span role="img" aria-label="coffee-emoji">
                    ☕{" "}
                  </span>
                  Denotes coffee I drank that day
                </FooterText>
              </Box>
              <Box mb="26px">
                <FooterText fontSize={["1.2rem", "1.4rem", "1.4rem"]}>
                  <span role="img" aria-label="coffee-emoji">
                    🎶{" "}
                  </span>
                  Denotes music I've listened to on a given day
                </FooterText>
              </Box>
            </Flex>

            {items.map(
              ({ id, summary, coffee, music, resources, displayDate }) => {
                return (
                  <Flex key={id} alignItems="center" zIndex="4000">
                    <Flex
                      width={["80vw", "80vw", "600px"]}
                      border="1px solid lightgrey"
                      borderRadius="7px"
                      bg="#fafafa"
                      textAlign="center"
                      p="20px"
                    >
                      <Flex textAlign="right" mb="20px">
                        <TimelineDate fontSize={["0.8rem", "0.9rem", "0.9rem"]}>
                          {dayjs(displayDate).format("DD, MMMM YYYY")}
                        </TimelineDate>
                      </Flex>
                      <Flex mb="20px">
                        <TimelineText fontSize={["1rem", "1.2rem", "1.2rem"]}>
                          {summary}
                        </TimelineText>
                      </Flex>
                      {coffee.map(
                        ({
                          id: coffeeID,
                          name,
                          country,
                          roaster,
                          varietal,
                          processType,
                          created
                        }) => {
                          return (
                            <Flex mb="20px" key={coffeeID}>
                              <TimelineText
                                key={coffeeID}
                                fontSize={["1rem", "1.2rem", "1.2rem"]}
                              >
                                <span role="img" aria-label="coffee-emoji">
                                  ☕{" "}
                                </span>
                                {country} {name} from {roaster}
                                <span role="img" aria-label="coffee-emoji">
                                  {" "}
                                  ☕
                                </span>
                              </TimelineText>
                            </Flex>
                          );
                        }
                      )}
                      {music.map(({ id: musicID, album, artist, song }) => {
                        const title = album ? album : song;
                        return (
                          <TimelineText
                            key={musicID}
                            fontSize={["1rem", "1.2rem", "1.2rem"]}
                          >
                            <span role="img" aria-label="coffee-emoji">
                              🎶{" "}
                            </span>
                            {title} by {artist}
                            <span role="img" aria-label="coffee-emoji">
                              {" "}
                              🎶
                            </span>
                          </TimelineText>
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
                );
              }
            )}
          </Flex>
        );
      }}
    </Query>
  );
};

export default BlogList;
