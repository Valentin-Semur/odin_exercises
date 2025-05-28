import { capitalize, reverseString } from "../main.js";

describe('capitalize', () => {
    it('is defined', () => {
        expect(capitalize).toBeDefined();
    })
    
    it('returns a string', () => {
        expect(typeof(capitalize('test'))).toBe('string');
    })

    it('returns the correct string 1', () => {
        expect(capitalize('test')).toBe('Test');
    })

    it('returns the correct string 2', () => {
        expect(capitalize('glop')).toBe('Glop');
    })
})

describe('reverseString', () => {
    it('is defined', () => {
        expect(reverseString).toBeDefined();
    });

    it('returns a string', () => {
        expect(typeof(reverseString('test'))).toBe('string');
    });

    it('returns the correct string 1', () => {
        expect(reverseString('test')).toBe('tset')
    });

    it('returns the correct string 2', () => {
        expect(reverseString('glop')).toBe('polg')
    });
})
