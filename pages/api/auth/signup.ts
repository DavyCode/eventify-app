// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

async function signupHandler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return;
  }
  
  const data = req.body;
  
  const { email, password } = data;

  // TODO - Validate on backend
  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ 
      message: 'Invalid input - password length 7 characters.' 
    });
    return; 
  }

  // TODO - TALK TO BACKEND API HERE

  
  res.status(201).json({ message: 'Created user!' });
}

export default signupHandler; 