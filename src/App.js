import './App.scss';
import api from './api/Members';
import { useEffect, useState } from 'react';
import Table from './components/Table';

/**
 * Main App component
 *
 * @returns void
 */
function App() {
  const [members, setMembers] = useState(null);

  // Grab the API data
  useEffect(() => {
    api.get('/members').then((response) => {
      setMembers(response.data.data);
    });
  }, []);

  // Bail if API data is empty
  if (!members) return null;

  return (
    <div className="app">
      <div className="content">
        <Table members={members} />
      </div>
    </div>
  );
}

export default App;
