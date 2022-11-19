import Main from '../../components/Main/Main';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialize } from '../../store/App/appAction';

const Root = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state)

  window.state = state;

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  return (
    <div className="Root" >
      <NavigationBar/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Root
