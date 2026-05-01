import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DummyContext } from '../context';

const Home = () => {
  const [userName, setUserName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  return (
    <DummyContext.Provider
      value={{
        name: userName,
        age,
      }}
    >
      <h1>Home Page</h1>
      <Link style={{ border: '1px solid red' }} to="/dashbord">
        Click here
      </Link>

      <input onChange={(e) => setUserName(e.target.value)} />
      <input type="number" onChange={(e) => setAge(e.target.value)} />
    </DummyContext.Provider>
  );
};

export default Home;
