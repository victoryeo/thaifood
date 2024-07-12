import {pad, padStart, padEnd} from 'lodash';

export function padthai(input: string, length: number) {
	return pad(input, length, 'padthai');
}

export function tomyam(input: string, length: number) {
	return padStart(input, length, 'tomyam');
}

export function kaomangai(input: string, length: number) {
	return padEnd(input, length, 'kaomangai');
}
