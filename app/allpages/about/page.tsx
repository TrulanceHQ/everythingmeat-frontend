import AboutHero from "./components/aboutHero"
import AboutQuestion from "./components/aboutQuestion"
import AboutTeam from "./components/aboutTeam"

const AboutPage = () => {
  return (
    <>
    <AboutHero />
    <AboutQuestion />
    <AboutTeam />
    <div className="h-20 w-full bg-customGray"></div>
    </>
  );
};

export default AboutPage;
