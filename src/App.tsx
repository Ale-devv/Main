import "./global.css";
import RoutesApp from "./routes";
import { AppContextProvider } from "./context/AppContext";          
import GlobalStyle from "./GlobalStyle";
import 'react-toastify/dist/ReactToastify.css';
import ScrollTopButton from './components/ScrollTopButton/ScrollTopButton';




const App = () => {
    return (
        <AppContextProvider>
			<GlobalStyle />
            <RoutesApp />
            <ScrollTopButton />
        </AppContextProvider>
    );
};

export default App;

