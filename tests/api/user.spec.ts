import { test, expect } from '../../fixtures/testFixtures';
import { createApiUser } from '../../utils/testDataFactory';

test.describe('User API', () => {
test('should retrieve a user successfully', async ({ userService }) => {
  const user = await userService.getUser(2);

  expect(user.id).toBe(2);
  expect(user.name).toBeTruthy();
  expect(user.email).toBeTruthy();
});

  test('should retrieve all users successfully', async ({
  userService,
}) => {
  const users = await userService.getUsers();

  expect(users.length).toBeGreaterThan(0);
  expect(users.every((user) => user.id)).toBe(true);
});
  
  test('should create a new user successfully', async ({
  userService,
}) => {
  const newUser = createApiUser();

  const user = await userService.createUser(newUser);

  expect(user.name).toBe(newUser.name);
  expect(user.username).toBe(newUser.username);
  expect(user.email).toBe(newUser.email);
});

  test('should update an existing user successfully', async ({
  userService,
}) => {
  const updatedUser = {
    name: 'Updated QA User',
    username: 'updated_qa_user',
  };

  const user = await userService.updateUser(2, updatedUser);

  expect(user.name).toBe(updatedUser.name);
  expect(user.username).toBe(updatedUser.username);
});
  test('should delete a user successfully', async ({ userService }) => {
    const response = await userService.deleteUser(2);

    expect(response.status()).toBe(200);
  });

test('should return 404 when requesting a non-existing user', async ({
  userService,
}) => {
  const response = await userService.getUserResponse(9999);

  expect(response.status()).toBe(404);
});
});