import axios from 'axios';

export default async function handler(req, res) {
  try {
    if (axios) {
      res.status(200).json({ message: 'Axios is installed and working!' });
    } else {
      res.status(500).json({ error: 'Axios is not available' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Axios import failed', details: err.message });
  }
}
