# Local Storage

1. ¿Por qué un desarrollador utilizaría el local storage para una aplicación web?

    Es importante para un desarrollador usar local storage ya que el http no mantiene el estado lo cual cuando cierras y abras una pagina se volvera al estado inicial por lo que un desarrollador necesita almacenar el estado de la interfaz en local storage.

2. ¿Qué información no se puede guardar en el local storage?

    Archivos: No se pueden almacenar archivos binarios como imágenes, audio, video, o cualquier tipo de archivo binario (por ejemplo, archivos PDF).

    Funciones: Las funciones de JavaScript no se pueden almacenar en localStorage porque no se pueden convertir en cadenas JSON de manera adecuada.

    Referencias Cíclicas: Los objetos que tienen referencias cíclicas no se pueden convertir a JSON directamente y, por lo tanto, no se pueden almacenar en localStorage.

    Nodos DOM: Los elementos del DOM no se pueden almacenar en localStorage ya que no pueden ser convertidos a JSON.

3. ¿Qué tipo de datos se pueden guardar en el local storage? ¿Cómo puedes convertirlo a ese tipo de archivo antes de guardarlo?

    localStorage solo puede almacenar cadenas de texto. Para almacenar objetos, debes convertirlos en JSON usando JSON.stringify(). Al recuperar estos objetos, debes volver a convertirlos en objetos JavaScript con JSON.parse(). Sin embargo, esto puede ser ineficiente y complejo para estructuras de datos muy anidadas o grandes.

## Cosas que quisiera saber más

Quisiera saber como manejar una base de datos ya adentrandonos a estos temas

## Fuentes

[Local Storage and How To Use It On Websites](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/)

*Marcadores/Lectura rápida*

[“The Past, Present, and Future of Local Storage for Web Applications”](http://diveinto.html5doctor.com/storage.html)
