import ResumeUtils from "../../utils/ResumeUtils";

export default function ListItem(props: { source: string })
{
	const [ element ] = ResumeUtils.parseText(props.source, 0, '');

	return <li>{element}</li>;
}
