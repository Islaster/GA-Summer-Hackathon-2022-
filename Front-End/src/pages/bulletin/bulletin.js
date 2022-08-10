import React, { useState, useEffect, Components } from 'react'
import { Link } from 'react-router-dom'
// placeholder
import posts from '../components/posts';
import axios from 'axios'
import './bulletin.css'
import { env } from 'process';

const DATABASE_URL = env.DATABASE_URL
const [posts, setPosts] = useState([]);
const bulletin = () => {
    
const editPost = (event, postData) =>{
    event.preventDefault()
    axios
    .put(
        DATABASE_URL + `feed/${posts._id}`,
        {
            name: posts.name,
            zipcode: posts.zipcode,
            dateAvailable: posts.dateAvailable,
            time: posts.time,
            food: posts.food,
            description:posts.description,
            allergens: posts.allergens   
        }
    )
    .then(() =>{
        event.target.reset()
        axios
        .get(DATABASE_URL +`feed/`)
        .then((response) => {
            setPosts(response.data)
        })
    })
}
const deletePost = (postData)=>{
    axios
        .delete(DATABASE_URL + `feed/${postData._id}`)
        .then(()=>{
            axios
                .get(DATABASE_URL + `feed/`)
                .then((response) => {
                    setPosts(response.data)
            })
        })
}
    return(
        <main>
            <section>
                posts.map((posts) => {
                    <div>
                        posts.name
                        posts.zipcode
                        posts.dateAvailable
                        posts.time
                        posts.food
                        posts.description
                        posts.allergens  
                        <button onClick={editPost}>Edit Listing</button>
                        <button onClick={deletePost}>Delete Listing</button>
                    </div>
    
                })
            </section>
        </main>
    )
}