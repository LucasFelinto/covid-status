import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 200px 50px 300px;
  grid-row-gap: 2rem;

  @media (max-width: 812px) {
    grid-template-columns: auto;
    grid-row-gap: 1.5rem;
    grid-template-rows: 1fr 15rem 1fr;
  }
`;

export const NavigationContainer = styled.div`
  grid-row: 1 / 4;

  @media (max-width: 812px) {
    display: none;
  }
`;

export const StatusBoxContaier = styled.div`
  display: grid;
  position: relative;

  grid-column: 2 / 4;
  grid-template-columns: repeat(3, 20rem);
  justify-self: center;

  height: 15rem;
  grid-gap: 2rem;

  &::before {
    content: 'Casos no Brazil';
    position: absolute;
    font-size: 1.8rem;
    top: -30px;
    margin-left: 2.5rem;
  }

  @media (max-width: 812px) {
    grid-template-columns: repeat(2, 1fr);
    justify-self: stretch;
    grid-column: auto;
    grid-gap: 1.5rem 1rem;

    & div:last-child {
      grid-column: 1/3;
    }

    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

export const SearchContainer = styled.div`
  select {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    border: none;
    background-color: #fff;
    width: 27rem;
    height: 3.8rem;
    border-radius: 2rem;
    margin: 0 auto;
    display: block;
    margin-top: 2rem;
    display: none;
  }

  grid-column: 2 / 4;
  justify-self: center;

  h2 {
    font-size: 5rem;
  }

  @media (max-width: 812px) {
    grid-column: auto;

    select {
      display: block;
    }

    h2 {
      text-align: center;
      margin-top: 3rem;
    }

    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

export const StateStatusContaier = styled.div`
  background-color: #fff;
  border-radius: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 5rem;
  padding-bottom: 5rem;

  grid-column: 2 / 4;

  div {
    padding-top: 2.5rem;
    padding-bottom: 1.5rem;
  }

  div:not(:last-child) {
    border-bottom: 1px solid #dbd4d4;
  }

  @media (max-width: 812px) {
    grid-column: auto;
    border-radius: 2rem 2rem 0 0;
  }
`;
