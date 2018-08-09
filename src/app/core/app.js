import React, { Component } from 'react';
import { observer } from 'mobx-react';


class App extends Component {
  onSubmit(invoice, e) {
    e.preventDefault();
    invoice.fetchData();
    invoice.items.add({
      name: this.nameInput.value,
      quantity: parseInt(this.quantityInput.value, 10),
      price: parseInt(this.priceInput.value, 10)
    });
    e.target.reset();
    this.nameInput.focus();
  }

  render() {
    const { invoice } = this.props;

    return (
      <div>
        <h1>Invoicer</h1>
        <p>{invoice.status()}</p>
        { !invoice.is_paid && <button onClick={invoice.markPaid}>Pay</button>}
        <form onSubmit={this.onSubmit.bind(this, invoice)}>
          <label htmlFor="name">
            Name:
            <input type="text" id="name" ref={input => { this.nameInput = input; }} />
          </label>
          <label htmlFor="quantity">
            Quantity:
            <input type="number" id="quantity" ref={input => { this.quantityInput = input; }} />
          </label>
          <label htmlFor="price">
            Price:
            <input type="number" id="price" ref={input => { this.priceInput = input; }} />
          </label>
          <button>Add</button>
        </form>
        <ul>
          {invoice.items.items.map(item => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default observer(App);
