import React from 'react';

import HitCounter from '../components/HitCounter';

const DATABASE_PATH = '/src/database.json';

function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number <HitCounter/>
      </p>
    </main>
  );
}

export default Home;
