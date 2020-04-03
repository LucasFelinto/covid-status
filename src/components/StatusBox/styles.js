import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => (props.color ? props.color : '#FFF')};
  border-radius: 2rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  padding-top: 1.8rem;

  h1 {
    font-weight: lighter;
    font-size: 1.8rem;
  }

  span {
    font-weight: bold;
    font-size: 5rem;
  }
`;
