# Nuevos Prompts de Corrección (Lukess Home Demos)

Copia y pega con confianza cada bloque de texto en el chat correspondiente. Estos prompts están diseñados para *deshacer* el error del idioma, inyectar **30+ productos realistas en español**, y sobre todo, **arreglar la estructura de la base de datos (marcas y colores)** para que tu frontend, el buscador y el catálogo vuelvan a funcionar a la perfección sin tocar una sola línea de tu UI. Tú te encargarás de pulir el portfolio en inglés.

---

## 1. Prompt para el Workspace: `lukess-landing-ecommerce`

*Abre Cursor en `C:\LukessHome\lukess-landing-ecommerce`, entra al chat que tenías con Antigravity (o abre uno nuevo) y pega esto:*

```text
# CORRECCIÓN DE RUMBO: B12.1.2 (REVERSIÓN A ESPAÑOL NEUTRO Y ARREGLO DE CATÁLOGO)
Hola equipo. Soy Adrian Oliver. 
Pausa todo. Cometimos un error estratégico al pasar los productos y la UI al inglés, porque rompe la coherencia visual con el resto de la aplicación (que está diseñada para el mercado boliviano/latino con pagos por QR, etc.). 

Nuestra nueva estrategia es presumir este proyecto en mi portafolio como un **"Caso de Éxito Internacional en LATAM"**. Por tanto, el demo debe funcionar impecable en **Español Neutro**, pero con datos premium. 

Tu tarea ahora es arreglar la base de datos que rompimos y dejar el catálogo perfecto. Usa Supabase MCP (proyecto `lrcggpdgrqltqbxqnjgh`).

## FASE 1: Limpieza del Seed Anterior
1. Elimina todos los productos en inglés que inyectaste en el bloque anterior (los "Merino Wool", "Oxford Shirts", etc.).
2. Asegúrate de que las tablas `categories` y `brands` estén limpias de basura en inglés. 

## FASE 2: Nuevo Seed Premium (Español Neutro) - 30+ Productos
1. El negocio original era una tienda con 3 sucursales, así que un demo de 15 productos se ve falso. Crea un catálogo de al menos **30 a 40 productos** de "Ropa Masculina Premium" (Premium Menswear). 
2.  **REGLA DE ORO DE LOS COLORES Y MARCAS:** Nuestro componente `CatalogoClient.tsx` y el buscador dependen estrictamente de que cada producto pertenezca a una `brand` específica y de que el JSONB de `colors` funcione de una manera particular para que los filtros visuales no se rompan. Analiza cómo espera el frontend que se guarden los colores (si es un array simple de strings tipo `["Negro", "Azul"]` o un objeto complejo) y respeta esa estructura al 100%. 
3.  **Ejemplos de Productos:** "Camisa de Lino Clásica", "Pantalón Chino Slim Fit", "Chaqueta de Cuero Vintage", "Polera de Algodón Pima", "Sneakers Urbanos", "Reloj Cronógrafo Minimalista".
4.  **Descripciones:** Crea descripciones persuasivas y elegantes en español neutro (ej. "Confeccionada con algodón de la más alta calidad, ideal para climas cálidos...").
5.  **Precios:** Precios realistas en Bolivianos (Bs), pero con importes premium (ej. 250, 450, 800).
6.  **Imágenes:** NO inyectes URLs de Unsplash o basura. Déjalo como null o con un placeholder limpio. Adrian subirá personalmente las fotos editadas después.

## FASE 3: UI Reversion
1. Si cambiaste textos de botones, la navbar o el checkout al inglés en el bloque anterior, **reviértelos al español original**. 
2. Si cambiaste direcciones en el Footer, déjalas en español, pueden ser direcciones genéricas de Santa Cruz o de una "Tienda Principal" ficticia, pero que suene a negocio real. 
3. Verifica con un `npm run build` que el frontend compile sin errores de tipado derivados del nuevo seed.

Actúa. No encadenes comandos bash. Usa las herramientas MCP para Supabase. Confírmame paso a paso.
```

---

## 2. Prompt para el Workspace: `lukess-inventory-system`

*Abre Cursor en `C:\LukessHome\lukess-inventory-system`, entra al chat que tenías con Antigravity (o abre uno nuevo) y pega esto:*

