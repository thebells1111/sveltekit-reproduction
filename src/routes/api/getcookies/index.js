export const get = async ({ request }) => {
	let { headers } = request;
	console.log(headers);
	console.log(headers.cookie);

	return {
		status: 200,
		headers: {
			'set-cookie': [
				`test=test; Max-Age=${60 * 24 * 60 * 60 * 1000}; httpOnly; path=/; sameSite=Strict;`
			]
		},
		body: {
			message: 'success'
		}
	};
};
