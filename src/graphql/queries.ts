/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getClue = /* GraphQL */ `query GetClue($id: ID!) {
  getClue(id: $id) {
    id
    drawnName
    clue
    santaId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetClueQueryVariables, APITypes.GetClueQuery>;
export const suggestClue = /* GraphQL */ `query SuggestClue($aboutMe: String!, $clueFormat: String!) {
  suggestClue(aboutMe: $aboutMe, clueFormat: $clueFormat)
}
` as GeneratedQuery<
  APITypes.SuggestClueQueryVariables,
  APITypes.SuggestClueQuery
>;
export const listClues = /* GraphQL */ `query ListClues(
  $filter: ModelClueFilterInput
  $limit: Int
  $nextToken: String
) {
  listClues(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      drawnName
      clue
      santaId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListCluesQueryVariables, APITypes.ListCluesQuery>;
