import { useEffect } from 'react';
import Carousel from '../components/home/Carousel';
import Counter from '../components/home/Counter';
import About from '../components/home/About';
import Categories from '../components/home/Categories';
import Services from '../components/home/Services';
import FAQ from '../components/home/FAQ';
import Testimonials from '../components/Testimonials';
import SuccessStories from '../components/SuccessStories';

const Home = () => {
  useEffect(() => {
    document.title = 'Tinker Tutor - STEM Learning Platform for Kids';
  }, []);

  return (
    <>
      <Carousel />
      <Counter />
      <About />
      <Categories />
      <Services />
      <SuccessStories/>
      
      <Testimonials/>
      <FAQ />
    </>
  );
};

export default Home;