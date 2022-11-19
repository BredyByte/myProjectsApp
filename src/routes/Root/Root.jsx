import Main from '../../components/Main/Main';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../../store/projectsSlice';

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch])

  return (
    <div className="Root" >
      <NavigationBar/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Root
