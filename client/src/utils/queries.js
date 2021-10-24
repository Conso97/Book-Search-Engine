import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me($userId: ID!) {
    me (userID: $userID) {
      _id
      username
      email
      savedBooks { 
        _id
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