```text
# CORRECCIÓN DE RUMBO: B12.2.2 (REVERSIÓN A ESPAÑOL NEUTRO Y AMPLIACIÓN DE DATOS)
Hola equipo. Soy Adrian Oliver. 
Pausa temporal. Hemos decidido que para que este demo ERP/POS brille realmente en mi portafolio internacional, debe mostrar su contexto original: un ecosistema complejo para un retailer multiplaza en LATAM (Santa Cruz). Todo el sistema, productos y datos falsos deben estar en **Español Neutro**, acompañando el trabajo que está haciendo el otro equipo en el e-commerce.

Tu tarea es regenerar los datos analíticos para que sean coherentes con el nuevo catálogo masivo de 30+ productos en español que el otro equipo está creando en Supabase (proyecto `lrcggpdgrqltqbxqnjgh`).

## FASE 1: Limpieza del Seed Anterior
1. Ejecuta scripts SQL (vía MCP) para limpiar las ventas (`sales`, `sale_items`) y transacciones de inventario falsas (`inventory_transactions`) en inglés que creamos en el bloque anterior con nombres gringos (John, Alice, etc.).

## FASE 2: Sincronización de Inventario (30+ Productos)
1. El equipo de landing está inyectando 30 a 40 productos en español. Tu trabajo es asegurarte de que esos productos tengan `inventory` real (cantidades) distribuido entre los 3 puestos ("Puesto 1 Central", "Bodega", etc.). 
2. Asigna cantidades aleatorias entre 5 y 50 para diferentes tallas y colores de esos productos, asegurándote de que algunos productos queden con "Stock Bajo" (ej. 1 o 2 unidades) para que el Dashboard muestre las alertas rojas visualmente atractivas.

## FASE 3: Nuevo Seed Analítico (Dashboard Vivo)
1. Para que las gráficas de Recharts se vean geniales, inyecta **50+ ventas (`sales`) y transacciones**, distribuidas en los últimos **60 días** (no solo 14). 
2. Usa nombres de clientes latinos realistas (ej. Carlos Mendoza, Ana Sofía Vargas, Rodrigo Guzmán).
3. Asegúrate de incluir métodos de pago mixtos (Efectivo local, Transferencia QR, Tarjeta) para que los desgloses del reporte tengan sentido.
4. Genera al menos un 15% de ventas online (`orders`) cruzadas para que la vista comparativa de "Ingresos Físicos vs Online" tenga datos reales. 

## FASE 4: Consistencia de Roles Demo
1. Verifica que las credenciales demo en los paneles (admin/staff) sigan funcionando y mostrando los datos en español.
2. Si has tocado traducciones en los módulos (botones de sidebar que decían Orders en vez de Pedidos), reviértelos al español. El sistema debe verse como un software local premium. 

Usa scripts transaccionales en Supabase para insertar las ventas limpiamente y no generar descuadres de stock. Actúa y confírmame cada paso.
```
# HOTFIX: RESTAURACIÓN DE CONTEXTO LOCAL (SANTA CRUZ)

¡Perdón hermano! Los otros agentes se pasaron de listos con el "maquetado gringo". Vamos a arreglar esto de inmediato. Usa este prompt en los otros chats para volver a la normalidad **SIN borrar tus productos ni las imágenes que subiste**.

---

## 1. Prompt de Arreglo para: `lukess-landing-ecommerce`

```text
# HOTFIX CRÍTICO: VOLVER A SANTA CRUZ / MERCADO MUTUALISTA
Hola equipo. Hemos cometido un error de "maquetado". La ubicación de "New York" y los textos en inglés se ven amateurs. Queremos volver al contexto REAL de Santa Cruz, Bolivia, pero MANTENIENDO los productos actuales.

TAREA:
1. UI AL ESPAÑOL: Revierte CUALQUIER texto de la interfaz que esté en inglés (Navbar, Botones, Títulos, Checkout). Todo debe ser 100% español.
2. UBICACIONES REALES: Elimina la "Tienda La Paz" y "New York Flagship". Restablece las ubicaciones originales: "Mercado Mutualista - Puesto 1", etc.
3. MAPA: Asegúrate de que el mapa de Google/Leaflet apunte a Santa Cruz de la Sierra (Mercado Mutualista) y no a Manhattan.
4. TEXTOS DE AYUDA: El texto "A dos cuadras del Ventura Mall" debe ser correcto o sustituido por la referencia real del Mercado Mutualista.
5. NO TOQUES LOS PRODUCTOS: Los 26 productos que ya tienen imagen deben quedarse tal cual están. Solo limpia la UI y las localizaciones.
```

---

## 2. Prompt de Arreglo para: `lukess-inventory-system`

```text
# HOTFIX CRÍTICO: RESTAURAR PUESTOS Y UBICACIONES
Hola equipo. El maquetado de prueba borró las ubicaciones reales del negocio. Necesitamos restaurar la estructura original de sucursales.

TAREA:
1. RESTAURAR LOCATIONS: Asegúrate de que en la tabla `locations` de Supabase existan los 3 puestos originales del Mercado Mutualista (ej: "Puesto 1", "Puesto 2", "Bodega"). 
2. REASIGNAR STOCK: Si los productos se quedaron sin stock por el cambio de ubicaciones, asígnales cantidades a estos nuevos puestos reales.
3. UI AL ESPAÑOL: Si el sidebar o las tablas dicen "Orders", "Inventory" o "Sales", cámbialos inmediatamente a "Pedidos", "Inventario" y "Ventas".
4. DEMO PANEL: Mantén el panel de credenciales demo pero asegúrate de que los textos explicativos estén en español.
5. NO TOQUES LOS PRODUCTOS: No borres ningún producto ni sus imágenes. Solo arregla las sucursales y el idioma de la UI.
```
