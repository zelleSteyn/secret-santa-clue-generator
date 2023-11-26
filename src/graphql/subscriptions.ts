/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateClue = /* GraphQL */ `subscription OnCreateClue($filter: ModelSubscriptionClueFilterInput) {
  onCreateClue(filter: $filter) {
    id
    drawnName
    clue
    santaId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateClueSubscriptionVariables,
  APITypes.OnCreateClueSubscription
>;
export const onUpdateClue = /* GraphQL */ `subscription OnUpdateClue($filter: ModelSubscriptionClueFilterInput) {
  onUpdateClue(filter: $filter) {
    id
    drawnName
    clue
    santaId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateClueSubscriptionVariables,
  APITypes.OnUpdateClueSubscription
>;
export const onDeleteClue = /* GraphQL */ `subscription OnDeleteClue($filter: ModelSubscriptionClueFilterInput) {
  onDeleteClue(filter: $filter) {
    id
    drawnName
    clue
    santaId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteClueSubscriptionVariables,
  APITypes.OnDeleteClueSubscription
>;
