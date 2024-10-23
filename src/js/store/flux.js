const url = "https://playground.4geeks.com/contact/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		
		store: {
			contacts: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getAllContacts: async () => {
				try {
					const allContacts = await fetch(url+"agendas/vinkavladislavic/contacts")
					if (!allContacts.ok) {
						throw new Error("Error fetching contacts");
					}
					const allContactsData = await allContacts.json();
					setStore({contacts: allContactsData.contacts})
				} catch(error) {
					console.error("Error fetching contacts", error)
				}

			},
			addContact: async (contactData) => {
				try {
					const addedContact = await fetch(url+"agendas/vinkavladislavic/contacts", {
						headers: {
							"Content-Type": "application/json"
						},
						method: "POST",
						body: JSON.stringify(contactData)
					})
					if (!addedContact.ok) {
						throw new Error("Error adding contact");
					}
					const addedContactData = await addedContact.json();
					const newList = [...getStore().contacts, addedContactData];
					setStore({ contacts: newList }); 
				} catch(error) {
					console.error("Error adding contact", error)
				}
			},
			updateContact: async (id, newData) => { 
				try {
					const updatedContact = await fetch(url+"agendas/vinkavladislavic/contacts/"+id, {
						headers: {
							"Content-Type": "application/json"
						},
						method: "PUT",
						body: JSON.stringify(newData)
					})
					if (!updatedContact.ok) {
						throw new Error("Error updating contact");
					}
					const updatedContactData = await updatedContact.json();
					console.log("Datos actualizados del contacto:", updatedContactData);
					const newList = [...getStore().contacts]
					const selectedIndex = newList.findIndex(contact => contact.id == id)
					newList[selectedIndex] = updatedContactData;
					setStore({contacts: newList})
				} catch(error) {
					console.error("Error updating contact", error)
				}
			},
			deleteContact: async(id) => {
				try {
					const deleteContact = await fetch(url+"agendas/vinkavladislavic/contacts/"+id, {
						method: "DELETE",
					})
					if (!deleteContact.ok) {
						throw new Error("Error deleting contact");
					}
					const newList = getStore().contacts.filter(contact => contact.id !== id);
					setStore({ contacts: newList });
			
					console.log(`Contact with id ${id} deleted successfully`);
				} catch(error) {
					console.error("Error updating contact", error)
				}
			},
		}
	};
};

export default getState;
