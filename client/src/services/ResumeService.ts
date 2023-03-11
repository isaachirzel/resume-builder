import Api from "../utils/ApiUtils";
import ResumeSectionData from "../models/ResumeSection";
import ResumeData from "../models/Resume";

export class ResumeService
{
	private api: Api = new Api();

	public async getResumeInfo(): Promise<ResumeData>
	{
		// const value = await this.api.get<ResumeData>("resume");

		return {
			name: "John Doe",
			contactItems: [
				{
					label: "john.doe@example.com",
					url: "mailto:john.doe@example.com"
				},
				{
					label: "(555) 123-4567",
					url: "tel+1-555-123-4567"
				}
			],
			skills: [ "A", "B", "C" ],
			sections: [
				{
					label: "Work Experience",
					items: [
						{
							title: "Store Associate",
							organization: "Storemart",
							from: new Date(2022, 0),
							points: [
								"Handle money",
								"Greet customers",
								"Sweep floors"
							]
						}
					]
				}
			]
		};
		// return value;
	}
}
