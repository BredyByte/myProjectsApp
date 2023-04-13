import { createSlice } from '@reduxjs/toolkit';
import axios  from 'axios';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    showLoader: (state) => {
      state.isLoading = true
    },
    setProjects: (state, action) => {
      state.data = action.payload;
      state.isLoading = false
    }
  }
});

const { setProjects, showLoader } = projectsSlice.actions;
const fetchProjects = () => dispatch => {
    axios
      .get('./projectsData.json')
      .then(res => dispatch(setProjects(res.data)))
      .catch(error => console.log(error));
}
export const initialize = () => dispatch => {
  dispatch(showLoader());
  setTimeout(() => {
    dispatch( fetchProjects())
  }, 1500)
}

export default projectsSlice.reducer;