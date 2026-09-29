import type { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async get(endpoint: string): Promise<APIResponse> {
    return this.request.get(endpoint);
  }

  async post(endpoint: string, data?: unknown): Promise<APIResponse> {
    return this.request.post(endpoint, {
      data,
    });
  }

  async put(endpoint: string, data?: unknown): Promise<APIResponse> {
    return this.request.put(endpoint, {
      data,
    });
  }

  async delete(endpoint: string): Promise<APIResponse> {
    return this.request.delete(endpoint);
  }
}
