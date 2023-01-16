import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Books = () => {
	const [ books, setBooks ] = useState([]);

	useEffect(() => {
		const fetchAllBooks = async () => {
			try {
				const res = await axios.get('http://localhost:3001/books');
				console.log(res);
			} catch (err) {
				console.log(err);
			}
		};
		fetchAllBooks();
	}, []);
	return (
		<div>
			<h1>Books</h1>
		</div>
	);
};

export default Books;
