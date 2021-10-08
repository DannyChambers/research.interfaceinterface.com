//Utilites --

//Determine accessible colour contrast
//Accepts hsl() value
export const lightOrDark = (color) => {
	let result;
	const parts = color.split(",");
	const part3 = parts[2].replace("%)", "");
	const number = parseInt(part3);

	if (number >= 50) {
		result = "light";
	} else {
		result = "dark";
	}
	return result;
};

export const generateID = () => {
	return "id_" + Math.random().toString(16).slice(2);
};
