

export type CollaboratorID = string;

/** Collaborator is a team member. */
export interface ICollaborator {
  id: CollaboratorID;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  managees: CollaboratorID[];
  name(): string;
}