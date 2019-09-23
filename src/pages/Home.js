import React from 'react';

import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';
import { Layout } from '../components/Layout';

export const Home = ({ id }) => {
  return (
    <Layout
      title='Petgram - Tu app de fotos de mascotas'
      subtitle='Con Petgram puedes encontrar fotos de animales domésticos'
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  );
};
