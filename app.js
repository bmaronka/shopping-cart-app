class App extends React.Component {
    state = {
        availableProducts: 7,
        shoppingCart: 0,
    }

    handleRemoveFromCart = () => {
        this.handleChange(-1)
    }

    handleAddToCart = () => {
        this.handleChange(+1)
    }

    handleChange = (value) => {
        this.setState({
            shoppingCart: this.state.shoppingCart + value,
        })
    }

    handleBuy = () => {
        this.setState({
            shoppingCart: 0,
            availableProducts: this.state.availableProducts - this.state.shoppingCart,

        })
    }


    render() {
        const style = this.state.shoppingCart === 0 ? { opacity: 0.3, } : {};
        const { shoppingCart, availableProducts } = this.state;

        return (
            <>
                <button disabled={shoppingCart ? false : true} onClick={this.handleRemoveFromCart}>-</button>
                <span style={style}> {shoppingCart} </span>
                <button disabled={shoppingCart === availableProducts ? true : false} onClick={this.handleAddToCart}>+</button>
                {shoppingCart > 0 && <button onClick={this.handleBuy}>Buy</button>}
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));