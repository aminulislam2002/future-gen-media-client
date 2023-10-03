import OurWebServicesWhichWeProvide from "../OurWebServicesWhichWeProvide/OurWebServicesWhichWeProvide";
import OurWorkProcessSteps from "../OurWorkProcessSteps/OurWorkProcessSteps";
import OurWorksForOurClients from "../OurWorksForOurClients/OurWorksForOurClients";
import TopBanner from "../TopBanner/TopBanner";
import WhatOurClientsSayAboutUS from "../WhatOurClientsSayAboutUS/WhatOurClientsSayAboutUS";

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <OurWorkProcessSteps></OurWorkProcessSteps>
      <OurWebServicesWhichWeProvide></OurWebServicesWhichWeProvide>
      <OurWorksForOurClients></OurWorksForOurClients>
      <WhatOurClientsSayAboutUS></WhatOurClientsSayAboutUS>
    </div>
  );
};

export default Home;
