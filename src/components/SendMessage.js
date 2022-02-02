import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core'
import { db, auth } from '../firebase'
import { addDoc, collection, serverTimestamp } from "firebase/firestore"


function SendMessage({ scroll }) {

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
        scroll.current.scrollIntoView({ behaviour: 'smooth' })
    }

    return <div>

        <form onSubmit={SendMessage}>

            <div className="sendMsg">
                <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px' }} type="submit">Send</Button>
            </div>
        </form>

    </div >;
}

export default SendMessage;
