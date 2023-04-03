import { CarauselList } from 'modals/testmodals';
import { connectMongo } from "utils/connectmongodb";

export default async function handler(req, res) {
  await connectMongo();
  const { method } = req;

  await connectMongo();
  const id = req.query.id
  switch (method) {
    
    case 'GET' : 
    try{
      const getdatabyid = await CarauselList.findById(id)
        res.status(200).json({getdatabyid});
    }catch(error){
      res.status(400).json({ message: 'Could not get data!' });
      console.log(error)
      
    }
    break;
  }
  

  switch (method) {
    case 'PATCH':
      try {
        const updatedata = await CarauselList.findByIdAndUpdate({_id : req.query.id} , {$set: {value: req.body}});
        console.log({value: req.body})
        res.status(200).json({updatedata});
      } catch (error) {
        console.log(error)
        res.status(400)
        // .json({ message: 'Could not update task!' });
      }
      break;
      
    default:
      res.status(400)
      // .json({ message: 'Invalid request method!' });
      break;
  }
}