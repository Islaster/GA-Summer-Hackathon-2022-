import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Form.css';

function Form() {
	const navigate = useNavigate();
	const [comment, setComment] = useState({
		name: '',
		comment: '',
	});

	const handleChange = event => {
		setComment({ ...commentsSchema, [event.target.id]: event.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		axios
			.patch(`add endpoint/`, commentsSchema)
			.then(res => {
				console.log(res);
				if (res.status === 200) {
					navigate('/');
				} else {
					alert(
						"We're sorry. We were not able to process your comment. Please try again."
					);
				}
			})
			.catch(err => console.log(err));
	};

	return (
	<>
		<div className="master-container">
			<div className="card-title">
				Please post a comment
			</div>
			
			<form onSubmit={handleSubmit}
				<label>
					Name:
					<input
						onChange={handleChange}
						type="text"
						id="name"
						value={commentsSchema.name}
						placeholder="name"
						required
					/>
				</label>
				<label>
					Comment:
					<input
						onChange={handleChange}
						type="text"
						id="comment"
						value={commentsSchema.comment}
						placeholder="comment"
						required
					/>
				</label>
				<label>
					<button type="submit" className="addUpdateButton">Submit to Update
					</button>
				</label>
			</form>
		</div>
	</>
	);
}

export default Form;