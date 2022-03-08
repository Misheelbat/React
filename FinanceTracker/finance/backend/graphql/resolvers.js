const User = require('../models/user');
const Transaction = require('../models/transaction');
const { ApolloError } = require('apollo-server-errors');
const { signToken } = require('../utils/auth');
const { rawListeners, findById } = require('../models/user');
module.exports = {
  Query: {
    currentUser: async (_, args, { user }) => {
      if (user) {
        return user;
      } else {
        throw new ApolloError('user not logged in');
      }
    },

    allTransaction: async (_, { id }, { user }) => {
      if (id !== user.user_id) {
        throw new ApolloError('not autherized');
      }
      try {
        const userID = user.user_id;
        const items = await Transaction.find({ belongs: userID });
        return items;
      } catch (err) {
        throw new ApolloError('LOGIN REQUIRED');
      }
    },
  },

  Mutation: {
    async registerUser(_, { registerInput: { email, name, password } }) {
      const userExist = await User.findOne({ email });
      //throw error if user exist
      if (userExist) {
        throw new ApolloError('User already exist ' + email, 'USER_EXIST');
      }

      const newUser = new User({
        email: email.toLowerCase(),
        name,
        password,
      });

      const token = signToken(newUser);

      await newUser.save();

      return { token };
    },

    async loginUser(_, { loginInput: { email, password } }, context) {
      const userExist = await User.findOne({ email });

      //throw error if user doesnt't exist
      if (!userExist) {
        throw new ApolloError('User does not exist');
      }
      const passCorrect = await userExist.isPasswordCorrect(password);
      if (!passCorrect) {
        throw new ApolloError('Incorrect password');
      }
      const token = signToken(userExist);
      return { token };
    },

    async addTransaction(_, { transactionInput: { name, amount } }, { user }) {
      if (!user) {
        throw new ApolloError('User not logged in');
      }

      try {
        const trans = new Transaction({
          name,
          amount,
          belongs: user.user_id,
        });
        await trans.save();
        return trans;
      } catch (err) {
        throw new ApolloError('Transaction could not be added');
      }
    },
    async deleteTransaction(_, { id }, { user }) {
      if (!user) {
        throw new ApolloError('User not logged in');
      }
      const itemToDelete = await Transaction.findById({ _id: id });
      if (!itemToDelete) {
        throw new ApolloError('ITEM DOES NOT EXIST');
      }
      try {
        await Transaction.findByIdAndDelete({ _id: id });
        return { name: 'deleted' };
      } catch (err) {
        throw new ApolloError('ITEM COULD NOT BE DELETED');
      }
    },
  },
};
