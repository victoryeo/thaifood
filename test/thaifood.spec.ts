import {describe, it, expect} from '@jest/globals';
import {padthai, tomyam, kaomangai} from '../src/index';

describe('padthai()', () => {
	it('Pad correctly', () => {
		expect.assertions(1);

		expect(padthai('-AAA-', 11)).toBe('pad-AAA-pad');
	});
});

describe('tomyam()', () => {
	it('Pad correctly', () => {
		expect.assertions(1);

		expect(tomyam('-AAA-', 17)).toBe('tomyamtomyam-AAA-');
	});
});

describe('kaomangai()', () => {
	it('Pad correctly', () => {
		expect.assertions(1);

		expect(kaomangai('-AAA-', 14)).toBe('-AAA-kaomangai');
	});
});
