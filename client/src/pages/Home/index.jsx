import './index.css';
import HeroImg from '../Page Components/HomepageComponents/HeroImg';
import InfoCards from '../Page Components/HomepageComponents/info-section';
import Footer from '../Page Components/HomepageComponents/footerSection';

export default function Home() {

  
  return (
    
  
    <div className="hero">
        <HeroImg />
        <InfoCards />
        <Footer />
    </div>
  )
}
