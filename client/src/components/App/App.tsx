import React, { useState } from "react";
import { ResumeService } from "../../services/ResumeService";
import "./App.scss";
import Resume from "../Resume/Resume";
import ResumeData from "../../models/Resume";

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
					<Resume resume={resumeData} />
				</div>
			</main>
			<footer>

			</footer>
		</div>
	);
}
