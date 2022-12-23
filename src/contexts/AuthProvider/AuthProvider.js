import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

import firebaseInit from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(firebaseInit);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	}


	const emailVerify = () => {
		setLoading(true);
		return sendEmailVerification(auth.currentUser);
	}

	const updateUser = (userObj) => {
		setLoading(true);
		return updateProfile(auth.currentUser, userObj)
	}

	const login = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	}

	const loginWithPopup = (provider) => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	}

	const passwordReset = (email) => {
		setLoading(true);
		return sendPasswordResetEmail(auth, email);
	}

	const logout = () => {
		setLoading(true);
		localStorage.removeItem('geniusToken')
		return signOut(auth);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			// setUser(currentUser?.emailVerified ? currentUser : null); // Not use for popup login
			setUser(currentUser);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const authInfo = { user, loading, createUser, emailVerify, updateUser, login, loginWithPopup, passwordReset, logout };

	return <AuthContext.Provider value={authInfo}>
		{children}
	</AuthContext.Provider>
}
export default AuthProvider;