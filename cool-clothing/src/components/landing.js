import Header from "./Header";
import Product from "./Product";

function Landing() {
  //stores about page
  return (
    <>
      <Header logged={true} />
      <div
        style={{
          textAlign: "center",
          margin: "30px",
          padding: "0",
          borderLeft: "black 2px solid",
          borderRight: "black 2px solid",
        }}
      >
        <h1>
          <u>About</u>
        </h1>
        <p style={{ fontSize: "20px" }}>
          The Company was first founded in 2001, when our CEO Lui quaerat
          dolorum! Ad expedita lorem ipsum dolor sit amet, Lorem ipsum dolor sit
          amet consectetur adipisicing elit.
          <br /> Itaque quisquam, veniam distinctio consequuntur est veritatis,
          velit possimus laudantium maxime nihil, excepturi provident cumque
          vitae obcaecati ut?Lorem ipsum, dolor
          <br /> sit amet consectetur adipisicing elit. Architecto dolore
          temporibus excepturi ex cumque aperiam, laborum voluptatibus harum
          nemo ab suscipit dignissimos asperiores?
          <br /> Exercitationem perferendis minima numquam necessitatibus
          cupiditate voluptates. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Blanditiis excepturi
          <br /> obcaecati nulla, eius veniam ex vel, nisi officiis accusamus
          incidunt fugiat placeat quaerat rerum quidem reprehenderit id, quasi
          dolorem temporibus.
          <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Quibusdam libero distinctio illo dicta amet doloribus dignissimos, ad
          molestiae eos corrupti quo
          <br /> beatae impedit a optio! Sapiente voluptas error corrupti
          molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Adipisci repellendus dicta possimus
          <br /> inventore doloremque, itaque eos fugit deserunt, illo
          laudantium eum veniam mollitia asperiores, at quod neque voluptatem!
          Corporis, debitis.
          <br />
          Then in 2005 heos kwjd dolerm bom pucentesque Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Itaque quisquam, veniam distinctio
          consequuntur est veritatis
          <br /> quaerat dolorum! Ad expedita, velit possimus laudantium maxime
          nihil, excepturi provident cumque vitae obcaecati ut?Lorem ipsum,
          dolor sit amet
          <br /> consectetur adipisicing elit. Architecto dolore temporibus
          excepturi ex cumque aperiam, laborum voluptatibus harum nemo ab
          suscipit dignissimos asperiores? <br />
          Exercitationem perferendis minima numquam necessitatibus cupiditate
          voluptates. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Blanditiis excepturi
          <br /> obcaecati nulla, eius veniam ex vel, nisi officiis accusamus
          incidunt fugiat placeat quaerat rerum quidem reprehenderit id, quasi
          dolorem temporibus.
          <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Quibusdam libero distinctio illo dicta amet doloribus dignissimos, ad
          molestiae eos corrupti quo
          <br /> beatae impedit a optio! Sapiente voluptas error corrupti
          molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Adipisci repellendus dicta <br />
          possimus inventore doloremque, itaque eos fugit deserunt, illo
          laudantium eum veniam mollitia asperiores, at quod neque voluptatem!
          Corporis, debitis.
        </p>
      </div>
      <Product type={[0, 2]} />
    </>
  );
}
export default Landing;
