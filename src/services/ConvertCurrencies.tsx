import axios from "axios"

const APP_ID = '51afea30f6334ddea436cbf6b5ed95f9'
const CURRENCYLIST_API_URL = `https://openexchangerates.org/api/currencies.json`

export const ConvertCurrencies = () => {

}

export const GetAllCurrencies = async () => {
  try {
    const response = await axios.get(CURRENCYLIST_API_URL)
    const currencyMap = response.data
    const currencyArray = Object.entries(currencyMap).map(([code, name]) => ({ code, name }))
    return currencyArray
  } catch (error) {
    console.error(error)
  }
}