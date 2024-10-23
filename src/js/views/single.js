import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const { idContact } = useParams();
	const navigate = useNavigate();
	const [ currentContact, setCurrentContact ] = useState({
		name: "",
        email: "",
        phone: "",
        address: ""
	});

	const submitForm = async (e) => {
		e.preventDefault();
		try {
			await actions.updateContact(idContact, currentContact);
			navigate('/');
		} catch (error) {
			console.error("Error al actualizar el contacto", error);
		}
	};
	
	useEffect(()=>{
		let contact = store.contacts.find(contact => contact.id == idContact);
		if (contact) {
			setCurrentContact(contact);
		  } else {
			console.error("Contact not found");
		  }
	},[idContact, store.contacts])

	return (
		<div className="ms-5 me-5">
			<h1 className="text-center mt-4">Edit contact</h1>
			<form onSubmit={submitForm}>
				<div className="mb-3">
                    <label htmlFor="inputFullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="inputFullName" placeholder="Full Name" value={currentContact.name} onChange={(e) => setCurrentContact({ ...currentContact, name: e.target.value })}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" value={currentContact.email} onChange={(e) => setCurrentContact({ ...currentContact, email: e.target.value })}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPhone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="inputPhone" placeholder="Enter phone" value={currentContact.phone} onChange={(e) => setCurrentContact({ ...currentContact, phone: e.target.value })}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Enter address" value={currentContact.address}  onChange={(e) => setCurrentContact({ ...currentContact, address: e.target.value })}/>
                </div>
                <button type="submit" className="btn btn-primary w-100">save changes</button>		
			</form>
			<Link to="/">
				<span>or get back to contacts</span>
			</Link>
		</div>
	);
};
