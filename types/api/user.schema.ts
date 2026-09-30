import { z } from 'zod';

/**
 * Runtime schema for a User returned by the API.
 */
export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
});

/**
 * Runtime schema for a list of users.
 */
export const usersSchema = z.array(userSchema);

/**
 * Runtime schema for creating a user.
 */
export const createUserRequestSchema = z.object({
  name: z.string().min(1),
  username: z.string().min(1),
  email: z.string().email(),
});

/**
 * Runtime schema for updating a user.
 *
 * All fields are optional because an update may modify
 * only some of the user's properties.
 */
export const updateUserRequestSchema = z.object({
  name: z.string().min(1).optional(),
  username: z.string().min(1).optional(),
  email: z.string().email().optional(),
});

/**
 * Runtime schema for the response returned by the
 * update endpoint.
 *
 * JSONPlaceholder may not return every user field
 * when an update is performed.
 */
export const updateUserResponseSchema = z.object({
  id: z.number(),
  name: z.string().optional(),
  username: z.string().optional(),
  email: z.string().email().optional(),
});