# Harry's Book

## Proyecto: 
Página web de venta de libros de Harry Potter


🛠️ Realizado con:

![image](https://user-images.githubusercontent.com/105647455/204136896-89305a7e-def0-4fff-83b9-0cf10a8fc336.png)


 📋 Resumen:

La propuesta trata sobre e-commerce de venta de libros de Harry Potter. En dicho sitio web, el usuario podrá navegar y ver los distintos libros que están a la venta y aprovechar descuentos increíbles. El usuario podrá buscar por categoría y comprar de una forma sencilla utilizando un carro de compras.

✅ Secciones 

La página web contiene las siguientes secciones:

1. HOME 
2. PRODUCTOS
3. DETALLE
4. CATEGORIAS
5. CARRITO
6. FORMULARIO DE VENTA
...

1️⃣ HOME

Esta es la página principal que el usuario verá al ingresar. Tanto cuando busque la página en la web en un buscador o ingresando la URL . La misma muestra el título de la página y podrá observar algunas imágenes de los libros que hay para comprar.


2️⃣ PRODUCTOS

Se muestra una lista de todos los productos que puede seleccionar. Cada uno tiene su precio y tiene la opción de ver el detalle.

3️⃣ DETALLE

En esta sección el usuario podrá observar con mas detalle el producto que seleccionó, estará el nombre del libro, la imagen, el precio y también vera la opción de agregar dicho producto al carrito y, si es así, la cantidad de libros que va a querer.

4️⃣ CATEGORIAS
 
En el NavBar el usuario puede observar que hay distintas categorías para seleccionar, si el usuario accede a una de esas categorías podrá observar los libros de dicha categoría y seleccionar el producto que desee.

5️⃣ CARRITO

Aquí el usuario podrá acceder a su carrito que estuvo llenando a lo largo de su navegación por el sitio. En el verá la opción de eliminar la cantidad de alguno de sus productos, eliminar un producto, vaciar el carrito, lo cual dejará el carro vacío, el precio total de todos los productos que selecciono y la opción de terminar compra.

6️⃣ FORMULARIO DE VENTA
 
 Cuando el usuario selecciona la opción de terminar compra, el sitio web lo dirige a un formulario de venta, donde deberá completar su nombre, su mail y su número de teléfono, una vez que el usuario complete los campos vera que aparece una alerta que la compra se realizó exitosamente y lo llevara a otra página que podrá observar un mensaje que dice gracias por elegirnos.

 ## Documentación  

## Librerías en el proyecto: 

 * React-router-dom (Navegación de la web)
 * React-hot-toast (Alertas en interacciones)


 ## Almacenamiento: 
 _LocalStorage_


## Base de datos NoSQL

* Firebase (Implementación de FireStore para la base de datos, y Storage para las imágenes. ).

 ## Organización de componentes:

 En el archivo Index.js implementamos Firebase por importación, llamando a un archivo config.js dentro de la carpeta firebase, que en dicho archivo posee la información de nuestro proyecto.

Luego en App.js implementamos por _import_ las librerías anteriormente mencionadas. A su vez, la estructura de la navegación proporcionada por react-router-dom , nos permite navegar a los siguientes componentes : 
 Home (página principal), ItemListContainer (Productos),
Categorías (que se encuentra dentro del componente ItemListContainer, que nos permite filtrar por las distintas categorías que hay.), ItemDetailContainer (que nos permite ver el detalle del producto.), Carrito (carrito de compras) y ContactForm (formulario de compra.)

**Es una App sencilla pero funcional, Agradecimiento al profesor [Felix Blanco](https://www.linkedin.com/in/felixblancos/)** por las clases fueron excelentes y súper claras.  

# Creador del sitio web: 
[Carolina Shlain](https://github.com/CarolinaShlain123/Trabajo-React.git).

