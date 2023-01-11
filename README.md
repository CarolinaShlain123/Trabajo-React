# Harry's Book

Proyecto: Página web de venta de libros de Harry Potter


🛠️ Realizado con :

![image](https://user-images.githubusercontent.com/105647455/204136896-89305a7e-def0-4fff-83b9-0cf10a8fc336.png)


 📋 Resumen :

La propuesta trata sobre un sitio web de venta de libros de Harry Potter. En dicho sitio web, el usuario podrá navegar y ver los distintos libros que estan a la venta y aprovechar descuentos increibles. En la pagina el usuario podra elegir que categoria seleccionar y cuantos libros va a querer sumarle al carrito para luego poder comprarlos.


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

Esta es la página principal que el usuario verá cuando busque la página en la web o se dirija directamente al Home. La misma muestra el titulo de la pagina y podra observar algunas imagenes de los libros que hay para comprar .


2️⃣ PRODUCTOS

Se muestra una lista de todos los productos que puede seleccionar. Cada uno tiene su precio y tiene la opcion de ver el detalle .

3️⃣ DETALLE

En esta sección el usuario podrá observar mejor el producto que selecciono, estara el nombre del libro, la imagen, el precio y tambien vera la opcion de agregar dicho producto al carrito y, si es asi,  la cantidad de libros que va a querer .

4️⃣ CATEGORIAS
 
En el NavBar el ususario puede observar que hay distintas categorias para seleccionar, si el ususario accede a una de esas categorias podra observar los libros de dicha categoria y seleccionar el producto que desee .

5️⃣ CARRITO

Aquí el usuario podrá acceder a su carrito que estuvo llenando a lo largo de su navegacion por el sitio. En el vera la opcion de eliminar la cantidad de alguno de sus productos, eliminar un producto, vaciar el carrito, lo cual dejara el carro vacio, el precio total de todos los productos que selecciono y la opcion de terminar compra .

6️⃣ FORMULARIO DE VENTA
 
 Cuando el usuario selecciona la opcion de terminar compra, el sitio web lo dirige a un formulario de venta, donde debera completar su nombre, su mail y su numero de telefono, una vez que el usuario complete los campos vera que aparece una alerta que la compra se realizo exitosamente y lo llevara a otra pagina que podra observar un mensaje que dice gracias por elegirnos .

 # Documentación  

## Librerias en el proyecto : 

 * React-router-dom (Navegación de la web)
 * React-hot-toast (Alertas en interacciones)


 ## Almacenamiento : 
 _LocalStorage_


## Base de datos NoSQL

* Firebase (Implementación de FireStore para la base de datos, y Storage para las imagenes. ).

 ## Organización  de componentes :

 En el archivo Index.js implementamos Firebase por importación , llamando a un archivo config.js dentro de la carpeta firebase, que en dicho archivo posee la informacion de nuestro proyecto.

Luego en App.js implementamos por _import_ las librerias anteriormente mencionadas. A su vez, la estructura de la navegación proporcionada por react-router-dom , nos permite navegar a los siguientes componentes : 
 Home (pagina principal), ItemListContainer (Productos),
Categorias (que se encuentra dentro del componente ItemListContainer, que nos permite filtrar por las distintas categorias que hay.), ItemDetailContainer (que nos permite ver el detalle del producto.), Carrito (carrito de compras) y ContactForm (formulario de compra.)

**Es una App sencilla pero funcional, Agradecimiento al profesor [Felix Blanco](https://www.linkedin.com/in/felixblancos/)** por las clases fueron exelentes y super claras.  

** Creador del sitio web: **
[Carolina Shlain](https://github.com/CarolinaShlain123/Trabajo-React.git). 
