import { ContactItem, ResumeData } from "./Resume.interfaces";
import "./Resume.module.scss";
import ResumeSection from "./ResumeSection";

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
		<div className="resume-container">
			<div className="resume">
				<div className="resume-content">
					<div className="resume-name">{data.name}</div>					
					<div className="resume-contact">
						{ data.contactItems.map((item, index) => <ContactEntry key={index} item={item} />) }
					</div>
					<ResumeSection title="Skills - Professionally Proficient or Higher" skills={data.skills} />
					{ data.sections.map(section => <ResumeSection title={section.label} items={section.items} />) }
				</div>
			</div>
		</div>
	);
}