export const Home = ({ getOrders, IDRef, IDTypeRef, orderCodeRef, errorRef }) => {

    return (
        <>
            <div className="alert alert-danger d-none my-4" role="alert" ref={errorRef}>
            </div>
            <form className="mt-5 card" onSubmit={getOrders}>
                <div className="card-header">
                    <h2>Pedidos</h2>
                </div>
                <div className="card-body">
                    <div className="form-group my-3">
                        <label htmlFor="codigoPedido">Código de Pedido</label>
                        <input
                            type="text"
                            className="form-control"
                            id="codigoPedido"
                            ref={orderCodeRef}
                            required
                        />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="tipoDocumento">Tipo de Documento</label>
                        <select required name="tipoDocumento" className="form-control" ref={IDTypeRef}>
                            <option value="CC">CC</option>
                            <option value="CC Extranjera">CC Extranjera</option>
                            <option value="NIT">NIT</option>
                            <option value="CE">CE</option>
                        </select>
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="documento">Número de Documento</label>
                        <input
                            type="text"
                            className="form-control"
                            id="documento"
                            ref={IDRef}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Consultar</button>
                </div>
            </form>
        </>
    );
}