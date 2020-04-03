import React, { Component } from 'react';
// import { useHistory } from 'react-router-dom';

import Navigation from '../../components/Navigation';
import StatusBox from '../../components/StatusBox';
import StateStatus from '../../components/StateStatus';

import api from '../../services/api';

import {
  StatusBoxContaier,
  SearchContainer,
  Container,
  StateStatusContaier,
  NavigationContainer,
} from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brazilCases: {},
      uf: 'asdas',
      param: '',
      states: [],
    };
  }

  componentDidUpdate(prevPros, preState) {
    if (prevPros.match.params.uf !== this.props.match.params.uf) {
      this.getApi(this.props.match.params.uf);
    }
  }

  async componentDidMount() {
    console.log(this.props);

    const { match } = this.props;

    const [brazil, states] = await Promise.all([api.get('brazil'), api.get()]);

    this.setState({
      brazilCases: {
        cases: brazil.data.data.cases.toLocaleString(),
        recovered: brazil.data.data.recovered.toLocaleString(),
        deaths: brazil.data.data.deaths.toLocaleString(),
      },
      states: states.data.data,
    });

    this.getApi(match.params.uf);
    console.log(this.state.states);
  }

  async getApi(uf = 'PE') {
    const response = await api.get(`brazil/uf/${uf}`);

    console.log(response);
    this.setState({
      uf: response.data,
    });
  }

  handleInput = (event) => {
    event.persist();
    this.props.history.push(event.target.value);
  };

  render() {
    const { brazilCases, uf, states } = this.state;

    return (
      <Container>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
        <StatusBoxContaier>
          <StatusBox
            text="Ativos"
            value={brazilCases.cases}
            bgColor="#F2F2F2"
            color="#333333"
          />

          <StatusBox
            text="Recuperados"
            value={brazilCases.recovered}
            bgColor="#27AE60"
          />
          <StatusBox
            text="Fatais"
            value={brazilCases.deaths}
            bgColor="#EB5757"
          />
        </StatusBoxContaier>

        <SearchContainer>
          <select name="" id="" onChange={this.handleInput}>
            <option value="">Pesquisar por estados</option>
            {states.map((state) => (
              <option key={state.uid} value={state.uf}>
                {state.state}
              </option>
            ))}
          </select>
          <h2>{uf.state}</h2>
        </SearchContainer>

        <StateStatusContaier>
          <StateStatus text="Casos" value={uf.cases} />
          <StateStatus text="Recuperados" value={uf.refuses} />
          <StateStatus text="Fatais" value={uf.deaths} />
        </StateStatusContaier>
      </Container>
    );
  }
}
