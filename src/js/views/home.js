import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import contactImage from "../../img/puma-1.jpeg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context)
	const navigate = useNavigate();
    const handleAddContact = () => {
        navigate("/add-new-contact");
    };
    const handleDeleteContact = (id) => {
        actions.deleteContact(id);
    };

	useEffect(()=> {
		actions.getAllContacts();
	}, [])


	return (
		<div className="ms-4 me-4 mt-3">
			<div className="text-end mb-3">
				<button type="button" onClick={handleAddContact} className="btn btn-success">Add new contact</button>
			</div>
			<div>
				<ul className="list-group">
					{store.contacts.map(contact =>
						<li className="list-group-item" key={contact.id}>
							<div className="card border-0">
								<div className="row g-0">
									<div className="col-2 d-flex justify-content-center align-items-center">
										<img src={contactImage} className="rounded-circle w-50"/>
									</div>
									<div className="col-8 d-flex justify-content-center align-items-center">
										<div class="card-body">
											<h1 class="card-title"  style={{ fontSize: '20px' }}>{contact.name}</h1>
											<div className="d-flex align-items-center">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  													<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
												</svg>
												<p class="card-text" style={{ fontSize: '18px', marginLeft: '6px' }}>{contact.address}</p>
											</div>
											<div className="d-flex align-items-center">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  													<path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
												</svg>
												<p class="card-text" style={{ fontSize: '16px', marginLeft: '10px' }}>{contact.phone}</p>
											</div>
											<div className="d-flex align-items-center">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  													<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
												</svg>
												<p class="card-text" style={{ fontSize: '15px', marginLeft: '10px' }}><small>{contact.email}</small></p>
											</div>
										</div>
									</div>
									<div className="col-2 d-flex justify-content-end align-items-start">
										<Link to={"/contact/"+contact.id}>
											<button type="button" className="btn">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  													<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
												</svg>
											</button>
										</Link>
										<button type="button" className="btn" onClick={() => handleDeleteContact(contact.id)}>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-trash-fill" viewBox="0 0 16 16">
												<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</li>					
					)}
				</ul>
			</div>
		</div>
	);
};
