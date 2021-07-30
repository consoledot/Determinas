import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";
import image from "../public/images/404.png";

export default function Error() {
  return (
    <div>
      <Head>
        <title>PAGE NOT FOUND</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <section className="error">
        <div className="text">
          <h1>Error 404 - We Are Sorry For The Inconvenience.</h1>
          <p>
            The page you are looking for cannot be found at this time, Please
            feel free to browse other sections of our site by using the
            navigation bar. You can however go back home by selecting the button
            below or report this issue. We appreciate your patience.
          </p>
          <div className="buttons">
            <button>GO BACK HOME</button>
            <button>REPORT ERROR</button>
          </div>
        </div>
        <Image src={image} alt="" />
      </section>
    </div>
  );
}