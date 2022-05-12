import React, { useState, useEffect } from 'react'

const Marks = () => {
    const [count, setCount] = useState(0);
    const [inputs, setInputs] = useState([<input />])
    useEffect(() => setInputs(
        Array.from({ length: count }).map(_ =>
            <>
            <div class="form-group col-5">
                <label for="session">Subject Name :</label>
                <input type="text" class="form-control" />
                </div>
                <div class="col-1"></div>
                <div class="form-group col-5">
                <label for="session">Marks:</label>
                <input type="number" class="form-control" />
            </div>
            </>)
    ), [count])

    return (
        <div class="d-flex justify-content-center my-5 " >
            <form action="" style={{width:"30vw"}}>
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
                    <div className="row">
                    {inputs}
                    </div>
                    
                </div>}
                </div>
                <button type="submit" class="btn btn-info">Submit</button>
            </form>
        </div>
    )
}

export default Marks