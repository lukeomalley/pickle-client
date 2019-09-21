import { withData } from 'next-apollo';
import { HttpLink } from 'apollo-boost';

const config = {
  link: new HttpLink({
    // https://pickle-api.herokuapp.com/api/v1/graphql
    uri: 'https://pickle-api.herokuapp.com/api/v1/graphql',
    opts: {
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    },
  }),
};

export default withData(config);
