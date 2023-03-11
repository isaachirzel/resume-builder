import Entry from "../../models/Entry";
import ResumeSectionData from "../../models/ResumeSection";
import ResumeEntry from "../../resume/ResumeEntry";
import "./ResumeSection.scss";

export default function ResumeSection(props: { title: string, items?: Entry[] })
{
	return (
		<div className="resume-section">
			<div className="section-divider">
				<b>{props.title}</b>
				<hr />
			</div>
			
			<section>
				{ props.items?.map((item, index) => <ResumeEntry key={index} info={item} />) }
			</section>
		</div>
	);
}
