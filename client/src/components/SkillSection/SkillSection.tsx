import "./SkillSection.scss";

function SkillEntry(props: { value: string })
{
	return <li>{ props.value }</li>
}

export default function SkillSection(props: { skills?: string[] })
{
	if (!props.skills)
		return <></>;

	return (
		<section className="skill-section">
			<header>
				<b>Skills</b>
				<hr />
			</header>
			<ul className="skill-list">
				{ props.skills.map((item, index) => <SkillEntry key={index} value={item} />) }
			</ul>
		</section>
	);
}
