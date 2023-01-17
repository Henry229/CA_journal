import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import JournalContext from '../context';

const Home = () => {
  const { state } = useContext(JournalContext);
  const { entries } = state;
  return (
    <>
      <h2>Journal Entries</h2>
      {entries.map((entry, index) => (
        <p key={index}>
          <Link to={`entry/${index}`}>{entry.content}</Link>
        </p>
      ))}
    </>
  );
};

export default Home;
