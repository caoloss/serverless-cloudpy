import { data } from '@serverless/cloud';
import { v4 as uuid } from '@lukeed/uuid';

// GET /todos.json
export const get = async (event) => {
	// event.locals.userid comes from src/hooks.js
	const { items } = await data.get(`todo#${event.locals.userid}:*`);

	//
	return {
		status: 200,
		headers: {
			'content-type': 'application/json'
		},
		body: items.map(item => item.value)
	};
};

// POST /todos.json
export const post = async (event) => {
	const formData = await event.request.formData();
	const text = formData.get('text');
	const uid = uuid();

	const todo = {
		uid,
		text,
		done: false
	};

	const value = await data.set(`todo#${event.locals.userid}:${uid}`, todo);

	return {
		status: 201,
		body: value
	};
};