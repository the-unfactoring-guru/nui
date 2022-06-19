import {Box} from '@mui/material';
import { LogSection } from './components/LogSection';
import { SearchSection } from './components/SearchSection';
import { TopBar } from './components/TopBar';
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
        <LogSection/>
    </Box>
  );
}

export default App;
