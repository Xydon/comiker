export default class FieldDataGroup {
	fields: FieldDataClass[];

	constructor(...fields: FieldDataClass[]) {
		this.fields = fields;
	}

	validateAll() {
		return this.fields.reduce((a, c) => a && c.validate(), true);
	}
}
