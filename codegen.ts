
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://spacex-production.up.railway.app",
  documents: ["src/graphql/*.{gql,graphql}"],
  generates: {
    "./src/generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
