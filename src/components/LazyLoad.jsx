import React, { useState, useEffect, useCallback, useRef } from 'react';
import LaunchCard from '../components/LaunchCards/LaunchCard'
import { useFetch } from '../hooks/useFetch';

const LazyLoadComponent = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const containerRef = useRef(null);

    const {isLoading, data, fetchData} = useFetch();

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const bottom = containerRef.current.getBoundingClientRect().bottom;
      const isNearBottom = bottom <= window.innerHeight + 100;
      if (isNearBottom && !isLoading) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  }, [isLoading]);
  useEffect(() => {
    fetchData((page - 1) * limit, limit);
  }, [page]);

  useEffect(() => {
    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
    
      ref={containerRef}
      className='cards-container'>
        {data.map((item) => (
            <LaunchCard key={item.launch_date_utc+item.flight_number} {...item}/>
        ))}

      {isLoading && <p>Loading more items...</p>}
    </div>
  );
};

export default LazyLoadComponent;