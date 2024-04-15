export interface Job {
    id: string;
    position: string;
    company: string;
    location: string;
    contract: string;
    level?: string;
    languages: string[];
    description?: string;
}

export interface JobsState {
    allJobs: Job[];
    filteredJobs: Job[];
    filters: Filters;
    selectedJob?: Job;
}

export interface Filters {
    searchTerm: string;
    language: string;
    contractType: string;
    level: string;

}