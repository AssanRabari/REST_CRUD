import StudentModel from "../model/Student.js";

class StudentController {
    static createDoc = async (req, res) => {
        try {
            const {name, age, fees} = req.body
            const doc = new StudentModel({
                name:name,
                age:age,
                fees:fees
            })
            const result = await doc.save();
            res.status(201).send(result);
        } catch (error) {
            console.log(error,"Creating error")
        }
    }

    static getAllDoc = async (req, res) => {
        
        try {
            const result = await StudentModel.find();
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }

    static getSingleDocById = async (req, res) => {
        try {
            const result = await StudentModel.findById(req.params.id);
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }

    static updateDocById = (req, res) => {
        res.send("update doc");
    }

    static deleteDocById = async (req, res) => {
        try {
            const result = await StudentModel.deleteOne(req.params.id);
            res.send("Record Deleted Successfully")
        } catch (error) {
            console.log(error)
        }
    }
}

export default StudentController;