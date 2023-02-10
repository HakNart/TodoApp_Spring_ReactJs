import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
function App() {

const customTheme = createTheme({

})

  return (
      <ThemeProvider theme={customTheme}>
          <div>Hello</div>
      </ThemeProvider>
  );
}

export default App
