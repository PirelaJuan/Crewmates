import React, { useState } from "react";
import amongus from '../assets/amongus.webp';
import { supabase } from './Client.js';

function Create() {
    const [post, setPost] = useState({ name: "", color: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const createPost = async (event) => {
        event.preventDefault();
           
         await supabase
        .from('Members')
        .insert([
            { name: post.name, color: post.color },
        ])
        .select()
        
        window.location = "/";
    };

    return (
        <div className="gallery-page">
            <div className="whole-page">
                <h1>Create a New Crewmate</h1>
                <div className="gallery-image">
                    <img src={amongus} alt="Among Us" />
                </div>
                <form className="form-container" onSubmit={createPost}>
                    <div className="mini-container">
                        <h3>Name:</h3>
                        <input 
                            type="text" 
                            id="name"
                            name="name"  
                            placeholder="Enter crewmate's name" 
                            onChange={handleChange} 
                        />
                    </div>
                    
                    <div className="mini-container">
                        <h3>Color:</h3>
                        {['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Orange', 'Pink'].map(color => (
                            <div key={color}>
                                <input 
                                    id={color} 
                                    name="color" 
                                    type="radio" 
                                    value={color} 
                                    checked={post.color === color}
                                    onChange={handleChange} 
                                />
                                {color}
                            </div>
                        ))}
                    </div>
                    <div>
                    <input type="submit" value="Submit" onClick={createPost} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Create;
