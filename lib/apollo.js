import { withData } from 'next-apollo';
import { HttpLink } from 'apollo-link-http';

const config = {
  link: new HttpLink({
    uri: 'http://localhost:3000/api/v1/graphql', // Server URL (must be absolute)
    opts: {
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    },
  }),
};

export default withData(config);
