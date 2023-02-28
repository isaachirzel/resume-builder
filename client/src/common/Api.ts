import UrlUtils, { QueryParameters } from "./Url.utils";

export type Method = "GET" | "POST" | "PUT" | "DELETE"

export default class Api
{
	private static async request<T>(method: Method, url: string, params?: QueryParameters, body?: object): Promise<T>
	{
		const queryString = UrlUtils.getQueryString(params);
		const fullUrl = `/api/${url}${queryString}`;
		const response = await fetch(fullUrl,
		{
			method,
			body: body ? JSON.stringify(body) : undefined
		});

		if (!response.ok)
		{
			// TODO: Log & notify of error
			throw new Error("Failed to complete request: " + response.status);
		}

		const value = await response.json() as T;

		return value;
	}

	public async get<T>(url: string, params?: QueryParameters): Promise<T>
	{
		return Api.request("GET", url, params);
	}

	public async post<T>(url: string, params?: QueryParameters, body?: object): Promise<T>
	{
		return Api.request("POST", url, params, body);
	}

	public async put<T>(url: string, params?: QueryParameters, body?: object): Promise<T>
	{
		return Api.request("PUT", url, params, body);
	}

	public async delete<T>(url: string, params?: QueryParameters): Promise<T>
	{
		return Api.request("DELETE", url, params);
	}
}
