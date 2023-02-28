import { ResumeItem } from "./Resume.interfaces";
import ResumeEntry from "./ResumeEntry";

export default function ResumeSection(props: { title: string, items?: ResumeItem[], skills?: string[] })
{
	return (
		<div className="resume-section">
			<div className="section-divider">
				<b>{props.title}</b>
				<hr />
			</div>
			<section>
				{ props.skills?.join(", ") }
				{ props.items?.map((item, index) => <ResumeEntry key={index} info={item} />) }
			</section>
		</div>
	);
}
