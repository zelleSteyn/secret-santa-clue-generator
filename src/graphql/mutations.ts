/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createClue = /* GraphQL */ `mutation CreateClue(
  $input: CreateClueInput!
  $condition: ModelClueConditionInput
) {
  createClue(input: $input, condition: $condition) {
    id
    drawnName
    clue
    santaId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateClueMutationVariables,
  APITypes.CreateClueMutation
>;
export const updateClue = /* GraphQL */ `mutation UpdateClue(
  $input: UpdateClueInput!
  $condition: ModelClueConditionInput
) {
  updateClue(input: $input, condition: $condition) {
    id
    drawnName
    clue
    santaId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateClueMutationVariables,
  APITypes.UpdateClueMutation
>;
export const deleteClue = /* GraphQL */ `mutation DeleteClue(
  $input: DeleteClueInput!
  $condition: ModelClueConditionInput
) {
  deleteClue(input: $input, condition: $condition) {
    id
    drawnName
    clue
    santaId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteClueMutationVariables,
  APITypes.DeleteClueMutation
>;
