import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true
  },
  age:{
    type:Number,
    required:true
  },
fees:{
    type:mongoose.Decimal128,
    required:true,
    validation:(value) => value >= 5000.5
  }
})

const StudentModel = mongoose.model("student", studentSchema)
export default StudentModel