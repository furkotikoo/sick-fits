import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        name
        email
        cart {
          id
          quantity
          product {
            id
            name
            price
            photo {
              image {
                publicUrlTransformed
              }
            }
          }
        }
        orders {
          id
          label
          total
          charge
          items {
            id
            name
            description
            quantity
            price
            photo {
              id
              image {
                publicUrlTransformed
              }
              altText
            }
          }
        }
      }
    }
  }
`;

const useUser = () => {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
};

export default useUser;
export { CURRENT_USER_QUERY };
