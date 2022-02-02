import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from '../firebase';
import SignOut from './SignOut';
import { collection, orderBy, limit, onSnapshot, getDocs, query } from 'firebase/firestore'
import SendMessage from './SendMessage';

function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])

    useEffect(() => {

        const collectionReg = collection(db, 'messages');
        const q = query(collectionReg, orderBy('createdAt', 'asc'), limit(50))

        const unsub = onSnapshot(q, (querySnapshot) => {
            setMessages(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))

        })
        return unsub;
    }, [])



    return (

        <div>
            <SignOut />
            <div className="msgs">
                {messages.map(({ id, data }) => (
                    <div>
                        <div key={id} className={`msg ${data.uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={data.photoURL} alt='' />
                            <p>{data.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>


    )

}
export default Chat;
