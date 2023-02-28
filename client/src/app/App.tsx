import React, { useState } from "react";
import Resume from "../resume/Resume";
import { ResumeData } from "../resume/Resume.interfaces";
import { ResumeService } from "../resume/Resume.service";
import "./App.scss";

export default function App()
{
	const resumeService = new ResumeService();
	const [ resumeData, setResumeData ] = useState<ResumeData | undefined>(undefined);

	resumeService.getResumeInfo()
		.then(data => setResumeData(data));

	return (
		<div className="app">
			<header>
				<h2>Resume Builder</h2>
			</header>
			<main>
				<div className="resume-container">
					<Resume data={resumeData} />
				</div>
			</main>
			<footer>

			</footer>
		</div>
	);
}
