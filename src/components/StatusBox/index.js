import React from 'react';

import { Container } from './styles';

export default function StatusBox({ text, value, color, bgColor }) {
  return (
    <Container bgColor={bgColor} color={color}>
      <h1>{text}</h1>
      <span>{value}</span>
    </Container>
  );
}
