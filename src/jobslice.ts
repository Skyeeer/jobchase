import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Job, JobsState, Filters } from './jobTypes';

const initialState: JobsState = {
    allJobs: [],
    filteredJobs: [],
    selectedJob: undefined,
    filters: {
        searchTerm: '',
        language: '',
        contractType: '',
        level: '',

    }
};

export const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setJobs: (state, action: PayloadAction<Job[]>) => {
            state.allJobs = action.payload;
            state.filteredJobs = action.payload;
        },
        setFilters: (state, action: PayloadAction<Partial<Filters>>) => {
            state.filters = { ...state.filters, ...action.payload };
            state.filteredJobs = filterJobs(state);
        },
        selectJob: (state, action: PayloadAction<Job | undefined>) => {
            state.selectedJob = action.payload;
        },
    }
});


function filterJobs(state: JobsState): Job[] {
    return state.allJobs.filter(job =>
        (state.filters.language ? job.languages.includes(state.filters.language) : true) &&
        (state.filters.contractType ? job.contract.toLowerCase().includes(state.filters.contractType.toLowerCase()) : true) &&
        (state.filters.level ? job.level?.toLowerCase().includes(state.filters.level.toLowerCase()) : true) &&
        (state.filters.searchTerm ?
            job.location?.toLowerCase().includes(state.filters.searchTerm.toLowerCase()) ||
            job.contract.toLowerCase().includes(state.filters.searchTerm.toLowerCase()) ||
            job.level?.toLowerCase().includes(state.filters.searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(state.filters.searchTerm.toLowerCase()) ||
            (job.languages && job.languages.some(language => language.toLowerCase().includes(state.filters.searchTerm.toLowerCase())))
            : true)
    );
}

export const { setJobs, setFilters, selectJob } = jobsSlice.actions;

export default jobsSlice.reducer;

