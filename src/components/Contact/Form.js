import React from 'react';

import {
	getFirestore,
	collection,
	onSnapshot,
	addDoc,
	deleteDoc,
	doc,
} from 'firebase/firestore';




export default function Form() {

	const [user, setUser] = React.useState({
		firstname: '',
		lastname: '',
	});

	function handleChangeFname(event) {
		const { name, value } = event.target;
		setUser((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	}

	function handleChangeLname(event) {
		const { name, value } = event.target;
		setUser((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	}

    
    
	const db = getFirestore();
    const colRef = collection(db, 'users');

	function addUser() {
		addDoc(colRef, {
			firstname: user.firstname,
			lastname: user.lastname,
		}).then(() => {
            clearFields()
           
        })

	}

    function clearFields(){
        setUser(() => {
          return  {
                firstname: '',
                lastname: '',
            }
        })
    }
    
   
        onSnapshot(colRef, (snapshot) => {
            let users = [];
            snapshot.docs.forEach((doc) => {
                users.push({ ...doc.data(), id: doc.id });
            });
            console.log(users);
        })
    



	return (
		<div>
			<form>
				<input
					type="text"
					placeholder="First Name"
					value={user.firstname}
					name="firstname"
					onChange={handleChangeFname}
				/>
				<input
					type="text"
					placeholder="Last Name"
					value={user.lastname}
					name="lastname"
					onChange={handleChangeLname}
				/>
				<input type="email" placeholder="Email" name="email" />
				<textarea placeholder="Comments" name="comments" />
			</form>
			<button type="submit" onClick={addUser}>
				Send!
			</button>
		</div>
	);
}
