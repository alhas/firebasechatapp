import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import SignOut from './SignOut';
import { collection, orderBy, limit, onSnapshot, getDocs, query, doc } from 'firebase/firestore'

function Chat() {

    const [messages, setMessages] = useState([])

    
    useEffect(() => {
        
        onSnapshot((collection(db,'messages')), (querySnapshot) => {
            setMessages(querySnapshot.docs.map(doc => ({

                    id: doc.id,
                    data: doc.data()
            })))
        
        })
    }, [])



    /* useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, []) */

    return (

        <div>
            <SignOut />
            {console.log(messages)}
            {messages.map(({id,text}) => (
                <div key={id}>
                    <p>{JSON.stringify(messages)}</p>
                </div>
            ))}

        </div>


    )

}
export default Chat;
