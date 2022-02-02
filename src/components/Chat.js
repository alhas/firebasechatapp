import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import SignOut from './SignOut';
import { collection, orderBy, limit, onSnapshot, getDocs, query, doc } from 'firebase/firestore'
import SendMessage from './SendMessage';

function Chat() {

    const [messages, setMessages] = useState([])

    useEffect(() => {

        onSnapshot((collection(db, 'messages')), orderBy('createdAt'), (querySnapshot) => {
            setMessages(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))

        })
    }, [])



    return (

        <div>
            <SignOut />
            {console.log(messages)}

            {messages.map(({ id, data, photoURL }) => (
                <div key={id}>
                    <img src={photoURL} alt='' />
                    <p>{data.text}</p>
                </div>
            ))}
            <SendMessage />
        </div>


    )

}
export default Chat;
