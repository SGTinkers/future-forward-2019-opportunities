export function parseJobResponses(jobResponses) {
    return jobResponses.flatMap(jobResponse => parseJobResponse(jobResponse));
}

export function parseJobResponse(jobResponse) {
    return jobResponse['Future Opportunities Available'].split("\n")
        .map(jobType => {
            if (jobType === 'Full time job') {
                return parseFullTimeJobResponse(jobResponse);
            } else if (jobType === 'Part time job') {
                return parsePartTimeJobResponse(jobResponse);
            } else if (jobType === 'Internship') {
                return parseInternshipJobResponse(jobResponse);
            }

            return {
                type: jobType,
            }
        });
}

function parseFullTimeJobResponse(jobResponse) {
    return {
        id: jobResponse['ID'],
        role: jobResponse['Potential full time role you will be offering:'],
        company: jobResponse['Organisation Name'],
        type: 'Full time',
        hiringPeriod: jobResponse['When are you looking to start hiring full timers?'],
        minQualification: jobResponse['Minimum Qualifications'],
        jobDescription: jobResponse['Job Description'],
    }
}

function parsePartTimeJobResponse(jobResponse) {
    return {
        id: jobResponse['ID'],
        role: jobResponse['Potential part time role you will be offering:'],
        company: jobResponse['Organisation Name'],
        type: 'Part time',
        hiringPeriod: jobResponse['When are you looking to start hiring part timers?'],
        jobDuration: jobResponse['Part time engagement estimated duration'],
        minQualification: jobResponse['Minimum Qualifications 2'],
        jobDescription: jobResponse['Job Description 2'],
    }
}

function parseInternshipJobResponse(jobResponse) {
    return {
        id: jobResponse['ID'],
        role: jobResponse['Potential internship role you will be offering:'],
        company: jobResponse['Organisation Name'],
        type: 'Internship',
        hiringPeriod: jobResponse['When are you looking to start hiring interns?'],
        jobDuration: jobResponse['Internship estimated duration'],
        minQualification: jobResponse['Minimum Qualifications 3'],
        jobDescription: jobResponse['Job Description 3'],
    }
}
