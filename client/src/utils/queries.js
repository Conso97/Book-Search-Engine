import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query user($userId: ID!) {
    me(userID: $userID) {
      _id
      username
      email
      savedBooks
    }
  }
`;
