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
    getTypeFromSessionStorage('trendingType');
    getPeriodFromSessionStorage('trendingPeriod');

    setCurrentPage(match.params.page);
  }, []);

  useEffect(() => {
    getTrendingList(currentType, currentPeriod, currentPage);
  }, [currentType, currentPeriod, currentPage]);

  const getTypeFromSessionStorage = (key) => {
    const typeFromSessionStorage = sessionStorage.getItem(key);

    if (typeFromSessionStorage) {
      setCurrentType(typeFromSessionStorage);
    }
  };

  const getPeriodFromSessionStorage = (key) => {
    const periodFromSStorage = sessionStorage.getItem(key);
    if (periodFromSStorage) {
      setCurrentPeriod(periodFromSStorage);
    }
  };

  const setToSessionStorage = (value, key) =>
    sessionStorage.setItem(value, key);

  if (!items.results) return null;

  const updateMedia = async (e) => {
    e.preventDefault();

    const type = e.target.getAttribute('data-type');
    const period = e.target.getAttribute('data-period');

    if (type) {
      setCurrentType(type);
      setToSessionStorage('trendingType', type);
    } else if (period) {
      setCurrentPeriod(period);
      setToSessionStorage('trendingPeriod', period);
    }
  };

  const handlePageChange = (activePage) => {
    setCurrentPage(activePage);
    history.push(`/trending/${activePage}`);
  };

  return (
    <div className='container'>
      <MediaTabs
        onClick={updateMedia}
        type={currentType}
        period={currentPeriod}
      />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <MediaItems items={results} type={currentType} simpleRow />

          <PaginationWrapper
            currentPage={Number(page)}
            totalItems={total_results}
            totalPages={total_pages}
            onChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ trendingList: { items, loading } }) => ({
  items,
  loading,
});

export default connect(mapStateToProps, { getTrendingList })(Trending);
