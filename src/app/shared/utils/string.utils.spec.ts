import { getFullName } from './string.utils';

describe('getFullName', () => {
    it('should return full name based on given first and last names', () => {
        const firstName = 'First';
        const lastName = 'Last';
        const expectedFullName = 'First Last';

        expect(getFullName(firstName, lastName)).toBe(expectedFullName);
    });

    it('should return trimmed full name based on given first and last name', () => {
        const firstName = '    First';
        const lastName = 'Last    ';
        const expectedFullName = 'First Last';

        expect(getFullName(firstName, lastName)).toBe(expectedFullName);
    });
});
