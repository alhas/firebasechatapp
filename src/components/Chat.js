import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import SignOut from './SignOut';
import { collection, orderBy, limit, onSnapshot, getDocs, query, doc } from 'firebase/firestore'

function Chat() {

    const [messages, setMessages] = useState([])
  
    useEffect(() => {

        onSnapshot((collection(db, 'messages')), (querySnapshot) => {
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
            
            {messages.map(({ id, data }) => (
                <div key={id}>
                    <p>{data.text}</p>
                    <p>{data.text}</p>
                </div>
            ))}

        </div>


    )

}
export default Chat;
