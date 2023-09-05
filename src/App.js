
import './App.css';
import RootComponent from "./Router";
import { PlanProvider } from './contexts/PlanContext';

function App() {
    return (
        <PlanProvider>
            <RootComponent />
        </PlanProvider>
    );
}

export default App;
