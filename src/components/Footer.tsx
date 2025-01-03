

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-600 text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 border-b border-black pb-8">
          
          {/* FORMATION Section */}
          <section>
            <h2 className="text-3xl font-semibold text-indigo-300 mb-6">FORMATION</h2>
            <ul className="space-y-4">
              <li>
                <a href="/about-us" className="text-lg hover:text-indigo-400 transition duration-300">ABOUT US</a>
              </li>
              <li>
                <a href="/delivery-info" className="text-lg hover:text-indigo-400 transition duration-300">DELIVERY INFO</a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-lg hover:text-indigo-400 transition duration-300">PRIVACY POLICY</a>
              </li>
              <li>
                <a href="/terms" className="text-lg hover:text-indigo-400 transition duration-300">TERMS & CONDITIONS</a>
              </li>
              <li>
                <a href="/refund-return-policy" className="text-lg hover:text-indigo-400 transition duration-300">REFUND POLICY</a>
              </li>
              <li>
                <a href="/faq" className="text-lg hover:text-indigo-400 transition duration-300">FAQ</a>
              </li>
            </ul>
          </section>

          {/* ONLINE GIFT SHOP Section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold text-indigo-300 mb-6">ONLINE GIFT SHOP</h2>
              <ul className="space-y-4">
                <li>
                  <a href="/gifts-by-occasion" className="text-lg hover:text-indigo-400 transition duration-300">GIFTS BY OCCASION</a>
                </li>
                <li>
                  <a href="/mothers-day-gifts" className="text-lg hover:text-indigo-400 transition duration-300">MOTHER’S DAY</a>
                </li>
                <li>
                  <a href="/valentines-day-gifts" className="text-lg hover:text-indigo-400 transition duration-300">VALENTINE’S DAY</a>
                </li>
                <li>
                  <a href="/eid-gifts" className="text-lg hover:text-indigo-400 transition duration-300">EID GIFTS</a>
                </li>
                <li>
                  <a href="/birthday-gifts" className="text-lg hover:text-indigo-400 transition duration-300">BIRTHDAY GIFTS</a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-4">
                <li>
                  <a href="/combo-gifts" className="text-lg hover:text-indigo-400 transition duration-300">COMBO GIFTS</a>
                </li>
                <li>
                  <a href="/gifts-for-her" className="text-lg hover:text-indigo-400 transition duration-300">GIFTS FOR HER</a>
                </li>
                <li>
                  <a href="/gifts-for-him" className="text-lg hover:text-indigo-400 transition duration-300">GIFTS FOR HIM</a>
                </li>
                <li>
                  <a href="/exclusive-gifts" className="text-lg hover:text-indigo-400 transition duration-300">EXCLUSIVE GIFTS</a>
                </li>
                <li>
                  <a href="/gift-wrapping" className="text-lg hover:text-indigo-400 transition duration-300">GIFT WRAPPING</a>
                </li>
              </ul>
            </div>
          </section>

          {/* CONTACT US Section */}
          <section>
            <h2 className="text-3xl font-semibold text-indigo-300 mb-6">CONTACT US</h2>
            <p className="text-lg mb-2">
              <strong>Phone:</strong> <span className="text-indigo-400">92-300-2328255</span>
            </p>
            <p className="text-lg">
              <strong>Email:</strong>{' '}
              <a href="mailto:info@thegiftshop.pk" className="text-indigo-400 hover:text- transition duration-300">info@thegiftshop.pk</a>
            </p>
          </section>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-12 pt-6 border-t border-black">
          <p className="text-lg text-indigo-300">© 2024 WifeTreasure.pk - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
