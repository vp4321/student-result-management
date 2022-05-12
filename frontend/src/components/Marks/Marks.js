import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../../App';

const Marks = () => {
    const [count, setCount] = useState(0);
    const [inputs, setInputs] = useState([<input />])
    const { userState, userDispatch } = useContext(userContext)
    const [subject, setSubject] = useState("")
    const [marks, setMarks] = useState(0)
    const [subjectMarks, setSubjectMarks] = useState([])
    const [removebtn, setRemovebtn] = useState(false)
    // handleSubjectChange=(e)=>{


    // }
    const handleClick = () => {
        // setSubjectMarks([...subjectMarks,{
        //     subject:subject,
        //     marks:marks
        // }])
        console.log(subjectMarks)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(subjectMarks)
    }
    const handleSave = () => {
        // setSubjectMarks([...subjectMarks,{
        //     subject:subject,
        //     marks:marks
        // }])
        const arrayvalue = [...subjectMarks];
        arrayvalue.push({
            subject: subject,
            marks: marks
        });
        setSubjectMarks(arrayvalue)
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
                    {count != 0 && <div >
                        <h3 className='my-5'>Subjects</h3>
                        <div className="">
                            {/* {inputs} */}
                            {
                                Array.from({ length: count }).map((_, id) =>
                                    <div className="row" key={id}>
                                        {!removebtn && <><div class="form-group col-5">
                                            <label for="session">Subject Name :</label>
                                            <input type="text" class="form-control" onChange={(e) => { setSubject(e.target.value) }} />
                                        </div>

                                        <div class="form-group col-5">
                                            <label for="session">Marks:</label>
                                            <input type="number" class="form-control" onChange={(e) => { setMarks(e.target.value) }} />
                                        </div>
                                        <div class="col-1  my-auto"><button  class="btn btn-danger text-center" onClick={()=>setRemovebtn(true)}>Remove</button></div>
                                        </>}
                                    </div>
                                    )
                            }
                        </div>

                    </div>}
                </div>
                <button type="submit" class="btn btn-info" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default Marks