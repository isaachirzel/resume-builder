export type QueryValue = number | string | boolean | null;
export type QueryParameters = { [key: string]: QueryValue };

export default class UrlUtils
{
	private static getQueryValue(value: QueryValue): string
	{
		if (value === null)
			return "";

		return encodeURIComponent(value);
	}

	public static getQueryString(params: QueryParameters | undefined): string
	{
		if (!params)
			return "";
		
		let query = "";
		let first = true;

		for (const key in params)
		{
			const char = first ? "?" : "&";
			const value = params[key];
			const keyComponent = encodeURIComponent(key);
			const valueComponent = value !== null
				? encodeURIComponent(value)
				: "";

			query += `${char}${keyComponent}=${valueComponent}`;
			first = false;
		}

		return query;
	}
}
