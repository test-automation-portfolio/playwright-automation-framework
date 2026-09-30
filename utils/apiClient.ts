import {
  APIRequestContext,
  APIResponse,
} from '@playwright/test';

import { config } from '../config/environment';
import { logger } from './logger';

/**
 * ApiClient provides a reusable wrapper around Playwright's
 * APIRequestContext.
 *
 * The client is responsible for sending HTTP requests.
 * Assertions and business-specific logic remain outside
 * this class.
 */
export class ApiClient {
  private readonly request: APIRequestContext;
  private readonly baseUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = config.apiBaseUrl;
  }

  /**
   * Logs whether an API response was successful or unsuccessful.
   *
   * The response is not thrown away when an error status is returned.
   * This allows tests to intentionally verify responses such as 404.
   */
  private logResponseStatus(
    method: string,
    endpoint: string,
    response: APIResponse,
  ): void {
    if (response.ok()) {
      logger.info(
        `${method} ${endpoint} → ${response.status()}`,
      );
      return;
    }

    logger.error(
      `${method} ${endpoint} → ${response.status()} ${response.statusText()}`,
    );
  }

  /**
   * Sends a GET request.
   */
  async get(endpoint: string): Promise<APIResponse> {
  logger.info(`GET ${endpoint}`);

  const response = await this.request.get(
    `${this.baseUrl}${endpoint}`,
    {
      headers: this.getHeaders(),
    },
  );

  this.logResponseStatus('GET', endpoint, response);

  return response;
}

  /**
   * Sends a POST request.
   */
  async post(
  endpoint: string,
  data?: unknown,
): Promise<APIResponse> {
  logger.info(`POST ${endpoint}`);

  const response = await this.request.post(
    `${this.baseUrl}${endpoint}`,
    {
      data,
      headers: this.getHeaders(),
    },
  );

  this.logResponseStatus('POST', endpoint, response);

  return response;
}

  /**
   * Sends a PUT request.
   */
  async put(
    endpoint: string,
    data?: unknown,
  ): Promise<APIResponse> {
    logger.info(`PUT ${endpoint}`);

    const response = await this.request.put(
      `${this.baseUrl}${endpoint}`,
      {
        data,
      },
    );

    this.logResponseStatus('PUT', endpoint, response);

    return response;
  }

  /**
   * Sends a PATCH request.
   */
  async patch(
    endpoint: string,
    data?: unknown,
  ): Promise<APIResponse> {
    logger.info(`PATCH ${endpoint}`);

    const response = await this.request.patch(
      `${this.baseUrl}${endpoint}`,
      {
        data,
      },
    );

    this.logResponseStatus('PATCH', endpoint, response);

    return response;
  }

  /**
   * Sends a DELETE request.
   */
  async delete(endpoint: string): Promise<APIResponse> {
    logger.info(`DELETE ${endpoint}`);

    const response = await this.request.delete(
      `${this.baseUrl}${endpoint}`,
    );

    this.logResponseStatus('DELETE', endpoint, response);

    return response;
  }

  /**
   * Parses an API response into the requested TypeScript type.
   *
   * Note:
   * This provides compile-time typing only.
   * Runtime validation is handled separately by Zod schemas
   * in the service layer.
   */
  async parseResponse<T>(response: APIResponse): Promise<T> {
    return response.json() as Promise<T>;
  }
  private getHeaders(): Record<string, string> {
  if (!config.api.token) {
    return {};
  }

  return {
    Authorization: `Bearer ${config.api.token}`,
  };
}
}
