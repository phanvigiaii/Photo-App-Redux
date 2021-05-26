import { setSignedIn } from 'features/Auth/authSlice';
import firebase from 'firebase';
import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';

// Configure Firebase.
const config = {
    apiKey: 'AIzaSyC-0Z3cQ_yD-jmWJEElTtDni_f_EYAew-4',
    authDomain: 'photo-app-redux-4f0a7.firebaseapp.com',
};
firebase.initializeApp(config);

// Lazy load Photo
const Photo = React.lazy(() => import('./features/Photo'));
const SignIn = React.lazy(() => import('features/Auth/pages/SignIn'));

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('hello');
        const unregisterAuthObserver = firebase
            .auth()
            .onAuthStateChanged((user) => {
                dispatch(setSignedIn(!!user));
            });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    return (
        <div className="photo-app">
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Redirect exact from="/" to="/photos" />
                        <Route path="/photos" component={Photo} />
                        <Route exact path="/sign-in" component={SignIn} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
