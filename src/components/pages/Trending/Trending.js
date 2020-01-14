import React, { useContext, useState, useEffect } from 'react';
import trendingContext from '../../../context/trending/trendingContext';
import MediaItem from '../../MediaItem';
import MediaTabs from '../../layout/MediaTabs';
import PaginationWrapper from '../../layout/PaginationWrapper';

const Trending = () => {
  const [currentType, setCurrentType] = useState('movie');
  const [currentPeriod, setCurrentPeriod] = useState('week');
  const [currentPage, setCurrentPage] = useState(1);

  const { getTrendingItems, items } = useContext(trendingContext);
  const { results, total_results, total_pages } = items;
  console.log(items);

  useEffect(() => {
    getTrendingItems(currentType, currentPeriod);
  }, [currentType, currentPeriod]);

  const updateMedia = async e => {
    e.preventDefault();

    const type = e.target.getAttribute('data-type');
    const period = e.target.getAttribute('data-period');

    if (type) {
      setCurrentType(type);
      getTrendingItems(currentType, currentPeriod, currentPage);
      console.log(currentPage);
    } else {
      setCurrentPeriod(period);
      getTrendingItems(currentType, currentPeriod, currentPage);
      console.log(currentPage);
    }
  };

  const handlePageChange = activePage => {
    setCurrentPage(activePage);
    getTrendingItems(currentType, currentPeriod, activePage);
  };

  return (
    <div className='container-fluid'>
      <MediaTabs
        onClick={updateMedia}
        type={currentType}
        period={currentPeriod}
      />
      <div className='row'>
        <MediaItem items={results} type={currentType} />
        <PaginationWrapper
          currentPage={currentPage}
          totalItems={total_results}
          totalPages={total_pages}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};
export default Trending;
