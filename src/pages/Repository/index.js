import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import api from '../../services/github-api';
import Container from '../../components/Container';
import {
  Loading,
  Owner,
  IssueList,
  Select,
  Pagination,
  Back,
  Foward,
  Page,
} from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    status: 'all',
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);
    const { status, page } = this.state;

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: status,
          per_page: 5,
          page,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  componentDidUpdate(_, prevState) {
    const { issues } = this.state;

    if (prevState.issues !== issues) {
      this.componentDidMount();
    }
  }

  // function cha(move) {
  //   const { page } = await this.state;
  //   this.setState({ page: page + move });
  // };

  changePage = async move => {
    const { page } = await this.state;
    this.setState({ page: page + move });
  };

  repositoryFilter = async e => {
    const status = await e.target.value;

    this.setState({ status });
  };

  render() {
    const { repository, issues, loading, page } = this.state;

    if (loading) {
      return <Loading>Loading</Loading>;
    }
    return (
      <Container>
        <Owner>
          <Link to="/">Volta aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssueList>
          <Select defaultValue="all" onChange={this.repositoryFilter}>
            <option value="all">Todos</option>
            <option value="open">Aberto</option>
            <option value="closed">Fechado</option>
          </Select>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
              </div>
              <p>{issue.user.login}</p>
            </li>
          ))}
        </IssueList>
        <Pagination>
          <Back page={page} onClick={() => this.changePage(-1)}>
            <MdNavigateBefore color="#000000" size={14} />
          </Back>
          <Page>{page}</Page>
          <Foward onClick={() => this.changePage(1)}>
            <MdNavigateNext color="#000000" size={14} />
          </Foward>
        </Pagination>
      </Container>
    );
  }
}
