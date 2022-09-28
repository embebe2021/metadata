import BodyLeft from "./BodyLeft/BodyLeft";
import BodyRight from "./BodyRight/BodyRight";
import bodyStyle from "./Body.module.css";

const Body = () => {
  return (
    <section className={bodyStyle["app__body"]}>
      <BodyRight />
      <BodyLeft />
    </section>
  );
};

export default Body;
