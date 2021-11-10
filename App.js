import react from 'react';
import reactDom from 'react-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import MyInfo from './Components/MyInfo';
//import TodoList from './TodoList'
import Main from './Components/Main';



function App()
{
    return(
        <div>
            <Navbar />
            <Main />
            <MyInfo/>
            <Footer />
           
        </div>
    )


    }

export default App
