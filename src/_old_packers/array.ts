
const pack = (arr, context) => {
	const { pack } = context;
	const temp : any[] = Array(arr.length);

	for (let i = 0; i < arr.length; i++) {
		temp[i] = pack(arr[i], context);
	}

	return temp;
};

const unpack = (arr, context) => {
	const { unpack } = context;
	const temp : any[] = Array(arr.length);

	for (let i = 0; i < arr.length; i++) {
		temp[i] = unpack(arr[i], context);
	}

	return temp;
};

export = {
	pack,
	unpack,
};
