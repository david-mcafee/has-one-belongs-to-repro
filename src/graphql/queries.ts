/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCompositeDog = /* GraphQL */ `
  query GetCompositeDog($name: ID!, $description: String!) {
    getCompositeDog(name: $name, description: $description) {
      name
      description
      CompositeOwner {
        lastName
        firstName
        CompositeDog {
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          compositeDogCompositeOwnerLastName
          compositeDogCompositeOwnerFirstName
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        compositeOwnerCompositeDogName
        compositeOwnerCompositeDogDescription
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      compositeDogCompositeOwnerLastName
      compositeDogCompositeOwnerFirstName
    }
  }
`;
export const listCompositeDogs = /* GraphQL */ `
  query ListCompositeDogs(
    $name: ID
    $description: ModelStringKeyConditionInput
    $filter: ModelCompositeDogFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCompositeDogs(
      name: $name
      description: $description
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        name
        description
        CompositeOwner {
          lastName
          firstName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          compositeOwnerCompositeDogName
          compositeOwnerCompositeDogDescription
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        compositeDogCompositeOwnerLastName
        compositeDogCompositeOwnerFirstName
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCompositeDogs = /* GraphQL */ `
  query SyncCompositeDogs(
    $filter: ModelCompositeDogFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompositeDogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        name
        description
        CompositeOwner {
          lastName
          firstName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          compositeOwnerCompositeDogName
          compositeOwnerCompositeDogDescription
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        compositeDogCompositeOwnerLastName
        compositeDogCompositeOwnerFirstName
      }
      nextToken
      startedAt
    }
  }
`;
export const getCompositeOwner = /* GraphQL */ `
  query GetCompositeOwner($lastName: ID!, $firstName: String!) {
    getCompositeOwner(lastName: $lastName, firstName: $firstName) {
      lastName
      firstName
      CompositeDog {
        name
        description
        CompositeOwner {
          lastName
          firstName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          compositeOwnerCompositeDogName
          compositeOwnerCompositeDogDescription
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        compositeDogCompositeOwnerLastName
        compositeDogCompositeOwnerFirstName
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      compositeOwnerCompositeDogName
      compositeOwnerCompositeDogDescription
    }
  }
`;
export const listCompositeOwners = /* GraphQL */ `
  query ListCompositeOwners(
    $lastName: ID
    $firstName: ModelStringKeyConditionInput
    $filter: ModelCompositeOwnerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCompositeOwners(
      lastName: $lastName
      firstName: $firstName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        lastName
        firstName
        CompositeDog {
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          compositeDogCompositeOwnerLastName
          compositeDogCompositeOwnerFirstName
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        compositeOwnerCompositeDogName
        compositeOwnerCompositeDogDescription
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCompositeOwners = /* GraphQL */ `
  query SyncCompositeOwners(
    $filter: ModelCompositeOwnerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompositeOwners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        lastName
        firstName
        CompositeDog {
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          compositeDogCompositeOwnerLastName
          compositeDogCompositeOwnerFirstName
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        compositeOwnerCompositeDogName
        compositeOwnerCompositeDogDescription
      }
      nextToken
      startedAt
    }
  }
`;
