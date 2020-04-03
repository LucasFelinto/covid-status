import styled from 'styled-components';

export const Container = styled.nav`
  font-weight: 600;
  height: 100%;
  display: flex;
  float: left;

  flex-direction: column;

  div {
    display: flex;
    align-items: center;

    h1 {
      margin-left: 1rem;
      font-size: 1.7rem;
    }
  }

  h2 {
    background-color: #ffd16b;
    color: #000;
    font-size: 1.3rem;
    padding: 0.4rem 3rem 0.4rem 1rem;
    border-radius: 25px;
    margin-top: 3rem;
    display: inline-block;
    margin-bottom: 1.5rem;
  }
`;

export const UfList = styled.ul`
  height: 300px;
  margin-left: 1.6rem;

  li {
    font-size: 1.3rem;

    a {
      color: #fff;
    }
  }

  li:not(:first-child) {
    margin-top: 2rem;
  }

  height: 50%;
  overflow-y: scroll;

  @media (max-width: 812px) {
    margin-left: 0;
  }
`;

export const Creator = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  justify-content: flex-end;

  p {
    align-self: flex-start;
    font-size: 1.6rem;

    a {
      color: #fff;
      text-decoration: underline;
    }

    span {
      color: red;
    }
  }
`;
