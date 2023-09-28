import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import HistoryOfFutureGenMedia from "../Pages/AboutUs/HistoryOfFutureGenMedia";
import MissionAndVision from "../Pages/AboutUs/MissionAndVision";
import WebsiteDevelopment from "../Pages/OurServices/WebsiteDevelopment";
import WebsiteDesign from "../Pages/OurServices/WebsiteDesign";
import Website from "../Pages/OurWorks/Website";
import MeetWithOurClients from "../Pages/OurClients/MeetWithOurClients";
import OurClientsFeedback from "../Pages/OurClients/OurClientsFeedback";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "history-of-future-gen-media",
        element: <HistoryOfFutureGenMedia></HistoryOfFutureGenMedia>,
      },
      {
        path: "mission-and-vision",
        element: <MissionAndVision></MissionAndVision>,
      },
      {
        path: "website-development",
        element: <WebsiteDevelopment></WebsiteDevelopment>,
      },
      {
        path: "website-design",
        element: <WebsiteDesign></WebsiteDesign>,
      },
      {
        path: "website",
        element: <Website></Website>,
      },
      {
        path: "meet-with-our-clients",
        element: <MeetWithOurClients></MeetWithOurClients>,
      },
      {
        path: "our-clients-feedback",
        element: <OurClientsFeedback></OurClientsFeedback>,
      },
      {
        path: "blogs",
        element: <Blog></Blog>,
      },
      {
        path: "contacts",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
