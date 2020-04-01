import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#272727')};
  padding: 1.5rem 15rem 2rem 1.5rem;
  border-radius: 2rem;
  color: ${(props) => (props.color ? props.color : '#FFF')};

  h1 {
    font-size: 1.4rem;
  }

  span {
    font-size: 4rem;
  }
`;
