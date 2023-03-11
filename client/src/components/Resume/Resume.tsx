import "./Resume.scss";
import ResumeSection from "../ResumeSection/ResumeSection";
import SkillSection from "../SkillSection/SkillSection";
import Contact from "../../models/Contact";
import ResumeData from "../../models/Resume";

function ContactEntry(props: { contact: Contact })
{
	const item = props.contact;

	if (item.url)
		return <a className="resume-link" href={item.url}>{item.label}</a>;

	return <div>{item.label}</div>;
}

export default function Resume(props: { resume?: ResumeData })
{
	const data = props.resume;

	if (!data)
		return <></>;

	return (
		<article className="resume">
			<header className="name">{data.name}</header>
			<section className="contact">
				{ data.contactItems.map((item, index) => <ContactEntry key={index} contact={item} />) }
			</section>
			<SkillSection skills={data.skills} />
			{ data.sections.map(section => <ResumeSection title={section.label} items={section.items} />) }
		</article>
	);
}