/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateClue: OnCreateClueSubscription;
  onUpdateClue: OnUpdateClueSubscription;
  onDeleteClue: OnDeleteClueSubscription;
};

export type CreateClueInput = {
  id?: string | null;
  drawnName?: string | null;
  clue?: string | null;
  santaId?: string | null;
};

export type ModelClueConditionInput = {
  drawnName?: ModelStringInput | null;
  clue?: ModelStringInput | null;
  santaId?: ModelStringInput | null;
  and?: Array<ModelClueConditionInput | null> | null;
  or?: Array<ModelClueConditionInput | null> | null;
  not?: ModelClueConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
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
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Clue = {
  __typename: "Clue";
  id: string;
  drawnName?: string | null;
  clue?: string | null;
  santaId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateClueInput = {
  id: string;
  drawnName?: string | null;
  clue?: string | null;
  santaId?: string | null;
};

export type DeleteClueInput = {
  id: string;
};

export type ModelClueFilterInput = {
  id?: ModelIDInput | null;
  drawnName?: ModelStringInput | null;
  clue?: ModelStringInput | null;
  santaId?: ModelStringInput | null;
  and?: Array<ModelClueFilterInput | null> | null;
  or?: Array<ModelClueFilterInput | null> | null;
  not?: ModelClueFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelClueConnection = {
  __typename: "ModelClueConnection";
  items: Array<Clue | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionClueFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  drawnName?: ModelSubscriptionStringInput | null;
  clue?: ModelSubscriptionStringInput | null;
  santaId?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionClueFilterInput | null> | null;
  or?: Array<ModelSubscriptionClueFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type CreateClueMutation = {
  __typename: "Clue";
  id: string;
  drawnName?: string | null;
  clue?: string | null;
  santaId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateClueMutation = {
  __typename: "Clue";
  id: string;
  drawnName?: string | null;
  clue?: string | null;
  santaId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteClueMutation = {
  __typename: "Clue";
  id: string;
  drawnName?: string | null;
  clue?: string | null;
  santaId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetClueQuery = {
  __typename: "Clue";
  id: string;
  drawnName?: string | null;
  clue?: string | null;
  santaId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCluesQuery = {
  __typename: "ModelClueConnection";
  items: Array<{
    __typename: "Clue";
    id: string;
    drawnName?: string | null;
    clue?: string | null;
    santaId?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateClueSubscription = {
  __typename: "Clue";
  id: string;
  drawnName?: string | null;
  clue?: string | null;
  santaId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateClueSubscription = {
  __typename: "Clue";
  id: string;
  drawnName?: string | null;
  clue?: string | null;
  santaId?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteClueSubscription = {
  __typename: "Clue";
  id: string;
  drawnName?: string | null;
  clue?: string | null;
  santaId?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateClue(
    input: CreateClueInput,
    condition?: ModelClueConditionInput
  ): Promise<CreateClueMutation> {
    const statement = `mutation CreateClue($input: CreateClueInput!, $condition: ModelClueConditionInput) {
        createClue(input: $input, condition: $condition) {
          __typename
          id
          drawnName
          clue
          santaId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateClueMutation>response.data.createClue;
  }
  async UpdateClue(
    input: UpdateClueInput,
    condition?: ModelClueConditionInput
  ): Promise<UpdateClueMutation> {
    const statement = `mutation UpdateClue($input: UpdateClueInput!, $condition: ModelClueConditionInput) {
        updateClue(input: $input, condition: $condition) {
          __typename
          id
          drawnName
          clue
          santaId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateClueMutation>response.data.updateClue;
  }
  async DeleteClue(
    input: DeleteClueInput,
    condition?: ModelClueConditionInput
  ): Promise<DeleteClueMutation> {
    const statement = `mutation DeleteClue($input: DeleteClueInput!, $condition: ModelClueConditionInput) {
        deleteClue(input: $input, condition: $condition) {
          __typename
          id
          drawnName
          clue
          santaId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteClueMutation>response.data.deleteClue;
  }
  async GetClue(id: string): Promise<GetClueQuery> {
    const statement = `query GetClue($id: ID!) {
        getClue(id: $id) {
          __typename
          id
          drawnName
          clue
          santaId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetClueQuery>response.data.getClue;
  }
  async ListClues(
    filter?: ModelClueFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCluesQuery> {
    const statement = `query ListClues($filter: ModelClueFilterInput, $limit: Int, $nextToken: String) {
        listClues(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            drawnName
            clue
            santaId
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCluesQuery>response.data.listClues;
  }
  OnCreateClueListener(
    filter?: ModelSubscriptionClueFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateClue">>
  > {
    const statement = `subscription OnCreateClue($filter: ModelSubscriptionClueFilterInput) {
        onCreateClue(filter: $filter) {
          __typename
          id
          drawnName
          clue
          santaId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateClue">>
    >;
  }

  OnUpdateClueListener(
    filter?: ModelSubscriptionClueFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateClue">>
  > {
    const statement = `subscription OnUpdateClue($filter: ModelSubscriptionClueFilterInput) {
        onUpdateClue(filter: $filter) {
          __typename
          id
          drawnName
          clue
          santaId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateClue">>
    >;
  }

  OnDeleteClueListener(
    filter?: ModelSubscriptionClueFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteClue">>
  > {
    const statement = `subscription OnDeleteClue($filter: ModelSubscriptionClueFilterInput) {
        onDeleteClue(filter: $filter) {
          __typename
          id
          drawnName
          clue
          santaId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteClue">>
    >;
  }
}
