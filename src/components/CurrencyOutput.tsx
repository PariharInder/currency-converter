import '../styles/main.css'

export const CurrencyOutput = () => {
    return (
        <div className="text-center">
            <div className="m-4">
            <label>Select the currency: </label>
            <select name="currency-1" id="">
                <option value="USD">USD</option>
            </select>
            </div>
            <div>
                <p className="text-xl">Result</p>
            </div>
        </div>
    )
}