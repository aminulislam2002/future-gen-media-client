import bannerImage from "../../../assets/images/Banner/html-css-collage-concept-with-person.jpg";

const TopBanner = () => {
  return (
    <div className="max-h-screen">
      <div>
        <img src={bannerImage} className="h-screen w-screen" alt="Banner Image" />
      </div>
      <div></div>
    </div>
  );
};

export default TopBanner;
