import express from 'express'
import bodyParser from 'body-parser'
import student from './studentschema.js'
import studentdata from './database.js'

const app=express()
app.use(bodyParser.json())



app.get('/data',async(req,res)=>{

    const data=await student.find()
    res.send(data)
})
app.post('/add_data', async (req, res) => {
    const details = req.body;

    const register = new student({
        "first_name": details.first_name,
        "last_name": details.last_name,
        "Gender": details.Gender,
        "Dateofbirth": details.Dateofbirth,
        "email": details.email,
        "mobile_number": details.mobile_number,
        "student_aadhar_number": details.student_aadhar_number,
        "caste": details.caste,
        "nationality": details.nationality,
        "religion": details.religion,
        "subcaste": details.subcaste,
        "identification_marks": details.identification_marks
    });

    await register.save();
    res.send("data added");
});



app.listen(1025,()=>{
    studentdata();
    console.log("server started")
})
