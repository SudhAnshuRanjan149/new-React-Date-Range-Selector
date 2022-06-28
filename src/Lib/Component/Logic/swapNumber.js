export const swapNumber = (a, b) => {
	let temp = a;
	a = b;
	b = temp;

	return [a,b]

}