export default function generateId(len = 5) {
	return Math.round(Math.random() * Math.pow(10, len)).toString();
}
