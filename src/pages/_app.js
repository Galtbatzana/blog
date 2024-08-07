import { Footer } from "@/components/footer";
import { Tolgoi } from "@/components/Tolgoi";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
  <div className=""> 
    <Tolgoi/>
    <Component {...pageProps} />
    <Footer/>
  </div>
  );
}
