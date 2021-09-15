import {
  Footer,
  Header,
  ItemDetailContainer,
  ItemListContainer,
} from './components';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <ItemDetailContainer />
        <ItemListContainer />
      </main>
      <Footer />
    </>
  );
}

export default App;
