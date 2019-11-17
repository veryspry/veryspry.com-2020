import React, { Component } from "react";
import styled from "styled-components";
import { Flex, FooterText } from "../components";
import { height, width, minHeight } from "styled-system";
import axios from "axios";

const Form = styled.form`
  ${height};
  ${width};
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 3px;
  border: 1px solid lightgrey;
  ${height};
  ${width};
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  border-radius: 3px;
  border: 1px solid lightgrey;
  ${height};
  ${width};
  ${minHeight};
`;

const Button = styled.button`
  height: 60px;
  width: 200px;
  border-radius: 3px;
  border: 0px;
  background-color: #181e2f;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

const InputWrap = styled(Flex)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

class ContactForm extends Component {
  defaultFormState = {
    name: "",
    email: "",
    message: ""
  };

  state = {
    ...this.defaultFormState
  };

  _handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  _handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`/contact-form`, this.state)
      .then(res => {
        console.log("RES", res);
        this.setState({ ...this.defaultFormState });
      })
      .catch(err => {
        console.log("ERROR", err);
      });
  };

  render() {
    console.log(process.env.REACT_APP_API_URL);
    return (
      <Flex flexDirection="column" alignItems="center" my="70px">
        <Form width={["95vw", "80vw", "600px"]}>
          <InputWrap>
            <FooterText>Name:</FooterText>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this._handleChange}
            />
          </InputWrap>
          <InputWrap>
            <FooterText>Email:</FooterText>
            <Input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this._handleChange}
            />
          </InputWrap>
          <InputWrap>
            <FooterText>Message:</FooterText>
            <TextArea
              type="text"
              name="message"
              value={this.state.message}
              onChange={this._handleChange}
              height="300px"
              minHeight="300px"
            />
          </InputWrap>
          <InputWrap alignItems="flex-end">
            <Button type="submit" value="submit" onClick={this._handleSubmit}>
              <FooterText>Send</FooterText>
            </Button>
          </InputWrap>
        </Form>
      </Flex>
    );
  }
}

export default ContactForm;
