// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CompositeDog, CompositeOwner } = initSchema(schema);

export {
  CompositeDog,
  CompositeOwner
};