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
            <div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Zone</label>
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue>Choose your service</option>
                    <option defaultValue="{1}">Stanndar</option>
                    <option defaultValue="{2}">Premium</option>
                    <option defaultValue="{3}">Deluxe</option>
                </select>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Schedule</label>
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue>Choose a schedule</option>
                    <option defaultValue>10:00</option>
                    <option defaultValue>11:00</option>
                    <option defaultValue>12:00</option>
                    <option defaultValue>13:00</option>
                    <option defaultValue>14:00</option>
                    <option defaultValue>15:00</option>
                    <option defaultValue>16:00</option>
                    <option defaultValue>17:00</option>
                    <option defaultValue>18:00</option>
                    <option defaultValue>19:00</option>
                    <option defaultValue>20:00</option>
                    <option defaultValue>21:00</option>
                </select>
                </div>
            </div>
            </div>

        </div>


    );
};

export default Form;