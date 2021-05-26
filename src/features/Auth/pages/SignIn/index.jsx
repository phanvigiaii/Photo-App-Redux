import { setSignedIn } from 'features/Auth/authSlice';
import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './SignIn.scss';

SignIn.propTypes = {};

const uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/photos',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => true,
    },
};

function SignIn(props) {
    const dispatch = useDispatch();
    const isSignedIn = useSelector((state) => state.user);
    const history = useHistory();

    useEffect(() => {
        const unregisterAuthObserver = firebase
            .auth()
            .onAuthStateChanged((user) => {
                console.log('hello');
                dispatch(setSignedIn(!!user));
                // history.push('/photos');
            });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    if (!isSignedIn) {
        return (
            <div className="sign-in">
                <div className="text-center mt-5">
                    <h2 className="mb-4">Login Form</h2>
                    <p>or login with social accounts</p>
                </div>
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            </div>
        );
    } else {
        return (
            <div>
                <h1>My App</h1>
                <p>
                    Welcome {firebase.auth().currentUser.displayName}! You are
                    now signed-in!
                </p>
                <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
            </div>
        );
    }
}

export default SignIn;
