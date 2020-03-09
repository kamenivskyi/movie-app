import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getTrendingList } from '../../../redux/trendingList/trendingListActions';

import MediaItems from '../../layout/MediaItems';
import MediaTabs from '../../layout/MediaTabs';
import PaginationWrapper from '../../layout/PaginationWrapper';
import Spinner from '../../common/Spinner';

const Trending = ({ getTrendingList, items, loading, match, history }) => {
  const [currentType, setCurrentType] = useState('movie');
  const [currentPeriod, setCurrentPeriod] = useState('week');
  const [currentPage, setCurrentPage] = useState(1);

  const { results, total_results, total_pages, page } = items;

  useEffect(() => {
    getTrendingList(currentType, currentPeriod, currentPage);
  }, [currentType, currentPeriod, currentPage]);

  useEffect(() => {
    getTypeFromSStorage('trendingType');
    getPeriodFromSStorage('trendingPeriod');

    setCurrentPage(match.params.page);
  }, []);

  const getTypeFromSStorage = key => {
    const type = sessionStorage.getItem(key);

    setCurrentType(type);
  };

  const getPeriodFromSStorage = key => {
    const periodFromSStorage = sessionStorage.getItem(key);

    setCurrentPeriod(periodFromSStorage);
  };

  const setToSStorage = (value, key) => sessionStorage.setItem(value, key);

  if (!items.results) return null;

  const updateMedia = async e => {
    e.preventDefault();

    const type = e.target.getAttribute('data-type');
    const period = e.target.getAttribute('data-period');

    if (type) {
      setCurrentType(type);
      setToSStorage('trendingType', type);
    } else if (period) {
      setCurrentPeriod(period);
      setToSStorage('trendingPeriod', period);
    }
  };

  const handlePageChange = activePage => {
    setCurrentPage(activePage);
    history.push(`/trending/${activePage}`);
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
              currentPage={Number(page)}
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

const mapStateToProps = ({ trendingList: { items, loading } }) => ({
  items,
  loading
});

export default connect(mapStateToProps, { getTrendingList })(Trending);
