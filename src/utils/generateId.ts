import { v4 as uuidv4 } from "uuid";

export default function generateId(len = 5) {
	return uuidv4();
}
