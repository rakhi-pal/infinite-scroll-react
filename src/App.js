import './App.css';
import React, { useState, useRef, useCallback } from 'react';
import useFetchData from './customHook/useFetchData';
import MediaCard from "./components/MediaCard/MediaCard";

function App() {
  const count = 50;
  const [start, setStart] = useState(1);
  const {loading, error, data, hasMore} = useFetchData(count, start);
  const observer = useRef(null);
  const lastItemRef = useCallback(node => {
    if(loading) return;
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore) {
        setStart(prevStart => prevStart + count);
      }

    })
    if(node) observer.current.observe(node);

  }, [loading, hasMore])
  return (
    <React.Fragment>
      <div className="contact-info">
        {data.map((user, i) => {
          if(i+1 === data.length) {
            return <MediaCard ref={lastItemRef} key={user.login.uuid} image={user.picture.medium} title={user.name.first + user.name.last}></MediaCard>
          } else {
            return <MediaCard  key={user.login.uuid} image={user.picture.medium} title={user.name.first + user.name.last}></MediaCard>
          }
        })}
      </div>
      <div>{loading ? 'Loading...':''}</div>
      <div>{error ? 'Error...': ''}</div>
    </React.Fragment>
  );
}

export default App;
