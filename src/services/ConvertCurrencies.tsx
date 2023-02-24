import axios from "axios"

const APP_ID = '51afea30f6334ddea436cbf6b5ed95f9'
const API_URL = `https://openexchangerates.org/api/latest.json?app_id=${APP_ID}`

export const ConvertCurrencies = () => {

}

export const GetAllCurrencies = () => {
return axios.get(API_URL)
  .then(response => {
    const rates = response.data.rates
    const currencies = Object.keys(rates)
    return currencies
  })
  .catch(error => {
    console.error(error)
  })
}