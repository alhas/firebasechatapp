import React from 'react';
import { Button } from '@material-ui/core'
import { auth } from '../firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


function SignIn() {

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((re) => {

                console.log(re);
            }).catch((err) => {

                console.log(err);

            })

    }
    return (

        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={signInWithGoogle}>Sign In With Google</Button>

        </div>
    )
}

export default SignIn;



