# Cómo crear y añadir un luchador

Para añadir un luchador, crea un archivo ``<your_fighter>.jsx``
en la estructura de carpetas dada dentro de la carpeta ``fighters``.

```text
data/
└─ fighter/
   ├─ fighters/
   │  └─ <your_fighter>.jsx
   └─ fighters.jsx
```

## Parámetros de un luchador

Ante la duda, se puede consultar la función ``constructor`` de la clase ``Fighter.jsx``.

Un luchador tiene los siguientes parámetros:

| Nombre         | Descripción                                                                                                                                                                     | Tipo                                       | Valor por defecto |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|-------------------|
| name           | Nombre del luchador                                                                                                                                                             | string                                     | no                |
| archetype      | Arquetipo del personaje.<br/>Consultar `Archetype.js` o [esta web](https://www.guiltygear.com/ggst/en/character/) en caso de duda.                                              | enum                                       | no                |
| description    | Descripción del personaje, si se le pasa el fighter puede usarlo para referenciar sus propios datos como su nombre.                                                             | string/Function/JSX.Element                | no                |
| easyToUse      | Facilidad de uso en estrellas de 0.5 a 5.                                                                                                                                       | number                                     | 2.5               |
| moveSet        | Lista de movimientos.                                                                                                                                                           | [Move]                                     | [ ]               |
| source         | Origen del personaje:<br/>- Juego Base<br/>- Season Pass ``<n>``.<br/>Para añadir un cierto Season Pass usar la función y pasar ``<n>``                                         | Source                                     | BASE_GAME         |
| icon           | Referencia del path del icono representativo del personaje en svg.                                                                                                              | string                                     | no                |
| fullArt        | Referencia del path del arte completo del personaje.                                                                                                                            | string                                     | no                |
| portraitConfig | Objeto con la posición ``x`` e ``y`` y la escala ``zoom``.<br/>Usa el arte completo y lo recorta según la configuración.<br/>Posicionar en la cara y aplicar el zoom necesario. | {<br/>number,<br/>number,<br/>number<br/>} | no                |

El luchador tiene un parámetro privado ``id``.
Se genera a partir del ``name`` y se usa para que la web
lo encuentre.

## Añadir el luchador
Para poder encontrar el luchador, añádelo a la lista ``fighters.jsx`` mostrada en la estrucuta de carpetas superior.