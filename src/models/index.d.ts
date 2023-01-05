import { ModelInit, MutableModel, __modelMeta__, CompositeIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerCompositeDog = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<CompositeDog, ['name', 'description']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly name: string;
  readonly description: string;
  readonly CompositeOwner?: CompositeOwner | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly compositeDogCompositeOwnerLastName?: string | null;
  readonly compositeDogCompositeOwnerFirstName?: string | null;
}

type LazyCompositeDog = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<CompositeDog, ['name', 'description']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly name: string;
  readonly description: string;
  readonly CompositeOwner: AsyncItem<CompositeOwner | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly compositeDogCompositeOwnerLastName?: string | null;
  readonly compositeDogCompositeOwnerFirstName?: string | null;
}

export declare type CompositeDog = LazyLoading extends LazyLoadingDisabled ? EagerCompositeDog : LazyCompositeDog

export declare const CompositeDog: (new (init: ModelInit<CompositeDog>) => CompositeDog) & {
  copyOf(source: CompositeDog, mutator: (draft: MutableModel<CompositeDog>) => MutableModel<CompositeDog> | void): CompositeDog;
}

type EagerCompositeOwner = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<CompositeOwner, ['lastName', 'firstName']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly lastName: string;
  readonly firstName: string;
  readonly CompositeDog?: CompositeDog | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly compositeOwnerCompositeDogName?: string | null;
  readonly compositeOwnerCompositeDogDescription?: string | null;
}

type LazyCompositeOwner = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<CompositeOwner, ['lastName', 'firstName']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly lastName: string;
  readonly firstName: string;
  readonly CompositeDog: AsyncItem<CompositeDog | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly compositeOwnerCompositeDogName?: string | null;
  readonly compositeOwnerCompositeDogDescription?: string | null;
}

export declare type CompositeOwner = LazyLoading extends LazyLoadingDisabled ? EagerCompositeOwner : LazyCompositeOwner

export declare const CompositeOwner: (new (init: ModelInit<CompositeOwner>) => CompositeOwner) & {
  copyOf(source: CompositeOwner, mutator: (draft: MutableModel<CompositeOwner>) => MutableModel<CompositeOwner> | void): CompositeOwner;
}