import React from 'react';

const filterProps = Component => keys => ({ children, ...props }) => {
    keys.map(key => delete props[key]);
    return React.createElement(Component, props);
};

export default filterProps;
