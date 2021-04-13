// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axiosData from '../../../services/axiosData';
import config from '../../../config/env'

async function signupHandler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return;
  }
    
  const { email, password } = req.body;

  if (!email || !email.includes('@') || !password || password.trim().length < 7) {
    res.status(422).json({
      message: 'Invalid input - password length 7 characters.' 
    });
    return; 
  }

  try {
    const { data, error } = await axiosData({
      url: `${config.apiGateway.REACT_APP_BASE_API_URL}/auth`,
      method: "POST",
      data: JSON.stringify(req.body),
      signal: false,
      params: {}
    });    
     
    if (!data && !error) {
      res.status(400).json({ error: 'Server not reachable' });
    }
    if (!data) {
      res.status(400).json({ error: error.response ? error.response.data.error : 'Internal Server Error' });
    }
    else {
      res.status(200).json({ data, message: 'Created user!' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message || 'Server not reachable' });
  }
}

export default signupHandler; 