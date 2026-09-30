
export interface User {
  username: string;
  password: string;
}

/**
 * Creates login credentials for UI tests.
 */
export function createUser(overrides: Partial<User> = {}): User {
  return {
    username: `test_user_${Date.now()}`,
    password: 'TestPassword123!',
    ...overrides,
  };
}

/**
 * Represents data required to create an API user.
 */
export interface ApiUserData {
  name: string;
  username: string;
  email: string;
}

/**
 * Creates test data for API user tests.
 *
 * A timestamp is used to make the username and email unique
 * across test runs.
 */
export function createApiUser(
  overrides: Partial<ApiUserData> = {},
): ApiUserData {
  const timestamp = Date.now();

  return {
    name: 'QA Automation User',
    username: `qa_user_${timestamp}`,
    email: `qa_user_${timestamp}@example.com`,
    ...overrides,
  };
}