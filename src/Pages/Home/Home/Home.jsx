import OurWebServicesWhichWeProvide from "../OurWebServicesWhichWeProvide/OurWebServicesWhichWeProvide";
import OurWorkProcessSteps from "../OurWorkProcessSteps/OurWorkProcessSteps";
import OurWorks from "../OurWorks/OurWorks";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <OurWorkProcessSteps></OurWorkProcessSteps>
      <OurWebServicesWhichWeProvide></OurWebServicesWhichWeProvide>
      <OurWorks></OurWorks>
    </div>
  );
};

export default Home;
