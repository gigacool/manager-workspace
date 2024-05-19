
import { ICollaborator, CollaboratorID } from '../types';

export class Collaborator implements ICollaborator {
  id: CollaboratorID;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  managees: CollaboratorID[];

  constructor(id: string, firstName: string, lastName: string, email: string, role:string, managees: string[]) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.role = role;
      this.managees = managees;
  }

  name(): string {
      return `${this.firstName} ${this.lastName}`;
  }
}

