import CommonMarginTopContainer from "@/components/container/CommonMarginTopContainer";
import HomeMarginContainer from "@/components/container/HomeMarginContainer";
import HomeBanner from "@/components/home/HomeBanner";
import HomeService from "@/components/home/HomeService";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeMarginContainer>
        <HomeService />
      </HomeMarginContainer>
    </div>
  );
};

export default Home;
