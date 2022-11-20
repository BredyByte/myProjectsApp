import Main from '../../components/Main/Main';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import PreloaderPage from '../../components/Loaders/PreloaderPage/PreloaderPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialize } from '../../store/projectsSlice'

const Root = () => {
  const isLoading = useSelector(state => state.projects.isLoading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch])

return (
  <div className="Root" >
    <NavigationBar/>
    {
      isLoading ? <PreloaderPage/>:  <Main/>
    }
    <Footer/>
  </div>
)
}

export default Root
