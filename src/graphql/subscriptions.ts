/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCompositeDog = /* GraphQL */ `
  subscription OnCreateCompositeDog(
    $filter: ModelSubscriptionCompositeDogFilterInput
  ) {
    onCreateCompositeDog(filter: $filter) {
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
export const onUpdateCompositeDog = /* GraphQL */ `
  subscription OnUpdateCompositeDog(
    $filter: ModelSubscriptionCompositeDogFilterInput
  ) {
    onUpdateCompositeDog(filter: $filter) {
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
export const onDeleteCompositeDog = /* GraphQL */ `
  subscription OnDeleteCompositeDog(
    $filter: ModelSubscriptionCompositeDogFilterInput
  ) {
    onDeleteCompositeDog(filter: $filter) {
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
export const onCreateCompositeOwner = /* GraphQL */ `
  subscription OnCreateCompositeOwner(
    $filter: ModelSubscriptionCompositeOwnerFilterInput
  ) {
    onCreateCompositeOwner(filter: $filter) {
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
export const onUpdateCompositeOwner = /* GraphQL */ `
  subscription OnUpdateCompositeOwner(
    $filter: ModelSubscriptionCompositeOwnerFilterInput
  ) {
    onUpdateCompositeOwner(filter: $filter) {
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
export const onDeleteCompositeOwner = /* GraphQL */ `
  subscription OnDeleteCompositeOwner(
    $filter: ModelSubscriptionCompositeOwnerFilterInput
  ) {
    onDeleteCompositeOwner(filter: $filter) {
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
