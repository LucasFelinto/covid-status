import styled from 'styled-components';

export const Container = styled.div`
  background-color: #4f4f4f;
  border-radius: 2rem;
  width: 110%;
  height: 100%;
  position: relative;

  h2 {
    font-size: 7.2rem;
    padding: 1.6rem 0 0 3.5rem;
  }
`;

export const StatusBoxContaier = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 3.5rem;
  margin-top: 2.5rem;

  & div:not(:first-child) {
    margin-left: 2rem;
  }
`;

export const DateTime = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 2rem;

  font-size: 2rem;
`;
