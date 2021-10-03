import React from 'react';
import "./Home.css";
import { useQuery } from '@apollo/client';
import RepoCard from '../repoCard/RepoCard';
import { PacmanLoader } from 'react-spinners';
import { loaderCss, QUERY_LIST_OF_MOST_STARED_REPO } from '../../constants';

const Home = () => {

  //Fetching Data from Github GraphQl API
  const { data, loading, error } = useQuery(QUERY_LIST_OF_MOST_STARED_REPO);
  const listRepo = data && data.search.edges && data.search.edges.map(({ node }, key) => {
    const { repositoryName, repositoryOwner, repositoryDescription, numberOfStars, numberOfIssues, pushedAt } = node;
    return (
      //Parse the each repo data to RepoCard component
      <div key={key}>
        <RepoCard repositoryName={repositoryName}
          repositoryOwner={repositoryOwner}
          repositoryDescription={repositoryDescription}
          numberOfStars={numberOfStars}
          numberOfIssues={numberOfIssues}
          updatedAt={pushedAt} />
      </div>
    )
  })
  return (
    <div className="home">
      {loading &&
        <>
          {/* Providing Loder for clarity until data get fetched */}
          <h1>Hi Welcome to Github Stargazers !</h1>
          <h2>Please wait here for an moment.</h2>
          <h3>Data is Fetching...</h3>
          <PacmanLoader
            size={50}
            color="green"
            loading
            css={loaderCss}
            speedMultiplier="1"
          />
        </>
      }
      {error && <h3>{error.message}</h3>}
      {data && data.search.edges && <h1>List of Most Stared JavaScript Repos in Github</h1>}
      {/* Displaying Repository Data  */}
      <div>{listRepo && listRepo}</div>
    </div>
  )
}

export default Home;
