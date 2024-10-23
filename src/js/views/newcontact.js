import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export function NewContact() {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
	const returnToContacts = () => {
		navigate("/")
	};
    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            name: e.target.inputFullName.value,
            email: e.target.inputEmail.value,
            phone: e.target.inputPhone.value,
            address: e.target.inputAddress.value
        };
        actions.addContact(newContact);
        returnToContacts();
    };

    return (
        <div className="ms-5 me-5">
            <h1 className="text-center mt-4">Add a new contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="inputFullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="inputFullName" placeholder="Full Name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Enter email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPhone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="inputPhone" placeholder="Enter phone"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Enter address"/>
                </div>
                <button type="submit" className="btn btn-primary w-100" onClick={(e) => actions.addContact()}>save</button>
            </form>
            <span onClick={returnToContacts} className="text-decoration-underline" style={{ cursor: "pointer" }}>or get back to contacts</span>
        </div>
    )
}
