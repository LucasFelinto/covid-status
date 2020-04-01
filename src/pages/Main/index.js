import React, { Component } from 'react';

import Navigation from '../../components/Navigation';
import StatusBox from '../../components/StatusBox';
import StateStatus from '../../components/StateStatus';

import api from '../../services/api';

import { StatusBoxContaier, StateStatusContainer, Container } from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brazilCases: {}
    };
  }

  async componentDidMount() {
    const response = await api.get('brazil');
    // console.log(this.props.match.params.uf);

    this.setState({
      brazilCases: {
        cases: response.data.data.cases.toLocaleString(),
        recovered: response.data.data.recovered.toLocaleString(),
        deaths: response.data.data.deaths.toLocaleString()
      }
    });
  }

  render() {
    const { brazilCases } = this.state;

    return (
      <>
        <Navigation />
        <Container>
          <StatusBoxContaier>
            <StatusBox
              text="Casos ativos no Brazil"
              value={brazilCases.cases}
            />
            <StatusBox text="Casos recuperados" value={brazilCases.recovered} />
            <StatusBox text="Casos fatais" value={brazilCases.deaths} />
          </StatusBoxContaier>

          <StateStatusContainer>
            <StateStatus uf={this.props.match.params.uf} />
          </StateStatusContainer>
        </Container>
      </>
    );
  }
}
