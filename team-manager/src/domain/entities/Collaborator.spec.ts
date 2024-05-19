// src/tests/domain/entities/Collaborator.test.ts
import { Collaborator } from './Collaborator';

describe('Collaborator', () => {
    it('should return the calculated name as "firstName lastName"', () => {
        const collaborator = new Collaborator(
            '1', 
            'John', 
            'Doe', 
            'john.doe@example.com', 
            'Developer', 
            []
        );

        expect(collaborator.name()).toBe('John Doe');
    });
});
