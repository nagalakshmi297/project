import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    Gender: {
        type: String
    },
    Dateofbirth: {
        type: Date // Changed to Date data type
    },
    email: {
        type: String
    },
    mobile_number: {
        type: Number
    },
    student_aadhar_number: {
        type: String // Changed to String data type
    },
    caste: {
        type: String
    },
    nationality: {
        type: String
    },
    religion: {
        type: String
    },
    subcaste: {
        type: String
    },
    identification_marks: {
        type: String
    }
});

const student = mongoose.model("student", studentSchema);

export default student;
