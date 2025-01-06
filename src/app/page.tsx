
import OccasionComponent from '@/components/ocasions';

import Occasion from '@/components/Category';


const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Render Header */}
    
      <OccasionComponent />
      <Occasion />
      
      {/* Conditional rendering for CartPage */}
      
  
    
      
    </div>
  );
};

export default Page;
