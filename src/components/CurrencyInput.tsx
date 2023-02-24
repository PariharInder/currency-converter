import '../styles/main.css'

export const CurrencyInput = () => {
    return (
        <div className="text-center">
            <div className="m-4">
            <label>Select the currency: </label>
            <select name="currency-1" id="">
                <option value="USD">USD</option>
            </select>
            </div>
            <div>
            <input type="number" placeholder="Enter the amount"/>
            </div>
        </div>
    )
}