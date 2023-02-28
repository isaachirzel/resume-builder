export default class ResumeUtils
{
	public static formatDate(date: Date): string
	{
		return `${date.getMonth() + 1}/${date.getFullYear()}`;
	}
	
	public static formatDateRange(from?: Date, to?: Date): string
	{
		if (!from)
			return to ? ResumeUtils.formatDate(to) : "";

		const fromText = ResumeUtils.formatDate(from);

		const toText = to
			? ResumeUtils.formatDate(to)
			: "Present";

		return `${fromText} - ${toText}`;
	}

	public static getElement(type: string, children: (JSX.Element | string)[]): JSX.Element
	{
		switch (type)
		{
			case '*':
				return <b children={children}></b>;
			case '_':
				return <i children={children}></i>;
			default:
				return <span children={children}></span>;
		}
	}

	public static parseText(source: string, index: number, type: string): [ JSX.Element | null, number ]
	{
		let text = "";
		const children: JSX.Element[] = [];

		for (index; index < source.length; ++index)
		{
			const c = source[index];

			switch (c)
			{
				case '*':
				case '_':
					if (c == type)
						break;

					if (text)
					{
						children.push(<span>{text}</span>);
						text = "";
					}
					
					const [ child, newIndex ] = this.parseText(source, index + 1, c);

					if (child)
						children.push(child);

					index = newIndex;
					continue;

				default:
					text += c;
					continue;
			}

			break;
		}

		if (text)
			children.push(<span>{text}</span>);

		if (children.length == 0)
			return [ null, index ];

		return [ this.getElement(type, children), index ];
	}
}
