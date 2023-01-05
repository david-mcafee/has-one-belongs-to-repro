/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCompositeDogInput = {
  name: string,
  description: string,
  _version?: number | null,
  compositeDogCompositeOwnerLastName?: string | null,
  compositeDogCompositeOwnerFirstName?: string | null,
};

export type ModelCompositeDogConditionInput = {
  and?: Array< ModelCompositeDogConditionInput | null > | null,
  or?: Array< ModelCompositeDogConditionInput | null > | null,
  not?: ModelCompositeDogConditionInput | null,
  compositeDogCompositeOwnerLastName?: ModelIDInput | null,
  compositeDogCompositeOwnerFirstName?: ModelStringInput | null,
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

export type CompositeDog = {
  __typename: "CompositeDog",
  name: string,
  description: string,
  CompositeOwner?: CompositeOwner | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  compositeDogCompositeOwnerLastName?: string | null,
  compositeDogCompositeOwnerFirstName?: string | null,
};

export type CompositeOwner = {
  __typename: "CompositeOwner",
  lastName: string,
  firstName: string,
  CompositeDog?: CompositeDog | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  compositeOwnerCompositeDogName?: string | null,
  compositeOwnerCompositeDogDescription?: string | null,
};

export type UpdateCompositeDogInput = {
  name: string,
  description: string,
  _version?: number | null,
  compositeDogCompositeOwnerLastName?: string | null,
  compositeDogCompositeOwnerFirstName?: string | null,
};

export type DeleteCompositeDogInput = {
  name: string,
  description: string,
  _version?: number | null,
};

export type CreateCompositeOwnerInput = {
  lastName: string,
  firstName: string,
  _version?: number | null,
  compositeOwnerCompositeDogName?: string | null,
  compositeOwnerCompositeDogDescription?: string | null,
};

export type ModelCompositeOwnerConditionInput = {
  and?: Array< ModelCompositeOwnerConditionInput | null > | null,
  or?: Array< ModelCompositeOwnerConditionInput | null > | null,
  not?: ModelCompositeOwnerConditionInput | null,
  compositeOwnerCompositeDogName?: ModelIDInput | null,
  compositeOwnerCompositeDogDescription?: ModelStringInput | null,
};

export type UpdateCompositeOwnerInput = {
  lastName: string,
  firstName: string,
  _version?: number | null,
  compositeOwnerCompositeDogName?: string | null,
  compositeOwnerCompositeDogDescription?: string | null,
};

export type DeleteCompositeOwnerInput = {
  lastName: string,
  firstName: string,
  _version?: number | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelCompositeDogFilterInput = {
  name?: ModelIDInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelCompositeDogFilterInput | null > | null,
  or?: Array< ModelCompositeDogFilterInput | null > | null,
  not?: ModelCompositeDogFilterInput | null,
  compositeDogCompositeOwnerLastName?: ModelIDInput | null,
  compositeDogCompositeOwnerFirstName?: ModelStringInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCompositeDogConnection = {
  __typename: "ModelCompositeDogConnection",
  items:  Array<CompositeDog | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCompositeOwnerFilterInput = {
  lastName?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  and?: Array< ModelCompositeOwnerFilterInput | null > | null,
  or?: Array< ModelCompositeOwnerFilterInput | null > | null,
  not?: ModelCompositeOwnerFilterInput | null,
  compositeOwnerCompositeDogName?: ModelIDInput | null,
  compositeOwnerCompositeDogDescription?: ModelStringInput | null,
};

export type ModelCompositeOwnerConnection = {
  __typename: "ModelCompositeOwnerConnection",
  items:  Array<CompositeOwner | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionCompositeDogFilterInput = {
  name?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCompositeDogFilterInput | null > | null,
  or?: Array< ModelSubscriptionCompositeDogFilterInput | null > | null,
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

export type ModelSubscriptionCompositeOwnerFilterInput = {
  lastName?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCompositeOwnerFilterInput | null > | null,
  or?: Array< ModelSubscriptionCompositeOwnerFilterInput | null > | null,
};

export type CreateCompositeDogMutationVariables = {
  input: CreateCompositeDogInput,
  condition?: ModelCompositeDogConditionInput | null,
};

export type CreateCompositeDogMutation = {
  createCompositeDog?:  {
    __typename: "CompositeDog",
    name: string,
    description: string,
    CompositeOwner?:  {
      __typename: "CompositeOwner",
      lastName: string,
      firstName: string,
      CompositeDog?:  {
        __typename: "CompositeDog",
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        compositeDogCompositeOwnerLastName?: string | null,
        compositeDogCompositeOwnerFirstName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      compositeOwnerCompositeDogName?: string | null,
      compositeOwnerCompositeDogDescription?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    compositeDogCompositeOwnerLastName?: string | null,
    compositeDogCompositeOwnerFirstName?: string | null,
  } | null,
};

export type UpdateCompositeDogMutationVariables = {
  input: UpdateCompositeDogInput,
  condition?: ModelCompositeDogConditionInput | null,
};

export type UpdateCompositeDogMutation = {
  updateCompositeDog?:  {
    __typename: "CompositeDog",
    name: string,
    description: string,
    CompositeOwner?:  {
      __typename: "CompositeOwner",
      lastName: string,
      firstName: string,
      CompositeDog?:  {
        __typename: "CompositeDog",
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        compositeDogCompositeOwnerLastName?: string | null,
        compositeDogCompositeOwnerFirstName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      compositeOwnerCompositeDogName?: string | null,
      compositeOwnerCompositeDogDescription?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    compositeDogCompositeOwnerLastName?: string | null,
    compositeDogCompositeOwnerFirstName?: string | null,
  } | null,
};

export type DeleteCompositeDogMutationVariables = {
  input: DeleteCompositeDogInput,
  condition?: ModelCompositeDogConditionInput | null,
};

export type DeleteCompositeDogMutation = {
  deleteCompositeDog?:  {
    __typename: "CompositeDog",
    name: string,
    description: string,
    CompositeOwner?:  {
      __typename: "CompositeOwner",
      lastName: string,
      firstName: string,
      CompositeDog?:  {
        __typename: "CompositeDog",
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        compositeDogCompositeOwnerLastName?: string | null,
        compositeDogCompositeOwnerFirstName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      compositeOwnerCompositeDogName?: string | null,
      compositeOwnerCompositeDogDescription?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    compositeDogCompositeOwnerLastName?: string | null,
    compositeDogCompositeOwnerFirstName?: string | null,
  } | null,
};

export type CreateCompositeOwnerMutationVariables = {
  input: CreateCompositeOwnerInput,
  condition?: ModelCompositeOwnerConditionInput | null,
};

export type CreateCompositeOwnerMutation = {
  createCompositeOwner?:  {
    __typename: "CompositeOwner",
    lastName: string,
    firstName: string,
    CompositeDog?:  {
      __typename: "CompositeDog",
      name: string,
      description: string,
      CompositeOwner?:  {
        __typename: "CompositeOwner",
        lastName: string,
        firstName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        compositeOwnerCompositeDogName?: string | null,
        compositeOwnerCompositeDogDescription?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      compositeDogCompositeOwnerLastName?: string | null,
      compositeDogCompositeOwnerFirstName?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    compositeOwnerCompositeDogName?: string | null,
    compositeOwnerCompositeDogDescription?: string | null,
  } | null,
};

export type UpdateCompositeOwnerMutationVariables = {
  input: UpdateCompositeOwnerInput,
  condition?: ModelCompositeOwnerConditionInput | null,
};

export type UpdateCompositeOwnerMutation = {
  updateCompositeOwner?:  {
    __typename: "CompositeOwner",
    lastName: string,
    firstName: string,
    CompositeDog?:  {
      __typename: "CompositeDog",
      name: string,
      description: string,
      CompositeOwner?:  {
        __typename: "CompositeOwner",
        lastName: string,
        firstName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        compositeOwnerCompositeDogName?: string | null,
        compositeOwnerCompositeDogDescription?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      compositeDogCompositeOwnerLastName?: string | null,
      compositeDogCompositeOwnerFirstName?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    compositeOwnerCompositeDogName?: string | null,
    compositeOwnerCompositeDogDescription?: string | null,
  } | null,
};

export type DeleteCompositeOwnerMutationVariables = {
  input: DeleteCompositeOwnerInput,
  condition?: ModelCompositeOwnerConditionInput | null,
};

export type DeleteCompositeOwnerMutation = {
  deleteCompositeOwner?:  {
    __typename: "CompositeOwner",
    lastName: string,
    firstName: string,
    CompositeDog?:  {
      __typename: "CompositeDog",
      name: string,
      description: string,
      CompositeOwner?:  {
        __typename: "CompositeOwner",
        lastName: string,
        firstName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        compositeOwnerCompositeDogName?: string | null,
        compositeOwnerCompositeDogDescription?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      compositeDogCompositeOwnerLastName?: string | null,
      compositeDogCompositeOwnerFirstName?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    compositeOwnerCompositeDogName?: string | null,
    compositeOwnerCompositeDogDescription?: string | null,
  } | null,
};

export type GetCompositeDogQueryVariables = {
  name: string,
  description: string,
};

export type GetCompositeDogQuery = {
  getCompositeDog?:  {
    __typename: "CompositeDog",
    name: string,
    description: string,
    CompositeOwner?:  {
      __typename: "CompositeOwner",
      lastName: string,
      firstName: string,
      CompositeDog?:  {
        __typename: "CompositeDog",
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        compositeDogCompositeOwnerLastName?: string | null,
        compositeDogCompositeOwnerFirstName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      compositeOwnerCompositeDogName?: string | null,
      compositeOwnerCompositeDogDescription?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    compositeDogCompositeOwnerLastName?: string | null,
    compositeDogCompositeOwnerFirstName?: string | null,
  } | null,
};

export type ListCompositeDogsQueryVariables = {
  name?: string | null,
  description?: ModelStringKeyConditionInput | null,
  filter?: ModelCompositeDogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCompositeDogsQuery = {
  listCompositeDogs?:  {
    __typename: "ModelCompositeDogConnection",
    items:  Array< {
      __typename: "CompositeDog",
      name: string,
      description: string,
      CompositeOwner?:  {
        __typename: "CompositeOwner",
        lastName: string,
        firstName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        compositeOwnerCompositeDogName?: string | null,
        compositeOwnerCompositeDogDescription?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      compositeDogCompositeOwnerLastName?: string | null,
      compositeDogCompositeOwnerFirstName?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCompositeDogsQueryVariables = {
  filter?: ModelCompositeDogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCompositeDogsQuery = {
  syncCompositeDogs?:  {
    __typename: "ModelCompositeDogConnection",
    items:  Array< {
      __typename: "CompositeDog",
      name: string,
      description: string,
      CompositeOwner?:  {
        __typename: "CompositeOwner",
        lastName: string,
        firstName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        compositeOwnerCompositeDogName?: string | null,
        compositeOwnerCompositeDogDescription?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      compositeDogCompositeOwnerLastName?: string | null,
      compositeDogCompositeOwnerFirstName?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCompositeOwnerQueryVariables = {
  lastName: string,
  firstName: string,
};

export type GetCompositeOwnerQuery = {
  getCompositeOwner?:  {
    __typename: "CompositeOwner",
    lastName: string,
    firstName: string,
    CompositeDog?:  {
      __typename: "CompositeDog",
      name: string,
      description: string,
      CompositeOwner?:  {
        __typename: "CompositeOwner",
        lastName: string,
        firstName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        compositeOwnerCompositeDogName?: string | null,
        compositeOwnerCompositeDogDescription?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      compositeDogCompositeOwnerLastName?: string | null,
      compositeDogCompositeOwnerFirstName?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    compositeOwnerCompositeDogName?: string | null,
    compositeOwnerCompositeDogDescription?: string | null,
  } | null,
};

export type ListCompositeOwnersQueryVariables = {
  lastName?: string | null,
  firstName?: ModelStringKeyConditionInput | null,
  filter?: ModelCompositeOwnerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCompositeOwnersQuery = {
  listCompositeOwners?:  {
    __typename: "ModelCompositeOwnerConnection",
    items:  Array< {
      __typename: "CompositeOwner",
      lastName: string,
      firstName: string,
      CompositeDog?:  {
        __typename: "CompositeDog",
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        compositeDogCompositeOwnerLastName?: string | null,
        compositeDogCompositeOwnerFirstName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      compositeOwnerCompositeDogName?: string | null,
      compositeOwnerCompositeDogDescription?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCompositeOwnersQueryVariables = {
  filter?: ModelCompositeOwnerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCompositeOwnersQuery = {
  syncCompositeOwners?:  {
    __typename: "ModelCompositeOwnerConnection",
    items:  Array< {
      __typename: "CompositeOwner",
      lastName: string,
      firstName: string,
      CompositeDog?:  {
        __typename: "CompositeDog",
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        compositeDogCompositeOwnerLastName?: string | null,
        compositeDogCompositeOwnerFirstName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      compositeOwnerCompositeDogName?: string | null,
      compositeOwnerCompositeDogDescription?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateCompositeDogSubscriptionVariables = {
  filter?: ModelSubscriptionCompositeDogFilterInput | null,
};

export type OnCreateCompositeDogSubscription = {
  onCreateCompositeDog?:  {
    __typename: "CompositeDog",
    name: string,
    description: string,
    CompositeOwner?:  {
      __typename: "CompositeOwner",
      lastName: string,
      firstName: string,
      CompositeDog?:  {
        __typename: "CompositeDog",
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        compositeDogCompositeOwnerLastName?: string | null,
        compositeDogCompositeOwnerFirstName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      compositeOwnerCompositeDogName?: string | null,
      compositeOwnerCompositeDogDescription?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    compositeDogCompositeOwnerLastName?: string | null,
    compositeDogCompositeOwnerFirstName?: string | null,
  } | null,
};

export type OnUpdateCompositeDogSubscriptionVariables = {
  filter?: ModelSubscriptionCompositeDogFilterInput | null,
};

export type OnUpdateCompositeDogSubscription = {
  onUpdateCompositeDog?:  {
    __typename: "CompositeDog",
    name: string,
    description: string,
    CompositeOwner?:  {
      __typename: "CompositeOwner",
      lastName: string,
      firstName: string,
      CompositeDog?:  {
        __typename: "CompositeDog",
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        compositeDogCompositeOwnerLastName?: string | null,
        compositeDogCompositeOwnerFirstName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      compositeOwnerCompositeDogName?: string | null,
      compositeOwnerCompositeDogDescription?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    compositeDogCompositeOwnerLastName?: string | null,
    compositeDogCompositeOwnerFirstName?: string | null,
  } | null,
};

export type OnDeleteCompositeDogSubscriptionVariables = {
  filter?: ModelSubscriptionCompositeDogFilterInput | null,
};

export type OnDeleteCompositeDogSubscription = {
  onDeleteCompositeDog?:  {
    __typename: "CompositeDog",
    name: string,
    description: string,
    CompositeOwner?:  {
      __typename: "CompositeOwner",
      lastName: string,
      firstName: string,
      CompositeDog?:  {
        __typename: "CompositeDog",
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        compositeDogCompositeOwnerLastName?: string | null,
        compositeDogCompositeOwnerFirstName?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      compositeOwnerCompositeDogName?: string | null,
      compositeOwnerCompositeDogDescription?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    compositeDogCompositeOwnerLastName?: string | null,
    compositeDogCompositeOwnerFirstName?: string | null,
  } | null,
};

export type OnCreateCompositeOwnerSubscriptionVariables = {
  filter?: ModelSubscriptionCompositeOwnerFilterInput | null,
};

export type OnCreateCompositeOwnerSubscription = {
  onCreateCompositeOwner?:  {
    __typename: "CompositeOwner",
    lastName: string,
    firstName: string,
    CompositeDog?:  {
      __typename: "CompositeDog",
      name: string,
      description: string,
      CompositeOwner?:  {
        __typename: "CompositeOwner",
        lastName: string,
        firstName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        compositeOwnerCompositeDogName?: string | null,
        compositeOwnerCompositeDogDescription?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      compositeDogCompositeOwnerLastName?: string | null,
      compositeDogCompositeOwnerFirstName?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    compositeOwnerCompositeDogName?: string | null,
    compositeOwnerCompositeDogDescription?: string | null,
  } | null,
};

export type OnUpdateCompositeOwnerSubscriptionVariables = {
  filter?: ModelSubscriptionCompositeOwnerFilterInput | null,
};

export type OnUpdateCompositeOwnerSubscription = {
  onUpdateCompositeOwner?:  {
    __typename: "CompositeOwner",
    lastName: string,
    firstName: string,
    CompositeDog?:  {
      __typename: "CompositeDog",
      name: string,
      description: string,
      CompositeOwner?:  {
        __typename: "CompositeOwner",
        lastName: string,
        firstName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        compositeOwnerCompositeDogName?: string | null,
        compositeOwnerCompositeDogDescription?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      compositeDogCompositeOwnerLastName?: string | null,
      compositeDogCompositeOwnerFirstName?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    compositeOwnerCompositeDogName?: string | null,
    compositeOwnerCompositeDogDescription?: string | null,
  } | null,
};

export type OnDeleteCompositeOwnerSubscriptionVariables = {
  filter?: ModelSubscriptionCompositeOwnerFilterInput | null,
};

export type OnDeleteCompositeOwnerSubscription = {
  onDeleteCompositeOwner?:  {
    __typename: "CompositeOwner",
    lastName: string,
    firstName: string,
    CompositeDog?:  {
      __typename: "CompositeDog",
      name: string,
      description: string,
      CompositeOwner?:  {
        __typename: "CompositeOwner",
        lastName: string,
        firstName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        compositeOwnerCompositeDogName?: string | null,
        compositeOwnerCompositeDogDescription?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      compositeDogCompositeOwnerLastName?: string | null,
      compositeDogCompositeOwnerFirstName?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    compositeOwnerCompositeDogName?: string | null,
    compositeOwnerCompositeDogDescription?: string | null,
  } | null,
};
