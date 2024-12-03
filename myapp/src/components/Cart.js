export default function Cart({ cart }) {
    const grandTotal = cart.reduce((total, item) => total + item.qty * item.price, 0);

    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>QTY</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td>${item.qty * item.price}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Grand Total:</td>
                        <td colSpan="2">${grandTotal}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
