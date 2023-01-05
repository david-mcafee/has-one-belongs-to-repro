/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCompositeDog = /* GraphQL */ `
  mutation CreateCompositeDog(
    $input: CreateCompositeDogInput!
    $condition: ModelCompositeDogConditionInput
  ) {
    createCompositeDog(input: $input, condition: $condition) {
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
export const updateCompositeDog = /* GraphQL */ `
  mutation UpdateCompositeDog(
    $input: UpdateCompositeDogInput!
    $condition: ModelCompositeDogConditionInput
  ) {
    updateCompositeDog(input: $input, condition: $condition) {
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
export const deleteCompositeDog = /* GraphQL */ `
  mutation DeleteCompositeDog(
    $input: DeleteCompositeDogInput!
    $condition: ModelCompositeDogConditionInput
  ) {
    deleteCompositeDog(input: $input, condition: $condition) {
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
export const createCompositeOwner = /* GraphQL */ `
  mutation CreateCompositeOwner(
    $input: CreateCompositeOwnerInput!
    $condition: ModelCompositeOwnerConditionInput
  ) {
    createCompositeOwner(input: $input, condition: $condition) {
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
export const updateCompositeOwner = /* GraphQL */ `
  mutation UpdateCompositeOwner(
    $input: UpdateCompositeOwnerInput!
    $condition: ModelCompositeOwnerConditionInput
  ) {
    updateCompositeOwner(input: $input, condition: $condition) {
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
export const deleteCompositeOwner = /* GraphQL */ `
  mutation DeleteCompositeOwner(
    $input: DeleteCompositeOwnerInput!
    $condition: ModelCompositeOwnerConditionInput
  ) {
    deleteCompositeOwner(input: $input, condition: $condition) {
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
