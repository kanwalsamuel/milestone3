
import OccasionComponent from '@/components/ocasions';

import Occasion from '@/components/Category';
import CartPage from './cart/page'; // assuming CartPage is correctly routed

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Render Header */}
    
      <OccasionComponent />
      <Occasion />
      
      {/* Conditional rendering for CartPage */}
      <CartPage />
  
    
      
    </div>
  );
};

export default Page;
