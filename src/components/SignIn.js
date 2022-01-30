import React from 'react';
import { Button } from '@material-ui/core'
import {signInWithGoogle} from '../firebase'


function SignIn() {
    

    return (


        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <div>bahtiyar</div>

            <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={signInWithGoogle}>Sign In With Google</Button>

        </div>
    )
}

export default SignIn;



