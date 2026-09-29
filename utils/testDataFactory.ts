export interface User {
  username: string;
  password: string;
}

export function createUser(overrides: Partial<User> = {}): User {
  return {
    username: `test_user_${Date.now()}`,
    password: 'TestPassword123!',
    ...overrides,
  };
}
