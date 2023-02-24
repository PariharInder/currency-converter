import { CurrencyInput } from "./components/CurrencyInput"
import { Header } from "./components/Header"

export const App = () => {
  return (
    <div className="p-10">
      <Header />
      <CurrencyInput />
    </div>
  )
}