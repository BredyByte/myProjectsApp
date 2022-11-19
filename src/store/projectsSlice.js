import { createSlice } from '@reduxjs/toolkit';
import VanillaTilt from '../vanilla-tilt';
import axios  from 'axios';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    data: []
  },
  reducers: {
   setProjects: (state, action) => {
     state.data = action.payload;
   }
  }
});

const { setProjects } = projectsSlice.actions;
const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
export const fetchProjects = () => dispatch => {
  axios
    .get('./projectsData.json')
    .then(res => dispatch(setProjects(res.data)))
    .then(() => {
      if(!isMobile) {
        VanillaTilt.init(document.querySelectorAll(".card"), {
          max: 25,
          speed: 400,
        });
      }
    })
    .catch(error => console.log(error));
}

export default projectsSlice.reducer;