import './App.scss';
import api from './api/Members';
import { useEffect, useState } from 'react';
import Table from './components/Table';

function App() {
  const [members, setMembers] = useState(null);

  useEffect(() => {
    api.get('/members').then((response) => {
      setMembers(response.data.data);
    });
  }, []);

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
