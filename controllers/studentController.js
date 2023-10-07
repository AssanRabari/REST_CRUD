import StudentModel from "../model/Student.js";

class StudentController {
    static createDoc = (req, res) => {
        res.send("Data is created");
    }

    static getAllDoc = (req, res) => {
        res.send("All dox");
    }

    static getSingleDocById = (req, res) => {
        res.send("get Single Doc By Id");
    }

    static updateDocById = (req, res) => {
        res.send("update doc");
    }

    static deleteDocById = (req, res) => {
        res.send("delete Doc By Id");
    }
}

export default StudentController;