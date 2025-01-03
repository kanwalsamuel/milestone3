


const Header: React.FC = () => {
  return (
    <header className="bg-black text-white flex justify-between items-center p-4">
      {/* Left Section - Call Us / WhatsApp */}
      <div className="flex gap-4">
        <a href="tel:+1234567890" className="hover:bg-gray-700 p-2 rounded font-santhoshi">Call Us</a>
        <a href="https://wa.me/1234567890" className="hover:bg-gray-700 p-2 rounded font-santhoshi">WhatsApp</a>
      </div>

      {/* Middle Section - Delivery Information */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center text-sm font-santhoshi">
          <span role="img" aria-label="delivery car" className="mr-2">🚗</span>
          Midnight Delivery at 12:00 AM PST
        </div>
        <div className="flex items-center text-sm font-santhoshi">
          <span role="img" aria-label="delivery car" className="mr-2">🚗</span>
          Same Day Delivery Before 11:00 AM PST
        </div>
      </div>

      {/* Right Section - Cart, Checkout, Account */}
      <div className="flex gap-6">
        <a href="/cart" className="hover:bg-gray-700 p-2 rounded flex items-center font-santhoshi">
          <span role="img" aria-label="cart" className="mr-2">🛒</span>
          Cart
        </a>
        <a href="/checkout" className="hover:bg-gray-700 p-2 rounded font-santhoshi">Checkout</a>
        <a href="/account" className="hover:bg-gray-700 p-2 rounded font-santhoshi">My Account</a>
      </div>
    </header>
  );
};

export default Header;
