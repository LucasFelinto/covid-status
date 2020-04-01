import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, UfList, Creator } from './styles';

import logoImg from '../../assets/logo.svg';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      states: []
    };
  }

  async componentDidMount() {
    const response = await api.get();

    this.setState({
      states: response.data.data
    });
  }

  render() {
    const { states } = this.state;

    return (
      <Container>
        <div>
          <img src={logoImg} alt="Logo" />
          <h1>Covid Status</h1>
        </div>

        <div>
          <h2>Estados</h2>
        </div>

        <UfList>
          {states.map((state) => (
            <li key={state.uid}>
              <Link to={`/${state.uf}`}>{state.state}</Link>
            </li>
          ))}
        </UfList>

        <Creator>
          <p>
            feito com <span>❤</span>
          </p>
          <p>
            <a href="https://github.com/LucasFelinto">Lucas Felinto</a>
          </p>
        </Creator>
      </Container>
    );
  }
}
