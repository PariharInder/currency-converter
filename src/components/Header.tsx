import '../styles/main.css'

export const Header = () => {
    return (
        <div className="felx justify-center content-center text-center">
            <div className="text-center flex justify-center content-center">
                <img src="src\assets\logo.png" alt="currency-converter-logo" />
                <h1 className="text-3xl mt-3">Currency Converter</h1>
            </div>
            <p>Convert between all major global currency based on live market data.</p>
        </div>
    )
}