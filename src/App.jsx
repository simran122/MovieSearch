
import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import store from './Store';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Error from './components/Error';
import { ThemeProvider, responsiveFontSizes, createTheme } from "@mui/material/styles";
import { useState, createContext } from 'react';
const theme = createTheme();
const responsiveTheme = responsiveFontSizes(theme)


export const SearchContext = createContext()

function App() {
  const [search, setSearch] = useState("")


  return (
    <>
      <SearchContext.Provider value={search}>
        <ThemeProvider theme={responsiveTheme}>
          <CssBaseline />
          <Provider store={store}>
            <Navbar setSearch={setSearch} search={search} />
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="*" element={<Error />} />
            </Routes>


          </Provider>

        </ThemeProvider>
      </SearchContext.Provider>
    </>
  )
}

export default App
