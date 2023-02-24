import { CurrentRate } from "./components/CurrenctRate"
import { CurrencyInput } from "./components/CurrencyInput"
import { CurrencyOutput } from "./components/CurrencyOutput"
import { Header } from "./components/Header"

export const App = () => {
  return (
    <div className="p-8 flex h-screen justify-center items-center">
      <div>
      <Header />
      <CurrencyInput />
      <CurrencyOutput />
      <CurrentRate />
      </div>
    </div>
  )
}