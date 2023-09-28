import OurWebServicesWhichWeProvide from "../OurWebServicesWhichWeProvide/OurWebServicesWhichWeProvide";
import OurWorkProcessSteps from "../OurWorkProcessSteps/OurWorkProcessSteps";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <OurWorkProcessSteps></OurWorkProcessSteps>
      <OurWebServicesWhichWeProvide></OurWebServicesWhichWeProvide>
    </div>
  );
};

export default Home;
