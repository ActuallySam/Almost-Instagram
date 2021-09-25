import { listener } from "process";
import { useState, useEffect, useContext } from "react";
import FirebaseContext from '../context/firebase';

export default function useAuthListener() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const Listener = firebase.auth().onAuthStateChanged((authUser) => {
            // we have a user... therefore we can store the user in localstorage
            if (authUser) {
                localStorage.setItem('authUser', JSON. stringify(authUser));
                setUser(authUser);
            } else {
                // we dont have an auth user, therefore clear the local storage
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });

        return () => listener();
    }, [firebase]);

    return { user };
}