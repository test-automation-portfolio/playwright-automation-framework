import { APIResponse } from '@playwright/test';

import { ApiClient } from '../../../utils/apiClient';


import {
  CreateUserRequest,
  UpdateUserRequest,
  UpdateUserResponse,
  User,
} from '../../../types/api/user.types';

import {
  createUserRequestSchema,
  updateUserRequestSchema,
  updateUserResponseSchema,
  userSchema,
  usersSchema,
} from '../../../types/api/user.schema';

/**
 * UserService contains API operations related to users.
 *
 * This class keeps endpoint-specific logic out of the tests
 * and handles request/response validation.
 */
export class UserService {
  constructor(private readonly apiClient: ApiClient) {}

  /**
   * Retrieves and validates a user by ID.
   *
   * @param userId - Unique ID of the user.
   * @returns A validated User object.
   */
  async getUser(userId: number): Promise<User> {
    const response = await this.apiClient.get(`/users/${userId}`);

    const responseBody = await response.json();

    return userSchema.parse(responseBody);
  }

  /**
   * Retrieves and validates all users.
   *
   * @returns An array of validated User objects.
   */
  async getUsers(): Promise<User[]> {
    const response = await this.apiClient.get('/users');

    const responseBody = await response.json();

    return usersSchema.parse(responseBody);
  }

  /**
   * Retrieves a user and returns the raw API response.
   *
   * Useful when testing HTTP-level details such as status codes.
   *
   * @param userId - Unique ID of the user.
   * @returns The raw API response.
   */
  async getUserResponse(userId: number): Promise<APIResponse> {
    return this.apiClient.get(`/users/${userId}`);
  }

  /**
   * Creates a new user.
   *
   * The request is validated before being sent.
   * The response is validated before being returned.
   *
   * @param userData - User information to send.
   * @returns A validated User object.
   */
  async createUser(userData: CreateUserRequest): Promise<User> {
    createUserRequestSchema.parse(userData);

    const response = await this.apiClient.post('/users', userData);

    const responseBody = await response.json();

    return userSchema.parse(responseBody);
  }

  /**
   * Updates an existing user.
   *
   * The request is validated before being sent.
   * The response is validated before being returned.
   *
   * @param userId - Unique ID of the user.
   * @param userData - User information to update.
   * @returns A validated User object.
   */
async updateUser(
  userId: number,
  userData: UpdateUserRequest,
): Promise<UpdateUserResponse> {
  updateUserRequestSchema.parse(userData);

  const response = await this.apiClient.put(
    `/users/${userId}`,
    userData,
  );

  const responseBody = await response.json();

  return updateUserResponseSchema.parse(responseBody);
}

  /**
   * Deletes a user.
   *
   * @param userId - Unique ID of the user.
   * @returns The raw API response.
   */
  async deleteUser(userId: number): Promise<APIResponse> {
    return this.apiClient.delete(`/users/${userId}`);
  }
}