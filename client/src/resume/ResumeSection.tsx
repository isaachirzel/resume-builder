import { ResumeItem } from "./Resume.interfaces";
import ResumeEntry from "./ResumeEntry";
import "./ResumeSection.scss";

export default function ResumeSection(props: { title: string, items?: ResumeItem[] })
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
