/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateClueInput = {
  id?: string | null,
  drawnName?: string | null,
  clue?: string | null,
  santaId?: string | null,
};

export type ModelClueConditionInput = {
  drawnName?: ModelStringInput | null,
  clue?: ModelStringInput | null,
  santaId?: ModelStringInput | null,
  and?: Array< ModelClueConditionInput | null > | null,
  or?: Array< ModelClueConditionInput | null > | null,
  not?: ModelClueConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Clue = {
  __typename: "Clue",
  id: string,
  drawnName?: string | null,
  clue?: string | null,
  santaId?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateClueInput = {
  id: string,
  drawnName?: string | null,
  clue?: string | null,
  santaId?: string | null,
};

export type DeleteClueInput = {
  id: string,
};

export type ModelClueFilterInput = {
  id?: ModelIDInput | null,
  drawnName?: ModelStringInput | null,
  clue?: ModelStringInput | null,
  santaId?: ModelStringInput | null,
  and?: Array< ModelClueFilterInput | null > | null,
  or?: Array< ModelClueFilterInput | null > | null,
  not?: ModelClueFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelClueConnection = {
  __typename: "ModelClueConnection",
  items:  Array<Clue | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionClueFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  drawnName?: ModelSubscriptionStringInput | null,
  clue?: ModelSubscriptionStringInput | null,
  santaId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionClueFilterInput | null > | null,
  or?: Array< ModelSubscriptionClueFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateClueMutationVariables = {
  input: CreateClueInput,
  condition?: ModelClueConditionInput | null,
};

export type CreateClueMutation = {
  createClue?:  {
    __typename: "Clue",
    id: string,
    drawnName?: string | null,
    clue?: string | null,
    santaId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateClueMutationVariables = {
  input: UpdateClueInput,
  condition?: ModelClueConditionInput | null,
};

export type UpdateClueMutation = {
  updateClue?:  {
    __typename: "Clue",
    id: string,
    drawnName?: string | null,
    clue?: string | null,
    santaId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteClueMutationVariables = {
  input: DeleteClueInput,
  condition?: ModelClueConditionInput | null,
};

export type DeleteClueMutation = {
  deleteClue?:  {
    __typename: "Clue",
    id: string,
    drawnName?: string | null,
    clue?: string | null,
    santaId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetClueQueryVariables = {
  id: string,
};

export type GetClueQuery = {
  getClue?:  {
    __typename: "Clue",
    id: string,
    drawnName?: string | null,
    clue?: string | null,
    santaId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SuggestClueQueryVariables = {
  aboutMe: string,
  clueFormat: string,
};

export type SuggestClueQuery = {
  suggestClue?: string | null,
};

export type ListCluesQueryVariables = {
  filter?: ModelClueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCluesQuery = {
  listClues?:  {
    __typename: "ModelClueConnection",
    items:  Array< {
      __typename: "Clue",
      id: string,
      drawnName?: string | null,
      clue?: string | null,
      santaId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateClueSubscriptionVariables = {
  filter?: ModelSubscriptionClueFilterInput | null,
};

export type OnCreateClueSubscription = {
  onCreateClue?:  {
    __typename: "Clue",
    id: string,
    drawnName?: string | null,
    clue?: string | null,
    santaId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateClueSubscriptionVariables = {
  filter?: ModelSubscriptionClueFilterInput | null,
};

export type OnUpdateClueSubscription = {
  onUpdateClue?:  {
    __typename: "Clue",
    id: string,
    drawnName?: string | null,
    clue?: string | null,
    santaId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteClueSubscriptionVariables = {
  filter?: ModelSubscriptionClueFilterInput | null,
};

export type OnDeleteClueSubscription = {
  onDeleteClue?:  {
    __typename: "Clue",
    id: string,
    drawnName?: string | null,
    clue?: string | null,
    santaId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
