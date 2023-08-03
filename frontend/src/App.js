import { Route, Routes } from "react-router-dom";
import AddPage from "./components/AddPage";
import Admin from "./components/Admin";
import { Box, CssBaseline } from "@mui/material";
import './App.css';

function App() {
  return (
    <>
      <div className='App'>
        <Box  sx={{ display: 'flex' }}>
          <CssBaseline />
          <Routes>
            <Route path="/addPage" element={<AddPage />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Box>
      </div>
    </>
  );
}

export default App;
