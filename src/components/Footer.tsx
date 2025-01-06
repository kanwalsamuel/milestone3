import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-600 text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 border-b border-black pb-8">
          
          {/* FORMATION Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold text-indigo-300 mb-6">INFORMATION</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/about-us" className="text-lg hover:text-indigo-400 transition duration-300">ABOUT US</Link>
              </li>
              <li>
                <Link href="/" className="text-lg hover:text-indigo-400 transition duration-300">DELIVERY INFO</Link>
              </li>
              <li>
                <Link href="/" className="text-lg hover:text-indigo-400 transition duration-300">PRIVACY POLICY</Link>
              </li>
              <li>
                <Link href="/" className="text-lg hover:text-indigo-400 transition duration-300">TERMS & CONDITIONS</Link>
              </li>
              <li>
                <Link href="/" className="text-lg hover:text-indigo-400 transition duration-300">REFUND POLICY</Link>
              </li>
              <li>
                <Link href="/" className="text-lg hover:text-indigo-400 transition duration-300">FAQ</Link>
              </li>
            </ul>
          </section>

          {/* ONLINE GIFT SHOP Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold text-indigo-300 mb-6">ONLINE GIFT SHOP</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/gifts-by-occasion" className="text-lg hover:text-indigo-400 transition duration-300">GIFTS BY OCCASION</Link>
              </li>
              <li>
                <Link href="/mothers-day-gifts" className="text-lg hover:text-indigo-400 transition duration-300">MOTHER’S DAY</Link>
              </li>
              <li>
                <Link href="/valentines-day-gifts" className="text-lg hover:text-indigo-400 transition duration-300">VALENTINE’S DAY</Link>
              </li>
              <li>
                <Link href="/eid-gifts" className="text-lg hover:text-indigo-400 transition duration-300">EID GIFTS</Link>
              </li>
              <li>
                <Link href="/birthday-gifts" className="text-lg hover:text-indigo-400 transition duration-300">BIRTHDAY GIFTS</Link>
              </li>
              <li>
                <Link href="/combo-gifts" className="text-lg hover:text-indigo-400 transition duration-300">COMBO GIFTS</Link>
              </li>
              <li>
                <Link href="/gifts-for-her" className="text-lg hover:text-indigo-400 transition duration-300">GIFTS FOR HER</Link>
              </li>
              <li>
                <Link href="/gifts-for-him" className="text-lg hover:text-indigo-400 transition duration-300">GIFTS FOR HIM</Link>
              </li>
              <li>
                <Link href="/exclusive-gifts" className="text-lg hover:text-indigo-400 transition duration-300">EXCLUSIVE GIFTS</Link>
              </li>
              <li>
                <Link href="/gift-wrapping" className="text-lg hover:text-indigo-400 transition duration-300">GIFT WRAPPING</Link>
              </li>
            </ul>
          </section>

          {/* CONTACT US Section */}
          <section>
            <h2 className="text-3xl font-semibold text-indigo-300 mb-6">CONTACT US</h2>
            <p className="text-lg mb-2">
              <strong>Phone:</strong> <span className="text-indigo-400">92-300-2328255</span>
            </p>
            <p className="text-lg">
              <strong>Email:</strong>{' '}
              <Link href="mailto:info@thegiftshop.pk" className="text-indigo-400 hover:text-indigo-500 transition duration-300">info@thegiftshop.pk</Link>
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
