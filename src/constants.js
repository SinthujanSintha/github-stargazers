import {gql} from '@apollo/client';
import { css } from "@emotion/react";

 export const QUERY_LIST_OF_MOST_STARED_REPO = gql`
 { search(query: "language:JavaScript", type: REPOSITORY, first:50) {
       repositoryCount
       edges {
         node {
           ... on Repository {
             pushedAt
             repositoryName: name
             repositoryDescription: description
             numberOfStars:stargazerCount
             numberOfIssues:issues{totalCount}
             repositoryOwner:owner {
              avatarUrl
              name:login
             }
             stargazers(orderBy: {field: STARRED_AT, direction: DESC}) {
               totalCount
             }
           }
         }
       }
     }
   }
 `;

export const GITHUB_GRAPH_QL_DATA={
TOKEN:'Bearer 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', //The token can be only used for Reading public data in Github.
GITHUB_GRAPH_QL_API:'https://api.github.com/graphql', // The Github graph ql api
};

 export const loaderCss=css`
 position: absolute;
 top: 50%;
 left: 50%;
 margin: -25px 0 0 -25px; 
`;