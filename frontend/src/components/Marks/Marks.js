import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../../App';

const Marks = () => {
    const [count, setCount] = useState(0);
    const [inputs, setInputs] = useState([<input />])
    const { userState, userDispatch } = useContext(userContext)
    const [subject, setSubject] = useState("")
    const [marks, setMarks] = useState(0)
    const [subjectMarks, setSubjectMarks] = useState([{
        subject: "",
        marks: 0
    }])


    const handleChange = (e, id) => {

        let formValues = [...subjectMarks];
        formValues[id][e.target.name] = e.target.value
        setSubjectMarks(formValues)

    }
    const handleAdd = () => {
        console.log(subjectMarks);
        setSubjectMarks(
            [...subjectMarks, { subject: "", marks: 0 }]
        )
        console.log(subjectMarks);
    }


    const handleRemove = (id) => {

        let formValues = [...subjectMarks];
        console.log(formValues);
        formValues.splice(id, 1)
        console.log(formValues);
        setSubjectMarks(formValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(subjectMarks)
    }



    return (
        <div class="d-flex justify-content-center my-5 " >
            <form action="" style={{ width: "30vw" }} onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="session">Session :</label>
                    <input type="number" class="form-control" placeholder="Enter Session" id="email" />
                </div>
                <div class="form-group">
                    <label for="session">Total Marks :</label>
                    <input type="number" class="form-control" placeholder="Enter total marks" id="email" />
                </div>
                <div class="form-group">
                    <label for="session">Subjects :</label>
                    <input type="number" class="form-control" placeholder="Enter #subjects" id="email" value={count} onChange={(e) => setCount(e.target.value)} />
                </div>
                <div>
                    <div>
                        <h3 className='my-5'>Subjects</h3>
                        <div>
                            {
                                subjectMarks.map((subjectMark, id) =>
                                    <div className="row" key={id}>
                                        <div class="form-group col-5">
                                            <label for="session">Subject Name:</label>
                                            <input name="subject" type="text" class="form-control" onChange={(e) => handleChange(e, id)} />
                                        </div>

                                        <div class="form-group col-5">
                                            <label for="session">Marks:</label>
                                            <input name="marks" type="number" class="form-control" onChange={(e) => handleChange(e, id)} />
                                        </div>
                                        {id ?
                                            <div class="col-1  my-auto"><button class="btn btn-danger text-center" onClick={() => handleRemove(id)}>Remove</button></div>
                                            : null
                                        }


                                    </div>
                                )
                            }
                        </div>
                        <div class="col-1  my-auto d-flex text-left">
                        <button class="btn btn-info text-center m-2 " onClick={() => handleAdd()}>Add</button>
                            <button type="submit" class="btn btn-info m-2" >Submit</button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Marks