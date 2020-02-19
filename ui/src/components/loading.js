import React from 'react';
import { Flex, BodyHome } from 'components';

const Loading = ({ loadingMessage }) => (
    <Flex justifyContent="center" alignItems="center" height="60vh">
        <BodyHome>{loadingMessage}</BodyHome>
    </Flex>
);

Loading.defaultProps = {
    loadingMessage: 'Loading...',
};

export default Loading;
