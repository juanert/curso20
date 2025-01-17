import Button from "./../components/general/Button";
import Article from "./../components/general/Article";

function Home() {
  return (
    <>
      <section>
        Header
        <Button texto="Hola Mundo" />
        <Article>
          <h2>Titulo</h2>
          <p>Parrafo</p>
        </Article>
      </section>
      <section>
        Products
      </section>
      <section>
        More info
      </section>
    </>
  );
}

export default Home;