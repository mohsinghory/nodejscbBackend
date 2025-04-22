const express = require('express');
const app = express();
const connection = require('./db'); // Import your database connection
const path =require('path'); 
const bodyParser = require('body-parser');
const methodOverride=require("method-override")
const PORT = 3000; // You can choose any port
const cors = require('cors');

// calling our API from counselingPage
const counselingRouter = require('./API/legacy/client/v1/Resource/counselingpage/counselinghero.js');
const counselingcard = require('./API/legacy/client/v1/Resource/counselingpage/counselingcard.js');
const counselingprocess = require('./API/legacy/client/v1/Resource/counselingpage/counselingprocess.js');
const form = require('./API/legacy/client/v1/Resource/counselingpage/form.js');

// calling our API from counselinglandingPage
const counselinghero = require('./API/legacy/client/v1/Resource/counselinglandingpage/counselinglandingpagehero.js');
const counselingabout = require('./API/legacy/client/v1/Resource/counselinglandingpage/aboutcounseling.js');
const counselingcollections = require('./API/legacy/client/v1/Resource/counselingcollectiondata/counselingcollections.js');
const sidebar = require('./API/legacy/client/v1/Resource/counselinglandingpage/sidebar.js');
const counselingkeypoints = require('./API/legacy/client/v1/Resource/counselinglandingpage/keypointscounseling.js');
const processcounseling = require('./API/legacy/client/v1/Resource/counselinglandingpage/counselingsteps.js');
const eligibilitycounsel = require('./API/legacy/client/v1/Resource/counselinglandingpage/eligibilitycounseling.js');
const datecounsel= require('./API/legacy/client/v1/Resource/counselinglandingpage/datecounseling.js');
const documentcounsel= require('./API/legacy/client/v1/Resource/counselinglandingpage/documentcounseling.js');
const contactcounsel= require('./API/legacy/client/v1/Resource/counselinglandingpage/contactcounseling.js');
const counselingfaq= require('./API/legacy/client/v1/Resource/counselinglandingpage/faqcounseling.js');

app.use(bodyParser.json());
app.use(express.urlencoded({extended:true})); 
app.use(express.static(path.join(__dirname,"/public")));
app.use(methodOverride("_method"))
app.use(cors());


app.use("/", counselingRouter);
app.use("/", counselingcard);
app.use("/", counselingprocess);
app.use("/", form);
app.use("/", counselinghero);
app.use("/", counselingabout);
app.use("/", counselingcollections);
app.use("/", sidebar);
app.use("/", counselingkeypoints);
app.use("/", processcounseling);
app.use("/", eligibilitycounsel);
app.use("/", datecounsel);
app.use("/", documentcounsel);
app.use("/", contactcounsel);
app.use("/", counselingfaq);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
