const booleanValue = true;

interface ObjectType {
	first: number;
	second: number;
	third: number;
}

const object: ObjectType = {
	first: 1,
	second: 2,
	third: 3,
};

export function test() {
	return object.first;
}

export default stringBuilder;

function stringBuilder(input: string) {
	if (input === 'test') {
		return 'This is a test';
	}

	return input ? `Hello ${input}` : 'No';
}

if (booleanValue) {
	stringBuilder('test');
}

export class MyClass {
	myFirstProperty = 'string';
	mySecondProperty = 'string';

	public myFirstMethod() {
		return this.myFirstMethod;
	}

	public mySecondMethod() { return this.myFirstMethod; }
	public myThirdMethod() {
		return this.myFirstMethod;
	}
}
