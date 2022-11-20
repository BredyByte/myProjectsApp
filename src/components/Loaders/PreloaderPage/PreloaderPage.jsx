import Lottie from "lottie-react";
import balls from '../../../assets/loaderImg/ballsPreloader.json';

const PreloaderPage = () => {
  return (
    <div
      className="Preloader"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center" ,
        background: "#161623"
      }}>
      <Lottie animationData={balls} loop={true} style={{ height:"500px", width: "500px" }} />
    </div>
  )
}

export default PreloaderPage
