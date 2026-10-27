import React from 'react';
import CollegeCard from '../components/CollegeCard';
const Home = () => {
  return (
    <div>
        {/* hero section */}
        <section className='bg-blue-100 py-20 px-6'>
            <div className='max-w-7xl mx-auto text-center'>
                <h1 className='text-5xl font-bold text-blue-800'>Welcome to my college</h1>
                 <p className='text-xl text-gray-600 mt-5'> Building future Leaders through Education</p>
                 <button className='bg-blue-700 text-white px-6 py-3 rounded-lg mt-8'>Apply Now</button>
            </div>
        </section>
        {/* features */}
        <section className='py-16 px-6'>
          <h2 className='text-3xl font-bold text-center'>why choose our college</h2>
          <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-10'>
            <CollegeCard 
            title="Experiance Faculty"
            description="Learn from really experianced teacher from our institute"
            />
            <CollegeCard
            title="Modern Campus"
            description="our classroom provide modern classroom and lab"
            />
            <CollegeCard
            title="Career support"
            description="we help student develope skills for their future careers"
            />
          </div>
        </section>
        <section className='bg-gray-100 py-16 px-6'>
          <h2 className='text-3xl font-bold text-center'>Popular courses</h2>
          <div className='max-w-6xl mx-auto md:grid-cols-3 gap-6 mt-10'>
            <CollegeCard
            title="Bsc Computer Science"
            description="Learn programming and databases and achieve something amazing!"
            />
            <CollegeCard
            title="Btech"
            description="it is provide extreme level of environment of coding "         
            />
            <CollegeCard
            title="Bcom"
            description="this course defines the business management and accountancy"
            />
          </div>
        </section>
      
    </div>
  )
}
export default Home;