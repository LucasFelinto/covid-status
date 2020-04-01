import React, { Component } from 'react';

import { Container, StatusBoxContaier, DateTime } from './styles';

import api from '../../services/api';

import StatusBox from '../StatusBox';

class StateStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: {},
      uf: '',
      date: ''
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.uf !== this.props.uf) {
      this.setState({
        uf: this.props.uf
      });

      this.getState(this.props.uf);
    }
  }

  async getState(uf) {
    const response = await api.get(`/brazil/uf/${uf}`);

    this.setState({
      state: response.data,
      date: new Date(response.data.datetime).toLocaleString('pt-BR', {
        timeZone: 'UTC'
      })
    });
  }

  async componentDidMount() {
    const uf = this.props.uf || 'PE';

    this.getState(uf);
  }

  render() {
    const { state, date } = this.state;

    return (
      <Container>
        <h2>{state.state}</h2>
        <StatusBoxContaier>
          <StatusBox
            value={state.cases}
            text="Casos ativos"
            color="#333"
            bgColor="#FFF"
          />
          <StatusBox
            value={state.refuses}
            text="Casos recuperados"
            color="#333"
            bgColor="#fff"
          />
          <StatusBox
            value={state.deaths}
            text="Casos Fatais"
            color="#333"
            bgColor="#fff"
          />
        </StatusBoxContaier>
        <DateTime>
          <p>Ultima atualização: {date}</p>
        </DateTime>
      </Container>
    );
  }
}

export default StateStatus;
