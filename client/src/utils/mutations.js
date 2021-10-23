import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      token
      me {
        _id
        username
        email
        savedBooks
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      me {
        _id
        username
        email
        savedBooks
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deletBook($userId: ID!, $book: String!) {
    deleteBook(userId: $userId, book: $book) {
      _id
      username
      email
      savedBooks
    }
  }
`;