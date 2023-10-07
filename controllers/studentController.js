import StudentModel from "../model/Student.js";

class StudentController {
    static createDoc = async (req, res) => {
        try {
            req.data
        } catch (error) {
            
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