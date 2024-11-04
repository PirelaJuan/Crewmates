import React, { useEffect, useState } from "react";
import { supabase } from "./Client.js";
import Card from './Card.jsx'; 

const ReadPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from('Members')
                .select();
                

            if (error) {
                console.error("Error fetching posts:", error);
            } else {
                setPosts(data);
            }
            setLoading(false);
        };

        fetchPosts();
    }, []); 

    return (
        <div className="whole-page">
            <div className="ReadPosts">
                {loading ? (
                    <h2>Loading...</h2>

                ) : posts && posts.length > 0 ? (
                    posts.map((post) => 
                        <Card key={post.id} id={post.id} name={post.name} color={post.color} />
                    )
                ) : (
                    <a href="/create"><button>No Crewmate made it yet, Create One!!</button> </a>
                    
                    
                    
                )}
            </div>
        </div>
    );
};

export default ReadPosts;