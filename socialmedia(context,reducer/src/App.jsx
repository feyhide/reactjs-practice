import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Form from './components/Form';
import Postlist from './components/Postlist';
import NoOfPostProvider from './stores/post-list-store';

const App = () => {
  const [selection, setSelection] = useState("Home");
  return (
    <>
      <NoOfPostProvider>
        <div className='flex flex-col justify-between fixed w-screen h-screen'>
          <Header />
          <Footer />
        </div>
        <div className='w-full fixed  flex flex-row justify-between h-screen'>
          <Sidebar selection={selection} setSelection={setSelection} />
          {selection === 'Home' ? <Postlist /> : <Form />}
        </div>  
      </NoOfPostProvider>
    </>
  );
}

export default App;
