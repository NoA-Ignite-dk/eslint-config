import React, { useEffect, useState } from 'react';

const booleanValue = true;

const object = {
	first: 1,
	second: 2,
	third: 3,
};

export function test() {
	return object.first;
}

export default test;

function stringBuilder() {
	return booleanValue ? `Hello ${'world'}` : 'No';
}

stringBuilder();

export function MyComponent(value: string) {
	const [state, setState] = useState<number>();

	useEffect(() => {
		setState(value.length);
	}, [value]);

	return (
		<div>test {' '} content {state}</div>
	);
}
