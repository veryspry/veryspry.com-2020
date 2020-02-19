import React from 'react';
import ReactPlayer from 'react-player';

import {
    Loading,
    Error,
    Flex,
    Box,
    TimelineText,
    BodyHome,
    StyledAnchor,
} from 'components';

import projectList from './projectList';

class Projects extends React.Component {
    constructor(props) {
        super(props);

        const projects = projectList
            .map((project, i) => {
                project.id = String(i);
                return project;
            })
            .reduce((projects, project) => {
                projects[project.id] = {
                    loading: true,
                    error: false,
                };
                return projects;
            }, {});

        this.state = {
            ...projects,
        };
    }

    handleMediaReady = id => () =>
        this.setState({
            [id]: {
                ...this.state[id],
                loading: false,
            },
        });

    handleMediaError = id => () =>
        this.setState({
            [id]: {
                ...this.state[id],
                error: true,
            },
        });

    render() {
        return (
            <Flex justifyContent="spaceBetween" alignItems="center" py="60px">
                <Flex
                    textAlign="center"
                    width={['95vw', '80vw', '800px']}
                    zIndex="1000"
                >
                    <Box mb="26px">
                        <BodyHome fontSize={['2rem', '2.5rem', '2.5rem']}>
                            Here are some projects I've worked on. Most of these
                            are just side projects. If you want to hear about
                            some of the other things I've worked on, get in
                            touch!
                        </BodyHome>
                    </Box>
                </Flex>

                {projectList.map(
                    ({ title, description, sourceCode, videoURL, id }) => {
                        const { loading, error } = this.state[id];
                        return (
                            <Flex
                                alignItems="center"
                                zIndex="1000"
                                mb="100px"
                                key={title}
                            >
                                <Flex alignItems="center" zIndex="1000">
                                    <Flex
                                        width={['80vw', '80vw', '600px']}
                                        border="1px solid lightgrey"
                                        borderRadius="7px"
                                        bg="#fafafa"
                                        textAlign="center"
                                        p="20px"
                                    >
                                        <Flex mb="20px">
                                            <TimelineText
                                                fontSize={[
                                                    '1.5rem',
                                                    '1.7rem',
                                                    '1.7rem',
                                                ]}
                                            >
                                                {title}
                                            </TimelineText>
                                        </Flex>

                                        <Flex mb="20px" textAlign="left">
                                            <TimelineText
                                                fontSize={[
                                                    '1rem',
                                                    '1.2rem',
                                                    '1.2rem',
                                                ]}
                                            >
                                                {description}
                                            </TimelineText>
                                        </Flex>
                                        {sourceCode.map(
                                            ({ description, url }) => {
                                                return (
                                                    <Flex
                                                        mb="20px"
                                                        textAlign="left"
                                                        key={url}
                                                    >
                                                        <TimelineText
                                                            fontSize={[
                                                                '1rem',
                                                                '1.2rem',
                                                                '1.2rem',
                                                            ]}
                                                        >
                                                            {description}:{' '}
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
                                            }
                                        )}
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
                                    width={['80vw', '80vw', '608px']}
                                    height={['45vw', '45vw', '342px']}
                                    alignItems="center"
                                    zIndex="1000"
                                >
                                    {loading && <Loading />}
                                    {error ? (
                                        <Error errorMessage="Error playing video." />
                                    ) : (
                                        <ReactPlayer
                                            url={videoURL}
                                            controls
                                            width="100%"
                                            height={loading ? '0%' : '100%'}
                                            onReady={this.handleMediaReady(id)}
                                            onError={this.handleMediaError(id)}
                                        />
                                    )}
                                </Flex>
                            </Flex>
                        );
                    }
                )}
            </Flex>
        );
    }
}

export default Projects;
