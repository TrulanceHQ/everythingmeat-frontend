import QuestionHome from "./homeSectionPages/faqHome"
import FifthPage from "./homeSectionPages/fifthPage"
import HeroPage from "./homeSectionPages/heroPage/page"
import SecondPage from "./homeSectionPages/secondPage"
import ThirdPage from "./homeSectionPages/thirdPage"
// import HomeStock from "./homeStock/page"


const HomePage = () => {
  return (
    <>
    <HeroPage />
    <SecondPage />
    <ThirdPage />
    {/* <HomeStock /> */}
    <FifthPage />
    {/* Customer */}
    <QuestionHome />
    </>
  )
}

export default HomePage