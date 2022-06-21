import {Box} from '@mui/material';
import { SearchSection } from './components/SearchSection';
import { TopBar } from './components/TopBar';
import './index.css';

function App() {
  return (
    <Box
        style={{
                position: "absolute",
                border: "1px solid black",
                backgroundColor: "#fff",
                width: 800,
                height: 600
            }}
    >
        <TopBar/>
        <SearchSection/>
    </Box>
  );
}

export default App;
