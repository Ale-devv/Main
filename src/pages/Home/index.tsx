import useMediaQuery from "../../hooks/useMediaQuery";
import AboutMeSection from "./components/AboutMeSection/index";
import ProjectsSection from "./components/ProjectsSection";
import MainComponent from "./components/MainComponent";
import CertificatesSection from "./components/CertificatesSection";
import SkillsSection from "./components/SkillsSection";
import Header from '../../layouts/Header/index';

const Home = () => {
    const isMobile = useMediaQuery("(max-width: 900px)");

    return (
        <>
            <MainComponent isMobile={isMobile} />
            <AboutMeSection isMobile={isMobile} />
            <ProjectsSection />
            <CertificatesSection />
            <SkillsSection />
            <Header />
            
        </>
    );
};

export default Home;
