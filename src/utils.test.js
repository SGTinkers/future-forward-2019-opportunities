function parseJobResponse(jobResponse) {
  return jobResponse['Future Opportunities Available'].split("\n")
    .map(jobType => {
      if (jobType === 'Full time job') {
        return parseFullTimeJobResponse(jobResponse);
      } else if (jobType === 'Part time job') {
        return parsePartTimeJobResponse(jobResponse);
      }

      return {
        type: jobType,
      }
    });
}

function parseFullTimeJobResponse(jobResponse) {
  return {
    role: jobResponse['Potential full time role you will be offering:'],
    company: jobResponse['Organisation Name'],
    type: 'Full time',
    hiringPeriod: jobResponse['When are you looking to start hiring full timers?'],
    minQualification: jobResponse['Minimum Qualifications'],
  }
}

function parsePartTimeJobResponse(jobResponse) {
  return {
    role: jobResponse['Potential part time role you will be offering:'],
    company: jobResponse['Organisation Name'],
    type: 'Part time',
    hiringPeriod: jobResponse['When are you looking to start hiring part timers?'],
    jobDuration: jobResponse['Part time engagement estimated duration'],
    minQualification: jobResponse['Minimum Qualifications 2'],
  }
}

describe("job response parsing", () => {
  it("parses full time job correctly", () => {
    const jobResponse = createFullTimeJobResponse();

    const jobs = parseJobResponse(jobResponse);

    expect(jobs.length).toBe(1);
    expect(jobs[0]).toEqual({
      role: 'Developer',
      company: 'Circles.Life',
      type: 'Full time',
      hiringPeriod: 'Q2 2019',
      minQualification: 'Degree',
    });
  });

  it("parses part time job correctly", () => {
    const jobResponse = createPartTimeJobResponse();

    const jobs = parseJobResponse(jobResponse);

    expect(jobs.length).toBe(1);
    expect(jobs[0]).toEqual({
      role: 'Developer',
      company: 'Circles.Life',
      type: 'Part time',
      hiringPeriod: 'Q2 2019',
      jobDuration: '1 Month',
      minQualification: 'Degree',
    });
  });
});

function createFullTimeJobResponse() {
  return {
    ID: "1",
    "Submission Date": "2019-09-17 22:40:05",
    "Organisation Name": "Circles.Life",
    "Future Opportunities Available": "Full time job",
    "When are you looking to start hiring full timers?": "Q2 2019",
    "Potential full time role you will be offering:": "Developer",
    "Minimum Qualifications": "Degree",
    "Job Description":
        "https://pages.circles.life/job-board/?gh_jid=4271631002",
    "When are you looking to start hiring part timers?": "",
    "Part time engagement estimated duration": "",
    "Potential part time role you will be offering:": "",
    "Minimum Qualifications 2": "",
    "Job Description 2": "",
    "When are you looking to start hiring interns?": "",
    "Internship estimated duration": "",
    "Potential internship role you will be offering:": "",
    "Minimum Qualifications 3": "",
    "Job Description 3": ""
  };
}

function createPartTimeJobResponse() {
  return {
    ID: "1",
    "Submission Date": "2019-09-17 22:40:05",
    "Organisation Name": "Circles.Life",
    "Future Opportunities Available": "Part time job",
    "When are you looking to start hiring full timers?": "",
    "Potential full time role you will be offering:": "",
    "Minimum Qualifications": "",
    "Job Description": "",
    "When are you looking to start hiring part timers?": "Q2 2019",
    "Part time engagement estimated duration": "1 Month",
    "Potential part time role you will be offering:": "Developer",
    "Minimum Qualifications 2": "Degree",
    "Job Description 2": "https://pages.circles.life/job-board/",
    "When are you looking to start hiring interns?": "",
    "Internship estimated duration": "",
    "Potential internship role you will be offering:": "",
    "Minimum Qualifications 3": "",
    "Job Description 3": ""
  };
}

function createInternshipJobResponse() {
  return {
    ID: "1",
    "Submission Date": "2019-09-17 22:40:05",
    "Organisation Name": "Circles.Life",
    "Future Opportunities Available": "Internship",
    "When are you looking to start hiring full timers?": "",
    "Potential full time role you will be offering:": "",
    "Minimum Qualifications": "",
    "Job Description": "",
    "When are you looking to start hiring part timers?": "",
    "Part time engagement estimated duration": "",
    "Potential part time role you will be offering:": "",
    "Minimum Qualifications 2": "",
    "Job Description 2": "",
    "When are you looking to start hiring interns?": "Q4 2018",
    "Internship estimated duration": "3-6 Months",
    "Potential internship role you will be offering:":
        "Customer Service & Operations Intern (Vendor Management), Customer Success & Operations Intern, Data Analytics Internship, Engineering Internship, Founder's Office Internship, Legal Intern, Marketing Intern (Content Writing), Marketing Intern (Copy Writing), Marketing Operations Intern, Partnerships (Business Development) Intern, Product Management Internship, Project Coordination Intern, Regional Employer Branding Intern, Regional Employer Branding Intern (Creative), egional Employer Branding Intern (Videography), Strategic Business Development Internship, Talent Acquisition Intern, Total Rewards Intern",
    "Minimum Qualifications 3": "Degree",
    "Job Description 3":
        "https://pages.circles.life/job-board/\n\n\n- For intern positions, select the interns tab :)"
  };
}
