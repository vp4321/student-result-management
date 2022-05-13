const Student = require('../model/students');

const getstudentmarks = async(req, res) => {
  const student = await Student.find();
  if (!student) res.sendStatus(204);
  res.json(student);
};
const poststudentmarks = async(req, res) => {
  const {reg, session } = req.body;
  if (!reg || !session ) {
    console.log("error");
    return res.status(400).json({ message: "missing" });
  }
  try {
    const newstudent = await Student.create({
      "reg_no": reg,
      "sessionmarks": session
    });
    console.log(newstudent);
    res.status(201).send(newstudent);
} catch (err) {
    res.json({ message: err.message });
};
}
const specificstudent = async(req,res) => {
    const roll = req.params.roll;
    const student = await Student.findOne({reg_no : parseInt(roll)})
    if(!student){
        return res.status(400).json({
            'message' : 'Missing'
        })
    }
    res.send(student)
    // console.log(student.sessionmarks)
}

module.exports = { getstudentmarks, poststudentmarks,specificstudent}
