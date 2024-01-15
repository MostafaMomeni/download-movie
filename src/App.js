import { useState , useEffect , useCallback } from 'react';
import './App.css';
import "./Variables.css"
import { useRoutes } from "react-router-dom";
import Routes from './Routes';
import Header from './Components/Header/Header';
import { ThemeProvider } from 'react-bootstrap';
import Footer from './Components/Footer/Footer';
import AuthContext from './Context/AuthContext';
import { ThemeProvider as ThemeProviderMui, createTheme } from '@mui/material/styles';


function App() {
  
  let routes = useRoutes(Routes);
  let path = window.location.href
  
  const[isLogin , setIsLogin] = useState(false)
  const[token , setToken] = useState(null)
  const[userInfos , setUserInfos] = useState({})
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const login = useCallback((userInfo , token)=>{
      setToken(token)
      setIsLogin(true)
      setUserInfos(userInfo)
      localStorage.setItem("user" , JSON.stringify(token))
    }
    ,[])

    useEffect(()=>{
      document.documentElement.scrollTop = 0
    },[path])
    
  useEffect(()=>{
      const localStorageData = JSON.parse(localStorage.getItem("user"))
      if(localStorageData){
        setIsLogin(true)
        setUserInfos(localStorageData)
      }else{
        setIsLogin(false)
      }
    },[login])


  return (
    <>
    <AuthContext.Provider value={{
       isLogin,
       token,
       userInfos,
       login,
}}>
    <ThemeProvider dir="rtl">
      <ThemeProviderMui theme={darkTheme}>

    {!path.includes('p-admin') ? <Header />:null}
    {routes}
    {!path.includes('p-admin') ? <Footer />:null}

      </ThemeProviderMui>
    </ThemeProvider>
    </AuthContext.Provider>
    </>
  );
}

export default App;
