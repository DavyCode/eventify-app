import type { NextApiRequest, NextApiResponse } from 'next'

// import {
//   connectDatabase,
//   insertDocument,
//   getAllDocuments,
// } from '../../../helpers/db-util';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const eventId = req.query.eventId;

  // let client;

  // try {
  //   client = await connectDatabase();
  // } catch (error) {
  //   res.status(500).json({ message: 'Connecting to the database failed!' });
  //   return;
  // }

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
      res.status(422).json({ message: 'Invalid input.' });
      
      // client.close();
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    // TODO - SAVE DATA TO API DB
    // let result;
    // try {
    //   result = await insertDocument(client, 'comments', newComment);
    //   newComment._id = result.insertedId;
    //   res.status(201).json({ message: 'Added comment.', comment: newComment });
    // } catch (error) {
    //   res.status(500).json({ message: 'Inserting comment failed!' });
    // }
    res.status(201).json({ message: 'Added comment.', comment: newComment });
  }

  if (req.method === 'GET') {
    
    
    // try {
    //   const documents = await getAllDocuments(client, 'comments', { _id: -1 });
    //   res.status(200).json({ comments: documents });
    // } catch (error) {
    //   res.status(500).json({ message: 'Getting comments failed.' });
    // }

    // TODO - GET data from API DB
    res.status(200).json({ comments: [
      { _id: '1', name: 'Paul Thomas', text: 'Hello from this side' },
      { _id: '2', name: 'james calas', text: 'Hello from the other side' }
      ] 
    });
  }

  // client.close();
}

export default handler;