// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';


// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;


// app.use(cors());
// app.use(express.json());
// app.get('/', (req, res) => {
//   res.send('Server is running!');
// });
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Serve frontend files from "public" folder
app.use(express.static('public'));

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

