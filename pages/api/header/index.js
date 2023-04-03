import {CarauselList} from 'modals/testmodals';
import { connectMongo } from "utils/connectmongodb";

export default async function handler(req, res) {
  await connectMongo();
  const { method } = req;

  await connectMongo();

  switch (method) {
    case 'GET':
      try {
        const task = await CarauselList.find();
        res.status(200).json({task});
      } catch (error) {
        res.status(400).json({ message: 'Task not found!' });
      }
      break;

      case 'POST':
        try {
        const newList = new CarauselList(req.body);
        console.log(req.body)

        await newList.save();
        
        res.status(201).json({ success: true , newList });
      } catch (error) {
        res.status(400).json({ success: false  , error});
      }
        break;
  
    default:
      res.status(400).json({ message: 'Invalid request method!' });
      break;
  }
}