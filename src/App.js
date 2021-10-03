import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Home from './component/home/Home';
import { GITHUB_GRAPH_QL_DATA } from './config';

function App() {
  //Create a github client to fetch repo data
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: GITHUB_GRAPH_QL_DATA.GITHUB_GRAPH_QL_API,
    headers: {
      authorization: GITHUB_GRAPH_QL_DATA.TOKEN,
    }
  });

  return (
    // The Apollo Provider send all fetch data to All components 
    <ApolloProvider client={client}>
      <div className="App">
        <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;
