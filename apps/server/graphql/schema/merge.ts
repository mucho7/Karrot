import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';

export const typeDefs = mergeTypeDefs(
  loadFilesSync('./graphql/schema/**/*.graphql', { extensions: ['graphql'] })
);
