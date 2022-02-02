import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core'
import {db,auth} from '../firebase'

function SendMessage() {

    const [msg, setMsg] = useState('')

    async function SendMessage(e){

        e.preventDefault()
        const {uid, photoURL} =auth.currentUser
        await db.collection(mess)
    }

    return <div>

        <form onSubmit={SendMessage}>

        <Input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="" />
        <Button type='submit'>Send</Button>

    </form>

    </div >;
}

export default SendMessage;
