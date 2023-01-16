import express from 'express';
import mysql from 'mysql';

const app = express();

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',

	password: 'superhemligt',
	database: 'test'
});

//if auth error then use this command in mysql
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'superhemligt';

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.json({ message: 'hello this is backend' });
});

app.get('/books', (req, res) => {
	const q = 'SELECT * FROM books';
	db.query(q, (err, data) => {
		if (err) {
			res.json({ message: err });
		} else {
			res.json({ message: data });
		}
	});
});

app.post('/books', (req, res) => {
	const q = 'INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)';
	const values = [ req.body.title, req.body.desc, req.body.cover ];

	db.query(q, [ values ], (err, data) => {
		if (err) return res.json(err);
		return res.json('book has been added');
	});
});

app.listen(3001, () => {
	console.log('Server is running on port 3001');
});
