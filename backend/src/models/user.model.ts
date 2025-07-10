import { GenderTypes, UserTypes } from '../types/user.types';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    // General
    uid: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 65,
    },
    surname: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 65,
    },

    gender: {
      type: String,
      enum: GenderTypes,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    userType: {
      type: String,
      required: true,
      default: UserTypes.BUSINESS,
      enum: UserTypes,
    },

    // Address
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      postalCode: { type: String },
      country: { type: String },
      fullAdress: { type: String },
    },
  },
  { timestamps: true },
);

const UserModel = mongoose.model('User', userSchema);
export default UserModel;
