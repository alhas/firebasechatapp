import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core'
import { db, auth } from '../firebase'
import { addDoc, collection, serverTimestamp } from "firebase/firestore"


function SendMessage() {

    const [msg, setMsg] = useState('')

    async function SendMessage(e) {

        e.preventDefault()
        const { uid, photoURL } = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: msg,
            photoURL,
            uid,
            createdAt: serverTimestamp()
        })
        setMsg('')
    }

    return <div>

        <form onSubmit={SendMessage}>

            <Input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="" />
            <Button type='submit'>Send</Button>

        </form>

    </div >;
}

export default SendMessage;
