import ListItem from "./ListItem";
import { ResumeItem } from "./Resume.interfaces";
import ResumeUtils from "./Resume.utils";

export default function ResumeEntry(props: { info: ResumeItem })
{
	const info = props.info;
	const label = info.organization || info.url;
	const center = info.url
		? <a className="resume-link" href={info.url}>{label}</a>
		: <b><u>{info.organization}</u></b>;

	return (
		<div className="resume-entry">
			<header>
				<div className="left">
					<b>{info.title}</b>
				</div>
				<div>
					{center}
				</div>
				<div className="right">
					<i>{ResumeUtils.formatDateRange(info.from, info.to)}</i>
				</div>
			</header>
			<ul>
				{info.points?.map((point, key) => <ListItem key={key} source={point} />)}
			</ul>
		</div>
	);
}
