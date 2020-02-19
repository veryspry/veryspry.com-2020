import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Home, Projects } from './views';
import DefaultRoute from './default-route';

import GlobalStyles from './styles/global';

import theme from './theme';

const hello = 'yeas';

const App = props => (
    <Fragment>
        {/* Global Style reset */}
        <GlobalStyles />
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <div>
                    <DefaultRoute exact path="/" component={Home} />
                    <DefaultRoute exact path="/projects" component={Projects} />
                </div>
            </BrowserRouter>
        </ThemeProvider>
    </Fragment>
);

export default App;
