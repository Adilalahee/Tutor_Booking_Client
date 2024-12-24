import React, { useState } from 'react';
import AuthContext from './AuthContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../Firebase/Firebase';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const googleProvider=new GoogleAuthProvider();

    const Googlesignin=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    const authInfo={
        user,
        loading,
        Googlesignin,
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;