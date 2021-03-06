import { initializeApp } from "firebase/app";
import config from "../../firebase.json";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const app = initializeApp(config);

const auth = getAuth(app);

export const signin = async ({ email, password }) => {
  //   const { user } = await Auth.signInWithEmailAndPassword(email, password);
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};
