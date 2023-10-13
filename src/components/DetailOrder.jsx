import { useNavigate } from "react-router-dom";

export const DetailOrder = ({ order }) => {
    const {products} = order
    let navigate = useNavigate();

    const handleNewQuery = () => {
        navigate("/");
    }

    return (
        <div className="mt-5 card">
            <div className="card-header">
                <h2>Detail</h2>
            </div>
            <div className="card-body">
                <div className="form-group my-3 d-flex gap-2">
                    <label htmlFor="orderCode" className="fw-bold">Código de Pedido:</label>
                    <p className="text-muted">{order.code}</p>
                </div>
                <div className="form-group my-3 d-flex gap-2">
                    <label htmlFor="orderCode" className="fw-bold">Cliente:</label>
                    <p className="text-muted">{order.user}</p>
                </div>
                <div className="form-group my-3 d-flex gap-2">
                    <label htmlFor="orderCode" className="fw-bold">Dirección de entrega:</label>
                    <p className="text-muted">{order.address}</p>
                </div>
                <div className="container">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Nombre Producto</th>
                                <th scope="col">Ref</th>
                                <th scope="col">Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => (
                                    <tr key={index}>
                                        <td>{product.name}</td>
                                        <td>{product.reference}</td>
                                        <td>{product.quantity}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="form-group my-3 d-flex gap-2">
                    <label htmlFor="orderCode" className="fw-bold">Estado del Pedido:</label>
                    <p className="text-muted">{order.status}</p>
                </div>
                <div className="form-group my-3 d-flex gap-2">
                    <label htmlFor="orderCode" className="fw-bold">Fecha estimada de entrega:</label>
                    <p className="text-muted">{order.deliverate_date}</p>
                </div>
            </div>

            <div className="card-footer d-flex align-items-center justify-content-center gap-2">
                <button className="btn btn-danger" onClick={handleNewQuery}>Cerrar</button>
                <button className="btn btn-primary" onClick={handleNewQuery}>Nueva Consulta</button>
            </div>
        </div>
    )
}