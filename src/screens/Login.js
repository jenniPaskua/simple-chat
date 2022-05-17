import React, { useState } from "react";
import styled from "styled-components/native";
import { Button } from "react-native";
import { Image, Input } from "../components";
import { images } from "../utils/images";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 20px;
`;

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Image url={images.icon} />
      <Input
        label='Email'
        value={email}
        onChangeText={(text) => setEmail(text)}
        onSubmitEditing={() => {}}
        placeholder='Email'
        returnKeyType='next'
      />
      <Input
        label='Password'
        value={password}
        onChangeText={(text) => setPassword(text)}
        onSubmitEditing={() => {}}
        placeholder='Password'
        returnKeyType='done'
        isPassword
      />
    </Container>
  );
};

export default Login;
