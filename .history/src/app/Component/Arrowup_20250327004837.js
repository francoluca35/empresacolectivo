import React from 'react';

function Arrowup() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="fixed bottom-5 right-5 w-12 h-12 bg-red-600 flex justify-center items-center text-3xl text-white rounded-full cursor-pointer"
      onClick={scrollToTop}
    >
      ^
    </div>
  );
}

export default Arrowup;