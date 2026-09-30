/**
 * Represents a user returned by the API.
 */
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

/**
 * Represents the data required to create a user.
 */
export interface CreateUserRequest {
  name: string;
  username: string;
  email: string;
}

/**
 * Represents the data that can be updated for a user.
 *
 * All fields are optional because an update may modify
 * only some of the user's properties.
 */
export interface UpdateUserRequest {
  name?: string;
  username?: string;
  email?: string;
}

/**
 * Represents the response returned after updating a user.
 *
 * JSONPlaceholder may return only the fields included
 * in the update request.
 */
export interface UpdateUserResponse {
  id: number;
  name?: string;
  username?: string;
  email?: string;
}
