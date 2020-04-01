import styled from 'styled-components';

export const Container = styled.div`
  float: left;
  margin-left: 4rem;
  height: 70%;
`;

export const StatusBoxContaier = styled.div`
  display: flex;
  clear: right;

  & div:not(:first-child) {
    margin-left: 2rem;
  }
`;

export const StateStatusContainer = styled.div`
  margin-top: 4rem;
  height: 100%;
`;
