import Contact from "./Contact";
import ResumeSectionData from "./ResumeSection";

export default interface ResumeData
{
	name: string;
	contactItems: Contact[];
	skills: string[];
	sections: ResumeSectionData[];
}
