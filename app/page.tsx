import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BodyTable from './components/BodyTable';

const App = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar /><div className="flex-grow p-4">
          <BodyTable />
        </div>
      </div>
    </div>

  );
};

export default App;
