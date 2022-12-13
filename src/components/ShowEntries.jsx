import React from 'react';

const ShowEntries = ({ entry }) => {
  return (
    <div>
      <h5>{entry.content}</h5>
      <p>Posted in {entry.category}</p>
    </div>
  );
};

export default ShowEntries;
