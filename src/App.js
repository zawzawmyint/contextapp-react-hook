import React from 'react';
import BookList from './components/BookList';
import AuthContextProvider from './components/contexts/AuthContext';
import BookContextProvider from './components/contexts/BookContext';
import ThemeContextProvider from './components/contexts/ThemeContext';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';


function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
