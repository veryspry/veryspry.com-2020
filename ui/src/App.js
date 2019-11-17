import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "styled-components";

import { Home, Projects } from "./views";
import DefaultRoute from "./default-route";

import GlobalStyles from "./styles/global";

import theme from "./theme";

const client = new AWSAppSyncClient({
  url: process.env.REACT_APP_AUTH_ENDPOINT,
  region: "us-east-2",
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: process.env.REACT_APP_API_KEY
  }
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Rehydrated>
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
        </Rehydrated>
      </ApolloProvider>
    );
  }
}

export default App;
