import React from "react";


const Form = () => {
    return (
        <div>
            <h1>Reservation</h1>
            <div className="row">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Reservation Name:</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Add an identificator name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Add a contact number" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Zone</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Choose your service</option>
                        <option value="1">Stanndar</option>
                        <option value="2">Premium</option>
                        <option value="3">Deluxe</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Schedule</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Choose a schedule</option>
                        <option value="">10:00</option>
                        <option value="">11:00</option>
                        <option value="">12:00</option>
                        <option value="">13:00</option>
                        <option value="">14:00</option>
                        <option value="">15:00</option>
                        <option value="">16:00</option>
                        <option value="">17:00</option>
                        <option value="">18:00</option>
                        <option value="">19:00</option>
                        <option value="">20:00</option>
                        <option value="">21:00</option>
                    </select>
                </div>
            </div>
        </div>


    );
};

export default Form;