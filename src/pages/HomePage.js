import React, {useEffect, useState} from 'react';
import Hero from '../components/Hero';
import Cocktails from '../components/Cocktails';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import {FaSearch} from 'react-icons/fa';
import Lottie from 'react-lottie';
import animationData from '../assets/animation/drink-animation.json';
import {Link} from 'react-router-dom';
import { useGlobalContext } from '../context';
import useTitle from '../useTitle';




const HomePage = () => {
useTitle('Home')
  const {  
    query,
    isLoading,
    data,
    isError,
    count,
    searchCocktail,
    deleteScrollPosition,
    scrollPosition
  } = useGlobalContext();

    const [input, setInput] = useState(query);

    const handleSubmit = (e) => {
      e.preventDefault()
      searchCocktail(input)
    }

  useEffect (() => {
    if(scrollPosition){
      window.scrollTo(0, scrollPosition);
      deleteScrollPosition();
    }
  },[])

  return <>
  <Hero >
    <div className='home-hero'>
      <div className='home-hero-text'>
        <div className='home-hero-title'>
          <h2 className='brand-color'>
            WIKI DRINK
          </h2>
          <h4>tutti i cocktail del mondo a portata di click</h4>
        </div>
          <p>Wiki drink è un database internazionale che mette a tua disposizione, in maniera <span className='brand-color'>gratuita</span>, le ricette dei più importanti e diffusi cocktail al mondo.</p>
        <Link to='/about' className='btn btn-primary'>Scopri di più</Link>
      </div>
      <div className='home-hero-img'>
        <Lottie
        options={{
          loop:true,
          autoplay:true,
          reverse:true,
          animationData:animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
        height={350}
        />
      </div>
    </div>
  </Hero>
  <section className='container home-screen'>
    <div className='search-bar'>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='drink'>
            <h4>cerca il tuo drink</h4>
          </label>
          <div className='input-search'>
          <input type="text" id='drink' className='input' placeholder={query} value={input} onChange={(e) => setInput(e.target.value)}/>
          <button className='btn icon-btn' type='submit'>
            <FaSearch className='icon'/>
          </button>
          </div>
        </form>
      </div>
      <p className='result'>{count} risultati</p>
    </div>
     {!isLoading && isError ? (
          <ErrorMessage>Nessun Cocktail Trovato</ErrorMessage>
        ) : !isLoading && !isError ? (
          <Cocktails data={data.drinks} />
        ) : (
          <Loading />
        )}
  </section>
  </>
}

export default HomePage