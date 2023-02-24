import { useEffect, useState } from 'react'
import { GetAllCurrencies } from '../services/ConvertCurrencies'
import '../styles/main.css'

export const CurrencyInput = () => {

    const [rates, setRates] = useState<string[]>([])

    useEffect(()=>{
        const fetchData = async () => {
            const result = await GetAllCurrencies()
            if(result!=undefined) setRates(result)
        }
        fetchData()
    }, )

    return (
        <div className="text-center">
            <div className="m-4">
            <label>Select the currency: </label>
            <select name="currency-1" id="">
                {rates!= undefined && rates?.map((rate, index) => (
                    <option value={rate}>{rate}</option>
                ))}
            </select>
            </div>
            <div>
            <input type="number" placeholder="Enter the amount"/>
            </div>
        </div>
    )
}