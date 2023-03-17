import "../styles/tailwind.css";
import "../styles/burger.css";
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-blue-200">
      <Component {...pageProps} />
      <Analytics/>
    </div>
  );
}

export default MyApp;
