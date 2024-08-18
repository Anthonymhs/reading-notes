# Editor de texto

1. ¿Cuáles son las cuatro características importantes que se deben buscar en un editor de texto?
   Las carecteristicas son: Resaltado de sintaxis: Esta función resalta diferentes elementos del código fuente según su función (palabras clave, variables, cadenas, comentarios, etc.), lo que facilita la lectura y comprensión del código.
   
2. ¿Qué hacen los siguientes comandos?
   
    **pwd**: Significa "print working directory" (imprimir directorio de trabajo). Este comando muestra la ruta completa del directorio en el que te encuentras actualmente.

    **ls**: Abreviatura de "list". Este comando muestra el contenido del directorio actual, es decir, lista los archivos y subdirectorios en ese directorio.

    **cd**:  Significa "change directory" (cambiar directorio). Este comando se utiliza para cambiar el directorio actual. Puedes especificar la ruta del directorio al que deseas cambiar.

    **mkdir**: Abreviatura de "make directory" (crear directorio). Este comando se utiliza para crear un nuevo directorio. Por ejemplo, si escribes mkdir NuevoDirectorio, se creará un nuevo directorio llamado "NuevoDirectorio" en el directorio actual.

    **touch**:  Este comando se utiliza para crear un nuevo archivo vacío. Si escribes touch archivo.txt, se creará un archivo vacío llamado "archivo.txt" en el directorio actual. Si el archivo ya existe, se actualizará la fecha y hora de modificación del archivo.

3. *¿Puedes explicar qué sucede en el siguiente escenario si ingresas estos comandos y argumentos en la línea de comandos? (Los argumentos son instrucciones adicionales dadas a un comando).*
 
    **cd projects**: Este comando cambia el directorio actual al subdirectorio "projects". Si el directorio "projects" existe en el directorio actual, te moverás a ese director

    **mkdir new-project**: Después de haber cambiado al directorio "projects", este comando crea un nuevo directorio llamado "new-project" dentro del directorio "projects".

    **touch new-project/newfile.md**: Luego de haber creado el directorio "new-project", este comando crea un nuevo archivo vacío llamado "newfile.md" dentro del directorio "new-project". El archivo tendrá la extensión ".md", que es comúnmente utilizada para archivos Markdown.

    **cd ..**: Después de ejecutar el comando "cd ..", te mueves al directorio padre del directorio actual. Esto significa que retrocedes al directorio inmediatamente anterior al que estabas antes de entrar al directorio "projects".

Luego, al ejecutar el comando "ls projects/new-project", estás listando el contenido del directorio "new-project" que está ubicado dentro del directorio "projects". Dado que has retrocedido al directorio "projects", este comando mostrará el contenido específicamente del directorio "new-project" dentro de él. Dependiendo de lo que hayas creado o guardado allí, verás una lista de archivos y subdirectorios existentes dentro de "projects/new-project".
