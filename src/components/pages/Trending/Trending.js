import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import trendingContext from '../../../context/trending/trendingContext';

import MediaItems from '../../layout/MediaItems';
import MediaTabs from '../../layout/MediaTabs';
import PaginationWrapper from '../../layout/PaginationWrapper';
import Spinner from '../../common/Spinner';

const Trending = ({ history }) => {
  const [currentType, setCurrentType] = useState('movie');
  const [currentPeriod, setCurrentPeriod] = useState('week');
  const [currentPage, setCurrentPage] = useState(1);

  const { getTrendingItems, items, loading } = useContext(trendingContext);

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
    } else {
      setCurrentPeriod(period);
      getTrendingItems(currentType, currentPeriod, currentPage);
    }
  };

  const handlePageChange = activePage => {
    console.log(activePage);
    setCurrentPage(activePage);
    getTrendingItems(currentType, currentPeriod, activePage);
  };

  return (
    <div className='container-fluid'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <MediaTabs
            onClick={updateMedia}
            type={currentType}
            period={currentPeriod}
          />

          <div className='row'>
            <MediaItems items={results} type={currentType} />
            <PaginationWrapper
              currentPage={currentPage}
              totalItems={total_results}
              totalPages={total_pages}
              onChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default withRouter(React.memo(Trending));
