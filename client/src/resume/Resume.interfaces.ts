export interface ResumeItem
{
	title?: string;
	organization?: string;
	url?: string;
	from?: Date;
	to?: Date;
	points?: string[];
}

export interface ResumeSection
{
	label: string;
	items: ResumeItem[];
}

export interface ContactItem
{
	label: string;
	url: string;
	icon?: string;
}

export interface ResumeData
{
	name: string;
	contactItems: ContactItem[];
	skills: string[]
	sections: ResumeSection[];
}
