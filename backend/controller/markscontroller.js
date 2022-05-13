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
const specificsessionmarks = async(req,res) => {
    const roll = req.params.roll;
    const session = req.params.session;
    const student = await Student.findOne({reg_no : parseInt(roll)})
    // {session : parseInt(session)}
    let sessionmarks = student.sessionmarks

    if(!student){
        return res.status(400).json({
            'message' : 'Missing'
        })
    }
    // console.log(sessionmarks)
    var subjectmarks = sessionmarks.find(item => item.session == session)
    res.send(subjectmarks.subjectmarks)
}
const totalsessions = async(req,res) => {
  const roll = req.params.roll;
  const student = await Student.findOne({reg_no : parseInt(roll)})
  // {session : parseInt(session)}
  let sessionmarks = student.sessionmarks

  if(!student){
      return res.status(400).json({
          'message' : 'Missing'
      })
  }
  // console.log(sessionmarks)
  var sessions = sessionmarks.map(item => item.session)
  res.send(sessions)
}
const specificsubjects = async(req,res) => {
  const roll = req.params.roll;
  const student = await Student.findOne({reg_no : parseInt(roll)})
  // {session : parseInt(session)}
  const session = req.params.session;
  let sessionmarks = student.sessionmarks

  if(!student){
      return res.status(400).json({
          'message' : 'Missing'
      })
  }
  // console.log(sessionmarks)
  var subjectmark = sessionmarks.find(item => item.session == session)
  var subjectmarks=subjectmark.subjectmarks
  // console.log(subjectmarks);
  var subjects = subjectmarks.map(value => value.subject)
  // console.log(subjects);
  res.send(subjects)
}

module.exports = { getstudentmarks, poststudentmarks,specificstudent,specificsessionmarks,specificsubjects,totalsessions}
