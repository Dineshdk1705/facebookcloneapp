import React, { useState, useEffect } from 'react'
import '../Css/Feed.css'
import StoryReel from '../Components/StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from '../firebase'


const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({ id:doc.id, data:doc.data() })))
        );
    }, []);
  
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map((post) => (
                <Post
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}

            {/* <Post 
                profilePic="https://upload.wikimedia.org/wikipedia/commons/3/33/Mr._Bean_2011.jpg"
                message="Wow Great"
                timestamp="this is timestamp"
                username="DineshDk"
                image= "https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_1280.jpg" 
            /> */}
            
            
        </div>
    )
}

export default Feed
