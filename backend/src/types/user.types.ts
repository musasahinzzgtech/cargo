export enum UserTypes {
  BUSINESS = 'BUSINESS',
  STANDART = 'STANDART',
}
export enum GenderTypes {
  male = 'male',
  female = 'female',
  other = 'other',
}

export interface User {
  uid: string;
  _id: string;
  image: string;
  password: string;
  name: string;
  surname: string;
  birthday: Date;
  gender: GenderTypes;
  email: string;
  phoneNumber: string;
  userType: UserTypes;
  createdAt: Date;
  updatedAt: Date;
}
