import { useEffect, useState } from 'react'
import { GetAllCurrencies } from '../services/ConvertCurrencies'
import '../styles/main.css'

export const CurrencyOutput = () => {
    const [currencyCodes, setCurrencyCodes] = useState<Map<string, string>>(new Map())

    useEffect(() => {
        const fetchData = async () => {
          const result = await GetAllCurrencies()
          if (result !== undefined) {
            const currencyMap = new Map()
            result.forEach((currency: any) => currencyMap.set(currency.code, currency.name))
            setCurrencyCodes(currencyMap)
          }
        }
        fetchData()
      }, [])

    return (
        <div className="text-center">
            <div className="m-4">
            <label>Select the currency: </label>
            <select name="currency-2" id="">
                {[...currencyCodes.entries()].map(([code, name], index)=>(
                    <option key={code} value={code}>{name}</option>
                ))}
            </select>
            </div>
            <div>
                <p className="text-xl">Result</p>
            </div>
        </div>
    )
}