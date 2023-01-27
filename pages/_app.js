import "../styles/tailwind.css";
import "../styles/burger.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-blue-200 h-full">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
