import { ContactItem, ResumeData } from "./Resume.interfaces";
import "./Resume.scss";
import ResumeSection from "./ResumeSection";
import SkillSection from "./SkillSection";

function ContactEntry(props: { item: ContactItem })
{
	const item = props.item;

	if (item.url)
		return <a className="resume-link" href={item.url}>{item.label}</a>;

	return <div>{item.label}</div>;
}

export default function Resume(props: { data?: ResumeData })
{
	const data = props.data;

	if (!data)
		return <></>;

	return (
		<article className="resume">
			<header className="name">{data.name}</header>
			<section className="contact">
				{ data.contactItems.map((item, index) => <ContactEntry key={index} item={item} />) }
			</section>
			<SkillSection skills={data.skills} />
			{ data.sections.map(section => <ResumeSection title={section.label} items={section.items} />) }
		</article>
	);
}