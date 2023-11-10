// Group 3 Patient Management System

let SERVER_NAME = 'patient-api'
let PORT = 8000;
let HOST = '127.0.0.1';

const mongoose = require ("mongoose")

let  uristring = 'mongodb+srv://mapd713group3-1:H0Mh0FEwEbXC4uwh@cluster0.dk8rzte.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(uristring, {useNewUrlparser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=>{
  //connected!
  console.log("!!!! Connected to db: " + uristring)
});

// const readingSchema = new mongoose.Schema({
//   diastolic: Number,
//   systolic: Number
// });

 const patientSchema = new mongoose.Schema({
    name: String,
    Contact: String,
    Allergies: String,
    Roomnumber: String,
    DOb: String,
    medcondition: String
 });

// //compiles the schema into a model, opening (or creating, if non existent) the 'User' collection in the mongoDB database
let PatientsModel = mongoose.model('patients', patientSchema);


let errors = require('restify-errors');
let restify = require('restify')

// Get a persistence engine for the patient
  , patientsSave = require('save')('patients')

  // Create the restify server
  , server = restify.createServer({ name: SERVER_NAME })

server.listen(PORT, HOST, function () {
  console.log('Server %s listening at %s', server.name, server.url)
  console.log('**** Resources: ****')
  console.log('********************')
  console.log(' /patients')
  console.log(' /patients/:id')
})

server.use(restify.plugins.fullResponse());
server.use(restify.plugins.bodyParser());

// Get all patients in database
server.get('/patients', function (req, res, next) {
  console.log('GET /patients');

  //find every entity on db
  PatientsModel.find({})
    .then((patients)=>{
      //return all patient in the system
      res.send(patients);
      return next();
    })
    .catch((error)=>{
      return next(new Error(JSON.stringify(error.errors)));
    })

  // // Find every entity within the given collection
  // patientsSave.find({}, function (error, patients) {

  //   // Return all of the patients in the system
  //   res.send(patients)
  // })
})

// Get a single Patient by their user id
server.get('/patients/:id', function (req, res, next) {
  console.log('GET /patients/:id params=>' + JSON.stringify(req.params));

  //find a single user by their id on db
  PatientsModel.findOne({ _id: req.params.id})
    .then((patient)=>{
      console.log("found patient:" + patient);
      if (patient){
        //send patient if no issue
        res.send(patient)
      } else{
        //send 404 header if the user doesnt exist
        res.send(404)
      }
      return next();
    })

    .catch((error)=>{
      console.log("error:" +error);
      return next(new error(JSON.stringify(error.errors)));
    })

  // // Find a single patient by their id within save
  // patientsSave.findOne({ _id: req.params.id }, function (error, patient) {

  //   // If there are any errors, pass them to next in the correct format
  //   if (error) return next(new Error(JSON.stringify(error.errors)))

  //   if (patient) {
  //     // Send the patient if no issues
  //     res.send(patient)
  //   } else {
  //     // Send 404 header if the user doesn't exist
  //     res.send(404)
  //   }
  // })
})


// Create a new patient
server.post('/patients', function (req, res, next) {
  console.log('POST /patients params=>' + JSON.stringify(req.params));
  console.log('POST /patients body=>' + JSON.stringify(req.body));

  let newPatient = new PatientsModel ({
    name: req.body.name,
    Contact: req.body.Contact,
    Allergies: req.body.Allergies,
    Roomnumber: req.body.Roomnumber,
    DOb: req.body.DOb,
    medcondition: req.body.medcondition  

  });
  newPatient.save()
    .then((patient)=>{
      console.log("saved patient:" + patient);
        //send patient if no issue
        res.send(201, patient)
        return next();
    })

    .catch((error)=>{
      console.log("error:" +error);
      return next(new error(JSON.stringify(error.errors)));
    })

  // // Create the patient using the persistence engine
  // patientsSave.create(newPatient, function (error, patient) {
  
  //   // If there are any errors, pass them to next in the correct format
  //   if (error) return next(new Error(JSON.stringify(error.errors)))

  //   // Send the patient if no issues
  //   res.send(201, patient)
  // })
})

// // Update a patient by their id
server.put('/patients/:id', function (req, res, next) {
console.log('POST /patients params=>' + JSON.stringify(req.params));
console.log('POST /patients body=>' + JSON.stringify(req.body));

PatientsModel.findOne({ _id: req.params.id })
.then((patient) => {
  
  if (!patient) {
    // If the patient doesn't exist, send a 404 response
    res.send(404, 'User not found');
    return next();
  }
  
  // Update patient fields with the new data
  patient.name = req.body.name || patient.name;
  patient.Contact = req.body.Contact || patient.Contact;
  patient.Allergies = req.body.Allergies|| patient.Allergies;
  patient.Roomnumber = req.body.Roomnumber || patient.Roomnumber;
  patient.DOb = req.body.DOb || patient.DOb;
  patient.medcondition = req.body.medcondition || patient.medcondition;
  
  // Save the updated patient to the database
  return patient.save();
})
  .then((updatedPatient) => {
console.log('Updated User:', updatedPatient);
// Send the updated patient as a response
  res.send(200, updatedPatient);
  return next();
})
  .catch((error) => {
  console.log('Error:', error);
  return next(new Error(JSON.stringify(error.errors)));
});
 })

// Delete patient with the given id
server.del('/patients/:id', function (req, res, next) {
  console.log('DELETE /patients/:id');

  PatientsModel.findOneAndDelete({ _id: req.params.id})
    .then((deletePatient)=>{
      console.log("deleted patient:" + deletePatient);
      if (deletePatient){
        //send patient if no issue
        res.send(202, deletePatient)
      } else{
        //send 404 header if the user doesnt exist
        res.send(404, "patient not found");
      }
      return next();
    })

    .catch((error)=>{
      console.log("error:" +error);
      return next(new Error(JSON.stringify(error.errors)));
    })

  // // Delete the patient with the persistence engine
  // patientsSave.deleteMany({}, function (error) {

  //   // If there are any errors, pass them to next in the correct format
  //   if (error) return next(new Error(JSON.stringify(error.errors)))

  //   // Send a 204 response
  //   res.send(204)
  // })
})

