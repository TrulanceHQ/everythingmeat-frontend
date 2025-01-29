import AboutHero from "./components/AboutHero"
import AboutQuestion from "./components/AboutQuestion"
import AboutTeam from "./components/AboutTeam"

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
