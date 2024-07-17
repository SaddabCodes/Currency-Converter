import CurrencyConverter from "./components/CurrencyConverter";
import "./index.css";
export default function App() {
  return (
    <div className="min-h-screen bg-indigo-700 flex flex-col items-center justify-center">
      <div className="container">
        <CurrencyConverter />
      </div>
    </div>
  );
}
