import axios from "axios";
import React, { useEffect, useState } from "react";

function UserList() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/users`)
			.then((res) => setUsers(res.data));
	}, []);

	return (
		<ul>
			{users.map((person) => (
				<li key={person.id}>
					{person.id}-{person.name}
				</li>
			))}
		</ul>
	);
}

export default UserList;
