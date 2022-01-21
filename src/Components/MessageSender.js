import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import '../Css/MessageSender.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SendIcon from '@mui/icons-material/Send';
import { useStateValue } from '../ContextApi/StateProvider';
import db from '../firebase';
import firebase from '@firebase/app-compat';

const MessageSender = () => {
    const [{ user }, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        
        if(input.trim() != "" || imageUrl.trim() != ""){
            //Some db Stuff
            db.collection("posts").add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                profilePic: user.photoURL,
                username: user.displayName,
                image: imageUrl,
            });
        }
        


        setInput("");
        setImageUrl("");
    }

    return (
        <div className="messageSender">
            
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)} 
                        className="messageSender__input" 
                        placeholder={`What's on your mind, ${user.displayName}`}
                     />

                    <input 
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="image URL (optional)" />
                
                    <button type="submit" onClick={handleSubmit} >
                        <SendIcon id="send_button" />

                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: "red"}} />  
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: "green"}} />  
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color: "orange"}} />  
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
