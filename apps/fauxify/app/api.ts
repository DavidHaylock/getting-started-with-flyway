import { Configuration, DefaultApi } from '@fauxify/api-client';

export const api = new DefaultApi(new Configuration({
  basePath: 'http://localhost:8080/v1'
}));