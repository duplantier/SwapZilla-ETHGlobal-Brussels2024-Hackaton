import "./App.css";
import FAQ from "./components/Faq";
import SwapForm from "./components/SwapForm";

function App() {
  return (
    <section className="max-w-screen-lg mx-auto mt-4 rounded-lg px-4 mb-12 flex justify-between items-center ">
      <SwapForm />
      <FAQ />
    </section>
  );
}

export default App;
