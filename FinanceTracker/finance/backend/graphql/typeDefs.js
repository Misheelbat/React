const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    email: String
    name: String
    password: String
    user_id: ID
  }
  type Transaction {
    name: String
    amount: Int
    _id: ID
    belongs: ID
  }
  type Auth {
    token: String!
  }

  input RegisterInput {
    email: String!
    name: String!
    password: String!
  }
  input LoginInput {
    email: String!
    password: String!
  }
  input TransactionInput {
    name: String
    amount: Int
  }

  type Query {
    currentUser: User
    allTransaction(id: ID): [Transaction]
  }
  type Mutation {
    registerUser(registerInput: RegisterInput): Auth
    loginUser(loginInput: LoginInput): Auth
    addTransaction(transactionInput: TransactionInput): Transaction
    deleteTransaction(id: ID): Transaction
  }
`;
