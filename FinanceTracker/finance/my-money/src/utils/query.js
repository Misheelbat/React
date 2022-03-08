import { gql } from '@apollo/client';

export const LOGIN_APP = gql`
  mutation loginApp($loginInput: LoginInput) {
    loginUser(loginInput: $loginInput) {
      token
    }
  }
`;
export const GET_USER = gql`
  query {
    currentUser {
      name
      email
      user_id
    }
  }
`;

export const ADD_ITEM = gql`
  mutation AddTransaction($transactionInput: TransactionInput) {
    addTransaction(transactionInput: $transactionInput) {
      name
      amount
    }
  }
`;
export const TRANSACTIONS = gql`
  query AllTransaction($id: ID) {
    allTransaction(id: $id) {
      _id
      name
      amount
      belongs
    }
  }
`;
export const DELETE_T = gql`
  mutation DeleteTransaction($id: ID) {
    deleteTransaction(id: $id) {
      name
    }
  }
`;
export const SIGN_USER = gql`
  mutation RegisterUser($registerInput: RegisterInput) {
    registerUser(registerInput: $registerInput) {
      token
    }
  }
`;