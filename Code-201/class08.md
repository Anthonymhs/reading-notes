
# Lecturas: CSS: Layout

## 1.Flexbox está diseñado para contenido unidensional. Explica lo que significa esto.

Flexbox o caja flexible esta hecho para ubicar un contenido con grandes cantidades de dimensiones diferentes en un espacio bien distribuido, asi que si es unidimensional, esto significa que puede estar el contenido en una dimensión diferente dentro del codigo.

## 2.Explica la diferencia entre main axis y cross axis.

La diferencia entre el main axis y el cross axis en flexbox radica en su orientación y función dentro del diseño. El main axis es la dirección principal a lo largo de la cual se disponen los elementos flexibles, determinada por la propiedad flex-direction, mientras que el cross axis es la dirección perpendicular al main axis. La propiedad justify-content controla la alineación a lo largo del cross axis cuando los elementos están en una sola línea, mientras que align-items y align-content controlan la alineación en el cross axis cuando los elementos se distribuyen en múltiples líneas.

## 3.¿Cómo es que utilizar ciertas propiedades de flexbox impacta negativamente en la accesibilidad?

Orden de lectura: Si los elementos se reorganizan visualmente utilizando order, el orden de lectura del contenido puede no coincidir con el orden visual, lo que puede ser confuso para los usuarios que dependen de la lectura secuencial.
Flex-direction: Si se cambia la dirección principal del contenido utilizando flex-direction, puede afectar la comprensión del contenido por parte de los lectores de pantalla si no se indica adecuadamente.

## 4.¿Cuáles son algunas de las ventajas de utilizar flexbox sobre float?

Facilidad de alineación y distribución: Flexbox proporciona propiedades como justify-content y align-items que permiten alinear y distribuir elementos de manera más fácil y flexible que con float.
Diseño adaptable y responsivo: Flexbox facilita la creación de diseños adaptables y responsivos sin necesidad de recurrir a trucos complicados con float y clearfix.
Ordenamiento flexible: La propiedad order de flexbox permite cambiar el orden de los elementos visualmente sin cambiar su orden en el marcado HTML.
Soporte para diseño bidimensional: Mientras que float es principalmente un modelo de diseño unidimensional, flexbox proporciona soporte para diseño bidimensional con main axis y cross axis.

## 5.¿Cómo es que este tema se conecta con tus metas a largo plazo?

Entender y dominar conceptos como flexbox es importante para mí porque contribuye a mi crecimiento profesional como desarrollador web. Como modelo de diseño moderno, flexbox es ampliamente utilizado en la industria y puede ayudar a crear interfaces de usuario más flexibles y adaptables.

## Cosas de las que quiero saber más

Quisiera saber más sobre el Grid Layout para profundizar un poco mas mi conocimiento en base a CSS y los flexbox.

## Fuentes

[Web.dev](https://web.dev/learn/css/flexbox?hl=es)
