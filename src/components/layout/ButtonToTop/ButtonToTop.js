import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

import './ButtonToTop.css';

const ButtonToTop = () => {
  const btnRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', toggleButton);
    return () => {
      window.removeEventListener('scroll', toggleButton);
    };
  }, []);

  const goToTop = () => {
    const top = document.querySelector('#root');

    top.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  function toggleButton() {
    const button = btnRef.current;

    if (this.scrollY > 800) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
  }

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
