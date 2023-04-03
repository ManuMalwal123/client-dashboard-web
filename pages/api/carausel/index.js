import nextConnect from "next-connect";
import multer from "multer";
import { CarauselList } from "modals/testmodals";
import { connectMongo } from "utils/connectmongodb";

const upload = multer({
  // Disk Storage option
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

//   const storage = multer.memoryStorage() // Memory Storage option pass along as stream
// const upload = multer({ storage: storage })

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `There was an error! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.array("files"))

//-------------------------------POST------------------------------//
.post( async (req, res) => {
  connectMongo();
  const myDoc = new CarauselList({
    _id: "Carausel",
    key: "Carausel",
   value: [
      ...req.files.map((file) => {
        {
          return {
            url: `/uploads/${file.filename}`,
            filename: file.filename,
            show: false,
          };
        }
      }),
   ],
  });
 await myDoc.save();
  res.status(200).json({ data: "Success" , data2 : myDoc});
})


//----------------------------------GET---------------------------------//
.get(async (req, res) => {
  const data = await CarauselList.findById({_id : "Carausel"})
  res.status(200).json({data});
})

//-------------------------------UPDATE-------------------------------//

.patch(async (req, res) => {
  connectMongo();

  const myDocUpdate = await CarauselList.findByIdAndUpdate(
    { _id: "Carausel" },
    {
      $push: {
        value: req.files.map((file) => {
          return {
            url: `/uploads/${file.filename}`,
            filename: file.filename,
            show: false,
          };
        })[0],
      },
    }
  );

  // myDocUpdate.save()
  res.status(200).json({ data: "Success", data2: myDocUpdate });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
