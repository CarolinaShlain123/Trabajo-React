import "./contactForm.css";
import { useState } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { useCarritoContext } from "../../context/CarritoContext"

const ContactForm = () => {
  const [id, setId] = useState();
  const [form, setForm] = useState({
    name: "",
    email: "",
    telefono: "",
  });
  const { carrito, precioTotal, limpiarCarrito } = useCarritoContext();

  const venta = {
    form,
    productos: carrito.map((producto) => ({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      stock: producto.stock,
    })),
    total: precioTotal(),
  };
  
  const terminarCompra = (ev) => {
    ev.preventDefault();
      const db = getFirestore();
      const userCollection = collection(db, 'ventas');
      addDoc(userCollection, venta).then((res) => {
        setForm({
          name: "",
        email: "",
        telefono: "",})
        
        alert (`Su Compra ${res.id} se realizó Correctamente`);
        setId(res.id);
        limpiarCarrito();
      });
    
  };
  const changeHandler = (ev) => {
    const { value, name } = ev.target;
    setForm({ ...form, [name]: value });
  };
   return (
    <div className="mensajeExito">
      {typeof id !== "undefined" ? (
        <div className="titulo">
          <h1>Su compra ha sido exitosa!</h1>
          <h3 >Gracias por elegirnos!</h3>
        </div>
      ) : (
        // Envio los datos del formulario que ya estan en el estado.

        <form onSubmit={terminarCompra} className="formularioVenta">
          <div>
            <h2 className="titulo">Formulario de Compra</h2>
            <label htmlFor="name" className="form">
              Nombre:{" "}
            </label>
            <input
              name="name"
              id="name"
              value={form.name}
             onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="email" className="form">
              Email:{" "}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="telefono" className="form">
              Telefono:{" "}
            </label>
            <input
              name="telefono"
              id="telefono"
              value={form.telefono}
              onChange={changeHandler}
            />
          </div>
          <button className="boton">Enviar</button>
        </form>
      )}
    </div>
  );
}
  
export default ContactForm;
