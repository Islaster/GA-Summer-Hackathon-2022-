import React, { useState } from 'react';
import Axios from 'axios';
import './post.css';

function Post() {
	const url = '';
	const [data, setData] = useState({
		name: "",
		location: "",
		time: "",
		dateAvaiable: "",
		food: "",
		description: "",
		allergens: "",
	})
	function submit(e){
		console.log(data.location)
		e.preventDefault();
		Axios.post(url, {
			name: data.name,
			location: data.location,
			dateAvaiable: data.date,
			food: data.food,
			description: data.description,
			allergens: data.allergens
		})
		.then(res => {
			console.log(res.data)
		})
	}

	function handle(e){
		const newdata = {...data}
		newdata[e.target.id] = e.target.value
		setData(newdata)
		console.log(newdata)
	}

  return (
	<div className="main">
		<input onChange={(e) => handle(e)}  ></input>
	<div className="sub-main">
		<form className="form" onSubmit={(e) => submit(e)}>

			<input onChange={(e) => handle(e)} className="second-input"  placeholder="Name" value={data.name}/>
		
			<input onChange={(e) => handle(e)} className="second-input" value={setData.location} placeholder="Location" type="location" ></input>
			<input onChange={(e) => handle(e)} className="second-input" value={data.date} placeholder="Date" type="date" ></input>
			<input onChange={(e) => handle(e)} className="second-input" value={data.time} placeholder="Time" type="time" ></input>
			<input onChange={(e) => handle(e)} className="second-input" value={data.food} placeholder="Food" type="text" ></input>
			<input onChange={(e) => handle(e)} className="second-input" value={data.description} placeholder="Description" type="text" ></input>
			<input onChange={handle} className="second-input" value={data.allergens} placeholder="Allergens" type="text" ></input>
			<button className="submit-button">Submit</button>
		</form>
	</div>
	</div>
  )
}

export default Post;