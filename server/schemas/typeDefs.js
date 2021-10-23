const { gql } = require('apollo-server-express');

const typeDefs = gql`

  # Set up an Auth type to handle returning data from a user creating or user login
  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String
  }

  type Query {
    books: [Book]
    me(userID: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(userID: ID!, book: Book): User
    deleteBook(userID: ID!, book: Book): User
  }
`;

module.exports = typeDefs;
