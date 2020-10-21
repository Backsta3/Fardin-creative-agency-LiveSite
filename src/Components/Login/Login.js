import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logos/logo.png';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email, photoURL } = result.user;
      const signedInUser = { name: displayName, email, photo: photoURL }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
      });
  }
  return (
    <div>
      <div className="d-flex justify-content-center mt-5"> <Link to="/">
        <img style={{ width: "140px" }} src={logo} alt="" /></Link>
      </div>
    <div className="d-flex justify-content-center align-items-center">
    <div className="text-center container border border-dark col-md-5" style={{margin: '60px', padding: "30px", backgroundColor: "white", borderRadius: "5px" }}>
      <div className="m-5">
      <h3> <b> Login With! </b> </h3> <br />
      <button style={{ borderRadius: "50px"}}className="btn btn-light mx-auto w-100 m-4 p-2 border borer-secondary" onClick={handleGoogleSignIn}><img align="left" style={{ width: "30px" }} src="https://raw.githubusercontent.com/ProgrammingHero1/travel-guru/master/Icon/google.png" alt="" /> Continue With Google</button>
      <p>Don't have an account? <strong style={{cursor: "pointer"}} className="text-primary" onClick={handleGoogleSignIn}>Create an account</strong> </p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Login;