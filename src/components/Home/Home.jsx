import React, { useState, useRef, useCallback } from 'react';
import useFetchData from '../../customHook/useFetchData';
import MediaCard from '../MediaCard/MediaCard';
import MenuAppBar from '../MenuAppBar/MenuAppBar';
import './Home.css';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';

export default function Home ({history}) {
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

    const rows = [];
    for (let i = 0; i < 50; i++) {
        rows.push(<div className='fake-cards'>
                    <Skeleton key={i+'1st'} variant="rect" width={250} height={160}/>
                    <Skeleton key={i+'2nd'} width="50%"  height={50}/>
                    <Box pt={0.5}>
                        <Skeleton key={i + '3rd'} width="80%" />
                        <Skeleton key={i + '4th'} width="60%" />
                        <Skeleton key={i + '5th'} width="60%" />
                    </Box>
            </div>);
    }
    return (
      <React.Fragment>
        <MenuAppBar history={history}></MenuAppBar>
        <div className="contact-info">
            {!loading ? data.map((user, i) => {
                    if(i+1 === data.length) {
                    return <MediaCard ref={lastItemRef} key={user.login.uuid} user={user} image={user.picture.large} title={user.name.first + user.name.last}></MediaCard>
                    } else {
                    return <MediaCard  key={user.login.uuid}user={user} image={user.picture.large} title={user.name.first + user.name.last}></MediaCard>
                    }
                }) : 
                rows
            }
        </div>
        <div>{error ? 'Error...': ''}</div>
      </React.Fragment>
    );
}