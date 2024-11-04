import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import amongus from '../assets/amongus.webp';
import { supabase } from './Client.js';

const EditPost = () => {

    const {id} = useParams();
    const { state } = useLocation();
    const [post, setPost] = useState({id: null, title: "", author: "", description: ""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updatePost = async (event) => {
        event.preventDefault();

        const { error } = await supabase
            .from('Members')
            .update({ name: post.name, color: post.color })
            .eq('id', id);

        if (error) {
            console.error("Error updating crewmate:", error);
        } else {
            window.location = "/gallery";
        }
    };

    const deletePost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Members')
          .delete()
          .eq('id', id); 
      
        window.location = "/gallery";
      }

    return (
        <div className="gallery-page">
            <div className="whole-page">
                <h1>Update Crewmate!</h1>
                <div className="gallery-image">
                    <img src={amongus} alt="Among Us" />
                </div>
                <div>
                    <h3>Current info:</h3>
                    <h2>{"Name: " + state.name + ", Color: " + state.color}</h2>

                </div>

                <form className="form-container" onSubmit={updatePost}>
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
                    <input type="submit" value="Update" onClick={updatePost} />
                    </div>

                    <div>
                        <input type="submit"  value="Delete" onClick={deletePost}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditPost;
