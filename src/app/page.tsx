
import Header from '@/components/Header';// Assuming the Header component is in the same directory
import Navbar from "../components/Nav"
import OccasionComponent from '@/components/ocasions';
import Footer from '@/components/Footer';
import Occasion from '@/components/Category';


const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Render Header */}
      <Header />
      <Navbar/>
      <OccasionComponent/>
      <Occasion/>



    
      
<Footer/>
  
      

      {/* Main Content Section */}
    
    </div>
  );
};

export default Page;
