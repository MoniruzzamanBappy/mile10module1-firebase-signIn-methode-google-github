import "./App.css";
import app from "./firebase.init";

import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});

  const provider = new GoogleAuthProvider();

  const provider1 = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((e) => {
        console.log("error:", e);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
      });
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, provider1)
    .then(result=>{
      const user = result.user;
      setUser(user)
    })
    .catch(e=>{
      console.log(e);
    })

  };
  return (
    <div className="App">
      {user.uid ? (
        <div>
          <button onClick={handleSignOut}>Sing Out</button>
        </div>
      ) : (
        <div>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleGithubSignIn}>Github Sign In</button>
        </div>
      )}
      <h3>Name: {user.displayName}</h3>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
