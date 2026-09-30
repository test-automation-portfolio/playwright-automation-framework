import { APIRequestContext, APIResponse } from '@playwright/test';

/**
 * ApiClient provides a reusable wrapper around Playwright's
 * APIRequestContext.
 *
 * The purpose of this class is to centralize common HTTP
 * operations such as GET, POST, PUT, PATCH and DELETE.
 */
export class ApiClient {
  /**
   * Playwright API request context used to send HTTP requests.
   */
  private readonly request: APIRequestContext;

  /**
   * Creates a new ApiClient.
   *
   * @param request - Playwright's APIRequestContext.
   */
  constructor(request: APIRequestContext) {
    this.request = request;
  }

  /**
   * Sends a GET request to the specified endpoint.
   *
   * @param endpoint - The API endpoint to request.
   * @returns The API response returned by the server.
   */
  async get(endpoint: string): Promise<APIResponse> {
    return this.request.get(endpoint);
  }

  /**
   * Sends a POST request to the specified endpoint.
   *
   * @param endpoint - The API endpoint where the request is sent.
   * @param data - The request body sent to the server.
   * @returns The API response returned by the server.
   */
  async post(endpoint: string, data?: unknown): Promise<APIResponse> {
    return this.request.post(endpoint, {
      data,
    });
  }

  /**
   * Sends a PUT request to the specified endpoint.
   *
   * @param endpoint - The API endpoint where the request is sent.
   * @param data - The request body sent to the server.
   * @returns The API response returned by the server.
   */
  async put(endpoint: string, data?: unknown): Promise<APIResponse> {
    return this.request.put(endpoint, {
      data,
    });
  }

  /**
   * Sends a PATCH request to the specified endpoint.
   *
   * @param endpoint - The API endpoint where the request is sent.
   * @param data - The request body sent to the server.
   * @returns The API response returned by the server.
   */
  async patch(endpoint: string, data?: unknown): Promise<APIResponse> {
    return this.request.patch(endpoint, {
      data,
    });
  }

  /**
   * Sends a DELETE request to the specified endpoint.
   *
   * @param endpoint - The API endpoint to delete.
   * @returns The API response returned by the server.
   */
  async delete(endpoint: string): Promise<APIResponse> {
    return this.request.delete(endpoint);
  }
}