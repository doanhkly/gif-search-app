import React, { useState, useEffect } from 'react';
import './App.css';
import { useDebounce, getSearch, getTrending }  from './utils'
import { SearchBar, GifTable, Footer, GifModal, NoGif } from './components'
import Pagination from './components/Pagination';
const LIMIT = 25;

const App = () => {
  const [term, setTerm] = useState('');
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [currentGif, setCurrentGif] = useState(null);
  const [paginate, setPaginate] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const debounceTerm = useDebounce(term, 1000);

  useEffect(() => {
    async function fetchData() {
      try {
        if (debounceTerm) {
          // Search term is given; display GIFs with given term
          setIsLoading(true);
          getSearch(debounceTerm, 0, LIMIT).then(res => {
            setGifs(res.data);
            setIsLoading(false);
            setPaginate(0);
            setTotalCount(res.pagination.total_count);
            //console.log(res);
          })
        } else {
          // No search term given; display trending list of GIFs
          setIsLoading(true);
          getTrending(0, LIMIT).then(res => {
            setGifs(res.data);
            setIsLoading(false);
            setPaginate(0);
            setTotalCount(res.pagination.total_count);
            //console.log(res.data);
          })
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [debounceTerm])

  useEffect(() => {
    async function fetchData() {
      if (debounceTerm) {
        setIsLoading(true);
        getSearch(debounceTerm, paginate, LIMIT).then(res => {
          setGifs(res.data);
          setIsLoading(false);
          //console.log(res);
        })
      } else {
        setIsLoading(true);
        getTrending(paginate, LIMIT).then(res => {
          setGifs(res.data);
          setIsLoading(false);
          //console.log(res);
        })
      }
    }
    fetchData();
  }, [paginate, debounceTerm])


  const onChange = (searchTerm) => {
    setTerm(searchTerm.toLowerCase().split(' ').join('+'));
  }

  const openModal = (gif) => {
    setShow(true);
    setCurrentGif(gif);
  }

  const closeModal = () => {
    setShow(false);
    setCurrentGif(null);
  }

  return (
    <div className="app">
      <SearchBar onChange={onChange} />
      <Pagination totalCount={totalCount} page={paginate} onPageChange={setPaginate} limit={LIMIT}/>

      {isLoading ? 
        (<div style={{height:'100vh'}}> </div>) 
          : 
        (gifs.length === 0 ? (<NoGif term={debounceTerm}/>) : (<GifTable items={gifs} onSelectGif={currentGif => openModal(currentGif)}/>))
      }

      <GifModal show={show} gif={currentGif} onClose={() => closeModal()}/> 
      <Footer/> 
    </div>
  );
}

export default App;