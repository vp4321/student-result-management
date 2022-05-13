const Student = require('../model/students');

const getstudentmarks = async(req, res) => {
  const student = await Student.find();
  if (!student) res.sendStatus(204);
  res.json(student);
};
const specificstudent = async(req,res) => {
    const roll = req.params.roll;
    const student = await Student.findOne({reg_no : parseInt(roll)})
    if(!student){
        return res.status(400).json({
            'message' : 'Missing'
        })
    }
    res.send(student.sessionmarks)
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

const updatestudentmarks = async(req,res) => {
  const roll = req.params.roll;
  const session = req.params.session; 

  const student = await Student.findOne({reg_no : parseInt(roll)})
  if(!student) {
    try {
      const newstudent = await Student.create({
        "reg_no": roll,
        "sessionmarks": [{
          "session" : session,
          "subjectmarks" : [{
              "subject" : req.body.subject,
              "marks" : req.body.marks
          }]
        }]
      });
      console.log(newstudent);
      return res.status(201).send(newstudent);
  } catch (err) {
      return res.json({ message: err.message });
  };
  }
  let studentsessionmarks = student.sessionmarks
  var sessionobj = studentsessionmarks.find(item => item.session == session)
  let pairs = sessionobj.subjectmarks
  const detail = {
    subject : req.body.subject,
    marks : req.body.marks
  }
  pairs = [...pairs,detail]

  studentsessionmarks.forEach((item,index) => {
    if(item.session == session) {
      item.subjectmarks = pairs
    }
  });
  student.sessionmarks = studentsessionmarks
  var newvalues = { $set: student };
  await Student.updateOne({"reg_no" : parseInt(roll)},newvalues);
  const student2 = await Student.findOne({reg_no : parseInt(roll)})
  res.send(student2.sessionmarks)
}

module.exports = { getstudentmarks,specificstudent,specificsessionmarks,specificsubjects,totalsessions,updatestudentmarks}
