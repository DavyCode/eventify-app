import type { NextApiRequest, NextApiResponse } from 'next'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const eventId = req.query.eventId;

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
      res.status(422).json({ message: 'Invalid input.' });
      
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    // TODO - SAVE DATA TO API DB
    res.status(201).json({ message: 'Added comment.', comment: newComment });
  }

  if (req.method === 'GET') {
    
    // TODO - GET data from API DB
    res.status(200).json({ comments: [
      { _id: '1', name: 'Paul Thomas', text: 'Hello from this side' },
      { _id: '2', name: 'james calas', text: 'Hello from the other side' }
      ] 
    });
  }
}

export default handler;