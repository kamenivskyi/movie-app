import React from 'react';
import './ButtonToTop.css';

const ButtonToTop = () => {
  const btnRef = React.createRef();

  const goToTop = () => {
    const top = document.querySelector('#root');
    top.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  function toggleButton() {
    const button = btnRef.current.classList;
    if (this.scrollY > 800) {
      button.add('show');
    } else {
      button.remove('show');
    }
  }

  window.addEventListener('scroll', toggleButton);

  return (
    <button
      className='btn-to-top'
      onClick={goToTop}
      ref={btnRef}
      title='To the top'
    >
      <i className='fas fa-caret-up'></i>
    </button>
  );
};
export default ButtonToTop;
