import React from 'react';
import { Flex, BodyHome } from 'components';

const Error = ({ errorMessage }) => (
    <Flex justifyContent="center" alignItems="center" height="60vh">
        <BodyHome>{errorMessage}</BodyHome>
    </Flex>
);

Error.defaultProps = {
    errorMessage: 'Sorry, there was a Error.',
};

export default Error;
