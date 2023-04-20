import React from "react";
import { styled } from "frontity";

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
`;

const Title = styled.h1`
  margin: 10px;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
  color: red;
`;
export function HomePage() {
  return (
    <Container>
      <Title>Welcome to try this one</Title>
    </Container>
  );
}
