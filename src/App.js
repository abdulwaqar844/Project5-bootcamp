import Header from "./Components/Header"
import RouterConfig from "./Route"
import {
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <div id="wrapper">
      <Header />
<Router>
<RouterConfig/>
</Router>
      
    </div>
  );
}

export default App;
