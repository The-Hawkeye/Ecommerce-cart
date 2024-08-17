// import React from 'react';

// const DiscountBanner = () => {
//   return (
//     <div className="bg-green-500 text-white p-2 text-center sticky top-0 z-50">
//       <p>Get 10% off on all purchases! Use code: DISCOUNT10</p>
//     </div>
//   );
// };

// export default DiscountBanner;
import React from 'react';
import './DiscountBanner.css'; // Ensure to import the CSS file

const DiscountBanner = () => {
  return (
    <div className="bg-green-500 text-white p-2 text-center sticky top-0 z-50">
      <p className="blink-move-text">
        Get 10% off on all purchases! Use code: DISCOUNT10
      </p>
    </div>
  );
};

export default DiscountBanner;
