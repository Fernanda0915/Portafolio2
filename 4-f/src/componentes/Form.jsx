import {React, useState} form 'react';

export default function Form(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState ('');

    const fullname = firstName + '' + lastName

    function handleFirstNameChange(e){
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e){
        setLastName(e.target.value);
    }

    return(
        <>
            <h2>SignUp</h2>
            <div className= "row">
                <div className="col -8">
                <form action ="" class = "form">
                <label></label>
                <input class = "form-control" type="text" value={firstName} onChange={handleFirstNameChange}

                <label class="form-control" htmlFor="lastName">Last Name: </label>
                <input> class="form-control" type="text" value={lastName} onChange={}</input>
                
            </form>
                </div>
            </div>

        </>
    );
}