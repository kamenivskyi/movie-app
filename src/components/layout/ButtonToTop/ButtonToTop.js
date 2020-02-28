import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

import './ButtonToTop.css';

const ButtonToTop = () => {
  const btnRef = useRef();

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
      <FontAwesomeIcon icon={faCaretUp} />
    </button>
  );
};
export default ButtonToTop;
