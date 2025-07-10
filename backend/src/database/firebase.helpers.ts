import 'firebase/compat/auth';

import { User } from '../types/user.types';
import firebase from 'firebase/compat/app';

// ADD types later
const loginUserFB = ({ email, password }: { email: User['email']; password: User['password'] }) => {
  const auth = firebase.auth();
  return auth.signInWithEmailAndPassword(email, password);
};

// const logoutUserFB = () => auth.signOut();

// const sendPasswordResetEmailFB = ({ email }:{ email: User["email"] }) => auth.sendPasswordResetEmail(email);

const FirebaseAuthService = {
  loginUserFB,
  // logoutUserFB,
  // sendPasswordResetEmailFB,
};
export default FirebaseAuthService;
