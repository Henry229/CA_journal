import React from 'react';
import { useParams } from 'react-router-dom';

const NewEntry = () => {
  const { category } = useParams();

  return (
    <div>
      <h2>New Entry in {category} category</h2>
    </div>
  );
};

export default NewEntry;
