import React, { useContext, useState, useEffect } from 'react';
import PopularContext from '../../../context/popular/popularContext';
import MediaItem from '../../MediaItem';
import MediaTabs from '../../layout/MediaTabs';

const Popular = () => {
  const [currentType, setCurrentType] = useState('movie');

  const popularContext = useContext(PopularContext);
  const { getPopularItems, items } = popularContext;

  useEffect(() => {
    getPopularItems(currentType);
  }, []);

  const updateType = async e => {
    e.preventDefault();
    const type = e.target.getAttribute('data-type');
    setCurrentType(type);
    getPopularItems(type);
  };

  return (
    <div className='container-fluid'>
      <MediaTabs onClick={updateType} type={currentType} />
      <div className='row'>
        <MediaItem items={items} type={currentType} />;
      </div>
    </div>
  );
};
export default Popular;
