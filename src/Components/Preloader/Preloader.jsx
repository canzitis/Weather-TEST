import preloaderImg from "../../img/preloader-img.gif";
import s from "./preloader.module.css";

const Preloader = () => {
  return (
    <div className={s.preloader}>
      <img src={preloaderImg} alt="" />
    </div>
  );
};

export default Preloader;
