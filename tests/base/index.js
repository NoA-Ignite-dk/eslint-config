const booleanValue = true;

const object = {
	first: 1,
	second: 2,
	third: 3,
};

function test() {
	return object.first;
}

function stringBuilder(input) {
	if (input === 'test') {
		return 'This is a test';
	}

	return input ? `Hello ${input}` : 'No';
}

if (booleanValue) {
	stringBuilder('test');
}

module.exports = test;
