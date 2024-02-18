import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';
import './Home.scss';

import { useGetCategoriesQuery } from '../../redux/slices/api';

export default function Home() {
  const { data: categories, isLoading, isSuccess } = useGetCategoriesQuery();

  if (isLoading) (<div>Loading</div>);

  return (
    <Fragment>
      <Navbar />
      <h1>Awards 2021</h1>
      {isSuccess && (
      <>
        {categories.map((category) => (
          <section key={category.id} className='category_section'>
            <h2 className='category_section__title'>{category.title}</h2>
            <div className='cards'>
              {category?.nominees.map((nom) => (
                <Card key={nom.id} nominee={nom} />
              ))}
            </div>
          </section>
        ))}
      </>
    )}
    </Fragment>
  )
}
