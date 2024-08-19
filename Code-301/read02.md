# State y Props

![foto state y props](https://tipscode.com.br/thumbnail-article/state-props.png)

## React lifecycle

### 1. Según el diagrama, ¿qué sucede primero, el ‘render’ o el ‘componentDidMount’?

 Primero ocurre el render, y luego componentDidMount. El método render es llamado cuando el componente se está montando en el DOM. Después de que el componente ha sido montado, React invoca componentDidMount.

### 2. ¿Qué es lo primero que sucede en el ciclo de vida de React?

 Lo primero que sucede en el ciclo de vida de React es la llamada al constructor() si estás utilizando una clase. Esto inicializa el estado y enlaza los manejadores de eventos.

### 3. Orden de los métodos en el ciclo de vida de React

constructor: Se llama al crear una instancia del componente.
render: Se llama para renderizar el componente en el DOM.
componentDidMount: Se llama después de que el componente ha sido montado en el DOM.
React Updates: Incluye cualquier actualización del componente debido a cambios en el estado o props.
componentWillUnmount: Se llama justo antes de que el componente sea eliminado del DOM.

### 4. ¿Qué hace el componentDidMount?

 componentDidMount es un método que se invoca inmediatamente después de que un componente ha sido montado en el DOM. Es un lugar ideal para realizar operaciones que necesitan acceso al DOM, como realizar solicitudes de red, inicializar bibliotecas de terceros, o establecer suscripciones. Es importante recordar limpiar estas suscripciones en componentWillUnmount para evitar pérdidas de memoria. También es posible llamar a setState() en este método, pero debe hacerse con precaución para evitar re-renderizados innecesarios que podrían afectar el rendimiento.

## React State Vs Props

### 1. ¿Qué tipo de cosas puedes enviar mediante props?

Puedes enviar cualquier dato: números, cadenas, booleanos, objetos, arreglos, funciones, componentes React y elementos JSX.

### 2. ¿Cuál es la mayor diferencia entre props y state?

Props: Son datos inmutables pasados de un componente padre a un hijo.
State: Es mutable y pertenece al componente. Al cambiar, provoca un re-renderizado.

### 3. ¿Cuándo volvemos a renderizar nuestra aplicación?

La aplicación se re-renderiza cuando cambia el state o las props de un componente.

### 4. ¿Qué podemos almacenar en el state?

* Datos del usuario
* Valores de formularios
* Estado de la interfaz (como modales)
* Contadores
* Respuestas de API
* Estado de filtros y búsquedas

## Cosas de las que quiero saber más

Quisiera saber una explicación más clara del 'componentWillUnmount'

## Fuentes

[React lifecycle](https://medium.com/@joshuablankenshipnola/react-component-lifecycle-events-cb77e670a093)
[React State Vs Props](https://www.youtube.com/watch?v=IYvD9oBCuJI)