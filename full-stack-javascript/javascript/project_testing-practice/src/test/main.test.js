import { capitalize, reverseString, Calculator, ceasarCipher } from "../main.js";

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

describe('calculator', () => {

    let myCalculator;

    beforeEach(() => {
        myCalculator = Calculator();
    });

    it('is defined', () => {
        expect(Calculator).toBeDefined();
    });

    it('creates an object', () => {
        expect(typeof(myCalculator)).toBe('object')
    });

    it('has an add methods', () => {
        expect(myCalculator.add).toBeDefined();
    })

    it('adds two numbers correctly', () => {
        expect(myCalculator.add(1,1)).toEqual(2);
    });

    it('has a subtract method', () => {
        expect(myCalculator.subtract).toBeDefined();
    });

    it('subtract two numbers correctly', () => {
        expect(myCalculator.subtract(2,1)).toEqual(1);
    });

    it('has a divide method', () => {
        expect(myCalculator.divide).toBeDefined();
    });

    it('divides two numbers correctly', () => {
        expect(myCalculator.divide(4,2)).toEqual(2);
    });

    it('throws an error when trying to divide by 0', () => {
        expect(() => {
            myCalculator.divide(1,0);
        }).toThrow('division by zero');
    });

    it('has a multiply method', () => {
        expect(myCalculator.multiply).toBeDefined();
    });

    it('multiplies two numbers correctly', () => {
        expect(myCalculator.multiply(2,3)).toEqual(6);
    });
}) 

describe('ceasarCipher', () => {

    let myEncoder;

    beforeEach(() => {
        myEncoder = ceasarCipher();
    });

    it('is defined', () => {
        expect(ceasarCipher).toBeDefined();
    });

    it('has an encode method', () => {
        expect(myEncoder.encode).toBeDefined();
    });

    it('takes in a string and a shift factor', () => {
        expect(() => {
            myEncoder.encode(1, 3);
        }).toThrow('first argument must be a string');
                expect(() => {
            myEncoder.encode('abc', 'abc');
        }).toThrow('second argument must be a number');
    });

    it('returns a string', () => {
        expect(typeof(myEncoder.encode('abc', 3))).toEqual('string');
    });

    it('correctly shifts the string', () => {
        expect(myEncoder.encode('abc', 3)).toEqual('def');
    });

    it('wraps back to abc', () => {
        expect(myEncoder.encode('xyz', 3)).toEqual('abc');
    });

    it('preserves the case', () => {
        expect(myEncoder.encode('HeLLo', 3)).toEqual('KhOOr')
    });

    it('keeps the punctuation unchanged', () => {
        expect(myEncoder.encode('Hello, World!', 3)).toEqual('Khoor, Zruog!')
    });

})