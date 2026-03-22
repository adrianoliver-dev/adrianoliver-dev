# 🚀 AUDITORÍA TOTAL Y ESTADO ABSOLUTO: adrianoliver.dev (PORTAFOLIO 2026)

> **Fecha de Auditoría:** 2026-03-18
> **Repositorio:** `adrianoliver-dev/adrianoliver-dev`
> **Deploy Activo:** https://adrianoliver.dev (Vercel Edge Network)
> **Auditor:** Antigravity Agent (Análisis directo del código fuente + auditorías de Lukess)
> **Estado del Proyecto:** B16 completado. B17 (Outreach) IN_PROGRESS.
> **Objetivo de Negocio:** Generar +$500/mes en freelance remoto internacional para agosto 2026.

---

## TABLA DE CONTENIDOS

1. [Visión General y Propósito del Portafolio](#1-visión-general)
2. [Stack Tecnológico Completo](#2-stack-tecnológico)
3. [Sistema de Diseño UI/UX — Dark Organic Luxury](#3-sistema-de-diseño)
4. [Animaciones y Capa Micro-Interactiva Detallada](#4-animaciones)
5. [Arquitectura y Estructura de Carpetas](#5-arquitectura)
6. [Homepage — Las 7 Secciones que Componen la Página Principal](#6-homepage)
7. [Caso de Estudio 1: Lukess Home (E-commerce Omnicanal)](#7-lukess-home)
8. [Caso de Estudio 2: Lukess Inventory System (ERP/POS Empresarial)](#8-lukess-inventory)
9. [Caso de Estudio 3: Solnr Studio (Catálogo de Moda)](#9-solnr-studio)
10. [Infraestructura SEO y Analytics de Nivel Agencia](#10-seo-analytics)
11. [Blog Técnico MDX](#11-blog-mdx)
12. [Componentes Reutilizables del Portafolio (Rich Media)](#12-componentes-rich)
13. [Capturas de Pantalla — Inventario Actual y Brechas](#13-capturas)
14. [Open Issues y Deuda Técnica del Portafolio](#14-open-issues)
15. [Open Issues de los Proyectos Lukess (Trasladables al Portafolio)](#15-lukess-issues)
16. [Mega-Prompt para la IA Investigadora](#16-mega-prompt)

---

## 1. VISIÓN GENERAL Y PROPÓSITO

**adrianoliver.dev** es un portafolio personal de desarrollo full-stack orientado a vender servicios de "30-day builds" de alto rendimiento a clientes internacionales. El sitio fue construido integralmente por Adrian Oliver usando la misma arquitectura exacta que los proyectos que ofrece: Next.js, TypeScript estricto, Tailwind CSS v4, y Supabase.

**Propuesta de Valor Actual (Copy del Hero):**
> "I build e-commerce and inventory systems for apparel and retail brands — fast, clean, production-ready."

**Datos del Developer:**
- **Nombre:** Adrian Oliver
- **Ubicación:** Santa Cruz de la Sierra, Bolivia (GMT-4)
- **Modalidad:** Remoto, async-first
- **Stack declarado:** Next.js · TypeScript · Supabase · Tailwind v4
- **Verticales de servicio:** E-Commerce Architecture + Business Web Applications + Technical Consulting
- **SLA publicado en el sitio:**
  - `< 4h` Response time (durante proyectos activos)
  - `Weekly` Milestone updates (Loom + written summary)
  - `60 days` Post-launch support incluido

**Posicionamiento actual:** El portafolio intenta posicionar al desarrollador como un "solo architect" que reemplaza a agencias completas en velocidad y calidad. Las palabras PROHIBIDAS en todo el copy son: "cheap", "affordable", "offshore", "budget", "junior". Las palabras PREFERIDAS son: "scalable", "high-performance", "async", "architecture", "measurable results", "delivery in weeks, not months".

---

## 2. STACK TECNOLÓGICO COMPLETO

### 2.1 Core Framework y Lenguaje

| Tecnología | Versión | Uso específico |
|---|---|---|
| Next.js | 16.1.6 | Framework React fullstack. App Router. Server Components por defecto |
| React | 19.2.3 | UI Library con Concurrent Features |
| TypeScript | 5.x (strict) | Lenguaje base. `noImplicitAny`, cero uso de `any` |
| Tailwind CSS | v4 | Estilos. Configurado con `@theme` en CSS puro, **sin** `tailwind.config.js` |

### 2.2 Motion, Animación y UX

| Librería | Versión | Uso |
|---|---|---|
| `framer-motion` | 12.35.2 | Animaciones complejas. Solo via `LazyMotion` + `domAnimation` + `import * as m from "framer-motion/m"` |
| `vanilla-tilt` | 1.8.1 | Físicas 3D en tarjetas de proyectos (max 8-10° inclinación) |
| `@studio-freight/lenis` | 1.0.42 | Smooth scroll premium (sentido AWWWARDS) |

### 2.3 Backend, Email y Validación

| Librería | Versión | Uso |
|---|---|---|
| Supabase (PostgreSQL + Auth + Storage) | vía `@supabase/supabase-js` | Base de datos, autenticación y storage para el formulario de contacto |
| `resend` | 6.9.3 | Envío de emails transaccionales desde Server Actions |
| `zod` | 4.3.6 | Validación de datos del formulario de contacto |

### 2.4 Content y SEO

| Librería | Versión | Uso |
|---|---|---|
| `gray-matter` | 4.0.3 | Parser de frontmatter YAML para posts MDX del blog |
| `next-mdx-remote` | 6.0.0 | Renderizado de MDX en Server Components |

### 2.5 Analytics (Triple Stack)

| Herramienta | Librería | Propósito |
|---|---|---|
| Vercel Analytics | `@vercel/analytics` 2.0.0 | Page views + custom events |
| Vercel Speed Insights | `@vercel/speed-insights` 2.0.0 | Core Web Vitals en tiempo real (LCP, INP, CLS) |
| Google Analytics 4 | Componente custom `GoogleAnalytics` | Tracking estándar GA4 |
| Microsoft Clarity | `clarity-js` 0.8.57 | Heatmaps, rage-clicks, session recordings |

### 2.6 DevDependencies

| Paquete | Versión | Uso |
|---|---|---|
| `@tailwindcss/postcss` | v4 | PostCSS plugin para Tailwind v4 |
| `eslint` + `eslint-config-next` | 9.x / 16.1.6 | Linting |
| `typescript` | 5.x | Type checking |

---

## 3. SISTEMA DE DISEÑO UI/UX — DARK ORGANIC LUXURY

La dirección artística es **"Dark Organic Luxury"**. Fue diseñada para evocar la sensación de un estudio de ingeniería premium, no de un freelancer junior. Es brutalista, orgánica, y con un solo acento de color que actúa como "joya" en cada interacción.

### 3.1 Paleta de Colores (Tokens CSS en `globals.css` - Bloque `@theme`)

| Token CSS | Valor HEX | Nombre Interno | Uso Visual |
|---|---|---|---|
| `--color-background` | `#0C0C0C` | Negro asfalto/petróleo | Background principal de todas las páginas |
| `--color-surface` | `#141414` | Negro elevado | Cards, secciones secundarias, contenedores |
| `--color-border` | `#1C1C1C` | Grafito | Bordes de tarjetas y divisores de sección |
| `--color-text-primary` | `#F5F0E8` | Blanco hueso cálido | Todo el texto principal. Reduce fatiga visual vs #FFF puro |
| `--color-text-secondary` | `#78716C` | Stone-500 muted | Texto secundario, meta-info, labels |
| `--color-accent` | `#D97706` | **Ámbar sofisticado** | LA joya. CTAs, acentos, efectos de luz, hover states |
| `--color-accent-glow` | `rgba(217,119,6,0.12)` | Ámbar diffused | Sombras, glows, ambient light |
| `--color-code-green` | `#22C55E` | Terminal green | Indicador "● Live" en project cards, snippets |
| `--color-code-yellow` | `#FACC15` | Terminal yellow | Elementos de código y terminal UI |

**Filosofía de color:** Un solo color decorativo (ámbar) en un mar de oscuridad. Cuando aparece, el ojo no puede ignorarlo. Cada botón, cada hover, cada glow usa el mismo ámbar para cohesión absoluta.

### 3.2 Tipografía (3 Fuentes Vía `next/font/google`)

Definidas en `src/lib/fonts.ts`. Importadas como variables CSS, NUNCA via `@import` en CSS.

| Variable CSS | Fuente | Pesos | Uso Específico |
|---|---|---|---|
| `--font-serif` | **Instrument Serif** | 400, italic | Headlines H1/H2. Las itálicas se usan SOLO en palabras emocionales: *"fast"*, *"Home"*, *"System"* |
| `--font-sans` | **DM Sans** | 400, 500 | Body, párrafos, botones, UI copy general |
| `--font-mono` | **JetBrains Mono** | 400 | Code snippets, labels técnicos, glitch text, SLA strip, project tags |

### 3.3 Efectos CSS Globales en `globals.css`

#### A. Noise Overlay (`body::before`)
```css
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,..."); /* SVG feTurbulence fractalNoise */
  background-repeat: repeat;
  background-size: 180px 180px;
}
```
Un granulado SVG fractal hiper-ligero (0 requests HTTP extra) inyectado al 3% de opacidad sobre toda la interfaz. Simula la textura táctil de papel celuloide o pantalla de cine analógico.

#### B. Vignette Background (`body::after`)
```css
body::after {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9998;
  background: radial-gradient(ellipse at center, transparent 60%, var(--color-background) 100%);
  opacity: 0.2;
}
```
Efecto de viñeteo cinematográfico que oscurece los bordes del viewport, magnifica la atención al centro de la pantalla.

#### C. Card Spotlight + Magnetic Glow
```css
.card-spotlight::before {
  background: radial-gradient(
    circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    #D9770640 0%,
    transparent 60%
  );
  /* usa -webkit-mask + mask-composite: exclude para iluminación de bordes */
}
.card-spotlight:hover::before { opacity: 1; }
.card-spotlight:hover { box-shadow: 0 0 0 1px #D9770620, 0 8px 40px #D9770610; }
```
Las tarjetas de proyectos emiten un **haz de luz ámbar** que sigue las coordenadas exactas del ratón mediante variables CSS (`--mouse-x/y`). Cuando el cursor pasa, los bordes internos se iluminan como si un foco cinematográfico los estuviera encontrando en la oscuridad.

#### D. Selection Color
```css
::selection {
  background-color: var(--color-accent);
  color: #000;
}
```
Hasta la selección de texto es ámbar. Detalle premium.

#### E. Transiciones Globales
```css
a, button {
  transition-property: color, background-color, border-color, box-shadow, transform, opacity;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
```
Todos los elementos interactivos tienen transiciones suaves coherentes.

---

## 4. ANIMACIONES Y CAPA MICRO-INTERACTIVA (DETALLE TOTAL)

### 4.1 Lenis Smooth Scroll (Global)
- **Componente:** `ClientSideProviders.tsx` envuelve toda la app con `LazyMotion` + Lenis
- **Efecto:** Alteración de la fricción de la rueda del mouse/trackpad. Scroll visualmente "pesado" y fluido, comparable con estudios Awwwards/FWA
- **Regla:** `prefers-reduced-motion` respetado (Lenis se desactiva para accesibilidad)

### 4.2 Hero Glitch / Scramble (`HeroAnimations.tsx`)
- **Qué hace:** Al cargar la página, el texto "Adrian Oliver" se muestra primero como caracteres criptográficos aleatorios (`ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%`) que progresivamente se decodifican caracter por caracter hasta mostrar el nombre real
- **Implementación:** `setInterval` a 40ms que itera sobre un charset, revelando cada letra a un ritmo de `iteration += 0.65` por tick
- **Accesibilidad:** Chequea `prefers-reduced-motion` antes de ejecutar. Si está activo, muestra el nombre estáticamente
- **Visual adicional:** Al hacer hover sobre el nombre, aparece un drop-shadow ámbar: `hover:drop-shadow-[0_0_20px_#D9770660]`

### 4.3 Ambient Glow (Hero)
Un `div` fijo posicionado en la parte superior central del viewport con un gradiente radial ámbar:
```
radial-gradient(ellipse at 50% 0%, rgba(217,119,6,0.13) 0%, transparent 70%)
```
Dimensiones: 800×500px. Simula una fuente de luz ambiental que baña el hero desde arriba.

### 4.4 Ghost Typography ("Engineer")
Un texto gigante (`20vw`) que dice "Engineer" se renderiza con opacidad al 2.5% (`opacity: 0.025`) detrás del hero. Es prácticamente invisible, pero el subconsciente del visitante lo registra. Aparece con fade-in después de 0.6s.

### 4.5 Staggered Reveal (Hero CTAs, Subtitle, Bio)
Cada elemento del hero tiene un delay progresivo usando Framer Motion `m.div`:
- H1 (glitch name): delay 0.1s
- Subtitle: delay 0.25s
- Bio line: delay 0.35s
- CTAs: delay 0.45s

Cada uno hace `opacity: 0→1, y: 20px→0` con `ease: "easeOut"` en 0.5s.

### 4.6 Magnetic Buttons (`MagneticButton.tsx`)
Los CTAs principales ("View My Work", "Get In Touch") usan un componente `MagneticButton` que reacciona al acercamiento del cursor, desplazándose levemente hacia la posición del mouse antes del click.

### 4.7 Vanilla Tilt 3D (`TiltCard.tsx`)
Aplicado a cada `ProjectCard`. Cuando el mouse entra en la tarjeta:
- Se inclina en ejes X/Y (máximo 8-10 grados)
- Sin efecto "glare" (desactivado conscientemente para mantener madurez)
- La tarjeta recupera su posición original suavemente al salir el mouse

### 4.8 FadeUp Scroll Reveal (`FadeUp.tsx`)
Componente wrapper que usa `whileInView` de Framer Motion para revelar secciones al hacer scroll:
- `opacity: 0→1`, `y: 30px→0`
- Delay configurable por prop
- Se usa en TODAS las secciones de la página: Projects, Methodology, About, Services, Contact

### 4.9 Page Transitions (`PageTransition.tsx`)
Wrapper de Framer Motion en `layout.tsx` que envuelve `{children}`. Al navegar entre páginas, aplica una transición de fade suave.

### 4.10 Section Dividers (`SectionDivider.tsx`)
Separadores visuales entre secciones de la homepage. Mantienen el ritmo visual y dan respiro al scroll.

---

## 5. ARQUITECTURA Y ESTRUCTURA DETALLADA DE CARPETAS

```
src/
├── app/                              # Next.js App Router (Server Components)
│   ├── layout.tsx                    # 170 líneas — Root Layout. Fonts, Navbar, Footer, Providers,
│   │                                 # Analytics (GA4, Clarity, Vercel), JSON-LD Schema.org
│   ├── page.tsx                      # 43 líneas — Homepage. Orquesta 7 secciones con SectionTracker
│   ├── globals.css                   # 135 líneas — Design system @theme, noise, vignette, spotlight
│   ├── sitemap.ts                    # Sitemap XML dinámico con case studies + blog posts
│   ├── blog/
│   │   ├── page.tsx                  # Lista de posts MDX
│   │   └── [slug]/page.tsx           # Post individual con metadata dinámica
│   ├── contact/
│   │   └── page.tsx                  # Página de contacto (Server Action + Resend)
│   └── projects/
│       ├── lukess-home/page.tsx      # 146 líneas — Case Study E-commerce completo
│       ├── lukess-inventory-system/page.tsx  # 149 líneas — Case Study ERP/POS completo
│       └── solnr-studio/page.tsx     # Case Study del catálogo de moda
│
├── components/
│   ├── analytics/                    # 3 componentes: GoogleAnalytics, MicrosoftClarity, SectionTracker
│   ├── blog/                         # Renderizadores MDX custom
│   ├── home/                         # 14 archivos — Todos los bloques de la homepage:
│   │   ├── Hero.tsx                  #   Wrapper Server Component del hero
│   │   ├── HeroAnimations.tsx        #   140 líneas — Glitch, ambient glow, ghost text, stagger
│   │   ├── ProjectCard.tsx           #   121 líneas — Card con TiltCard + analytics tracking
│   │   ├── ProjectsGrid.tsx          #   Grid de 3 proyectos (Lukess Home, Inventory, Solnr)
│   │   ├── Methodology.tsx           #   Sección de metodología "how I work"
│   │   ├── About.tsx                 #   Sección bio + self-taught narrative
│   │   ├── TerminalCard.tsx          #   Componente visual tipo terminal CLI
│   │   ├── StackGrid.tsx             #   Grid del tech stack visual
│   │   ├── Services.tsx              #   111 líneas — 3 cards de servicio + SLA strip + ProcessSteps
│   │   ├── ProcessSteps.tsx          #   Pasos del proceso de trabajo (1→2→3→4)
│   │   ├── Contact.tsx               #   CTA section de contacto
│   │   ├── ContactForm.tsx           #   5,931 bytes — Formulario interactivo con Server Action
│   │   ├── CurrentProject.tsx        #   Sección "Currently Building"
│   │   
│   ├── layout/                       # PageTransition, Navbar, Footer
│   ├── projects/                     # 6 componentes de case study rich:
│   │   ├── ProjectHero.tsx           #   4,928 bytes — Hero banner con metadata strip
│   │   ├── ProjectMetric.tsx         #   1,063 bytes — Métricas animadas (23 days, 100/100, etc)
│   │   ├── TechBento.tsx             #   2,298 bytes — Bento grid de features técnicas
│   │   ├── TechnicalSnippet.tsx      #   2,411 bytes — Snippet de código real con syntax highlight
│   │   ├── ProjectGallery.tsx        #   2,232 bytes — Galería responsive de screenshots
│   │   └── VideoDemo.tsx             #   2,225 bytes — Player de video/demo con poster image
│   ├── providers/
│   │   └── ClientSideProviders.tsx   # LazyMotion + domAnimation + Lenis
│   └── ui/                           # Primitivos: TiltCard, FadeUp, MagneticButton, SectionDivider
│
├── content/
│   └── blog/                         # Archivos .mdx estáticos
│       └── server-components-retail.mdx  # Artículo técnico publicado
│
├── lib/
│   ├── fonts.ts                      # Declaraciones next/font/google (DM Sans, Instrument Serif, JetBrains Mono)
│   ├── animations.ts                 # Variantes Framer Motion exportadas y reutilizables
│   ├── mdx.ts                        # Parser filesystem con gray-matter
│   ├── analytics.ts                  # Wrapper de custom events para tracking
│   └── utils.ts                      # cn() utility (clsx + tailwind-merge)
│
└── types/                            # Interfaces TypeScript globales
```

---

## 6. HOMEPAGE — LAS 7 SECCIONES QUE COMPONEN LA PÁGINA PRINCIPAL

La homepage (`src/app/page.tsx`) es un **Server Component puro** que orquesta 7 secciones. Cada sección está envuelta en un `<SectionTracker>` para analytics de scroll-depth.

### Sección 1: `<Hero />`
- **Glitch scramble** del nombre "Adrian Oliver" (charset criptográfico → texto real)
- **Ghost text "Engineer"** al 2.5% opacity en el background
- **Ambient glow** ámbar de 800×500px arriba del viewport
- **Subtitle:** "I build e-commerce and inventory systems for apparel and retail brands — fast, clean, production-ready."
- **Bio line:** "Next.js 15 · TypeScript · Supabase · Tailwind v4 — Available for US/EU remote projects · GMT-4"
- **2 CTAs Magnéticos:** "View My Work" (ámbar sólido con shadow glow) + "Get In Touch" (borde con hover ámbar)
- **Stagger animation:** 5 elementos aparecen progresivamente con delay 0.1s→0.45s

### Sección 2: `<ProjectsGrid />`
- Muestra **3 proyectos** como `ProjectCard` con Vanilla Tilt 3D
- **Lukess Home** (featured, con métricas en footer: 23-Day Build / 100/100 Lighthouse / 26+ SKUs)
- **Lukess Inventory System** (featured)
- **Solnr Studio** (non-featured)
- Cada card tiene: thumbnail con hover zoom 105%, badge "● Live" o "◆ Case Study", tags técnicos con hover ámbar, analytics tracking en click

### Sección 3: `<Methodology />`
- Sección "How I Work" que explica el proceso del developer
- Enfoque async-first, entregas incrementales, comunicación clara

### Sección 4: `<About />`
- **TerminalCard:** Un componente visual tipo CLI que simula una interfaz de línea de comandos narrando la historia del developer
- **StackGrid:** Grid visual del tech stack
- Narrativa "self-taught" con enfoque en disciplina y resultados medibles

### Sección 5: `<Services />`
3 cards de servicio con `card-spotlight` glow:
1. **E-Commerce Architecture** — Tags: Next.js, Supabase, WhatsApp API, Resend, Vercel
2. **Business Web Applications** — Tags: RBAC, Real-time, PostgreSQL, TypeScript, REST APIs
3. **Technical Consulting** — Tags: System Design, Code Review, Stack Audit, Documentation

**SLA Strip:** Barra visual con 3 métricas: `< 4h` response time, `Weekly` milestone updates, `60 days` post-launch support. CTA "Start a project →" con glow.

### Sección 6: `<ProcessSteps />`
Pasos visuales del proceso de trabajo del developer (discovery → build → deliver → support)

### Sección 7: `<Contact />`
- `ContactForm.tsx` — Formulario interactivo con Server Action + Resend
- Indicador de disponibilidad
- CTA final de conversión

---

## 7. CASO DE ESTUDIO 1: LUKESS HOME (E-COMMERCE OMNICANAL)

**URL en portafolio:** `/projects/lukess-home`
**Deploy del proyecto real:** https://lukess-home.vercel.app (alias: https://store.adrianoliver.dev)
**Repositorio:** `adrianoliver-dev/lukess-home`

### 7.1 El Problema del Cliente
Una marca de ropa masculina con **más de 10 años de trayectoria** y **3 puestos físicos** en el Mercado Mutualista de Santa Cruz de la Sierra, Bolivia. Operaban con hojas de cálculo desconectadas. Una venta en un puesto no se reflejaba en los otros hasta el final del día, causando:
- **Sobreventa física** (overselling entre sucursales)
- **Clientes frustrados** al llegar a recoger productos vendidos
- **Conciliación manual** cada noche
- **Cero presencia digital** (sin e-commerce, sin catálogo online)

### 7.2 La Solución Ingenierada
Adrian Oliver diseñó y construyó un **ecosistema de dos aplicaciones** que comparten la misma base de datos Supabase:

```
lukess-home (Landing E-commerce)        lukess-inventory-system (Admin POS/ERP)
        │                                      │
        ├── Lee: products, categories          ├── Escribe: products, inventory
        ├── Lee: banners (CMS)                 ├── Gestiona: orders, order_items
        ├── Lee: discount_codes                ├── Actualiza: order status
        ├── Escribe: orders (checkout)         ├── Lee: orders de la landing
        ├── Escribe: customers                 ├── Envía emails de estado
        └── Llama RPCs: reserve_order,         └── Llama WhatsApp API de la landing
                        consume_discount
```

### 7.3 Stack Técnico del Proyecto
- **Next.js 16.1.6** (App Router, Server Components, API Routes)
- **React 19.2.3** (Concurrent features)
- **Supabase PostgreSQL 17.6** (sa-east-1 São Paulo) — 10+ tablas, triggers, RPCs, RLS
- **Stripe** (Checkout Sessions + Webhooks en BOB bolivianos)
- **Resend** (10 tipos de email transaccional con templates HTML dark premium)
- **Meta WhatsApp Cloud API** (9 templates de negocio aprobados por Meta)
- **Framer Motion** (Animaciones de carrito, galería, checkout multi-step)
- **Leaflet/React Leaflet** (Mapas interactivos para entrega por GPS)
- **Blog Markdown** (SEO local con gray-matter + remark)

### 7.4 Base de Datos: Modelo Relacional Completo
- `products` — Catálogo central con dual image system (thumbnail 480×600 + hero 800×1000)
- `categories` — Categorías activas con slug URL-friendly
- `inventory` — **Multi-ubicación**: cada row = (product_id, location_id, size). Stock real = `quantity - reserved_qty`
- `locations` — Puestos físicos del cliente (3 tiendas)
- `orders` — 15+ columnas incluyendo GPS, delivery_method, payment_method, WhatsApp prefs
- `order_items` — Snapshot de precio unitario al momento del pedido
- `customers` — Soporta guests anónimos, guests con email, y usuarios registrados
- `discount_codes` — Sistema de cupones con validación por email, expiration, y max_uses
- `subscribers` — Newsletter con fuente de suscripción rastreada
- `banners` — CMS de hero banners con dual imagen (desktop/mobile) y fechas de campaña

### 7.5 El Checkout Sin Fricción (130KB de Lógica de Negocio)
El `CheckoutModal.tsx` (130,114 bytes — el archivo más grande del proyecto) implementa:
- **Guest checkout anónimo** — Solo nombre y teléfono, no requiere email ni login
- **3 métodos de pago:** QR/transferencia bancaria (flujo principal de Bolivia), efectivo al retirar en tienda, Stripe (tarjeta)
- **Protecciones server-side:** Honeypot anti-bot, rate limiting (3 órdenes/hora/email, 5/hora/IP), validación de cupón por email
- **Reserva de inventario atómica:** RPC `reserve_order_inventory` bloquea el stock inmediatamente tras el pago

### 7.6 Snippet Técnico Expuesto en el Portafolio

El caso de estudio muestra el trigger PL/pgSQL real de PostgreSQL:
```sql
CREATE OR REPLACE FUNCTION handle_new_order()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE products
  SET stock = stock - (NEW.quantity)
  WHERE id = NEW.product_id AND stock >= NEW.quantity;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Insufficient stock for product %', NEW.product_id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

### 7.7 Métricas Publicadas
| Métrica | Valor |
|---|---|
| Delivery | 23 Days to production |
| Lighthouse Score | 100/100 |
| Storefronts synced | 3 live |
| LCP optimization | 5.6s → 2.5s (-55%) |
| Email types | 10 transactional templates |
| WhatsApp templates | 6+ approved by Meta |
| Pages | ~22 routes |
| API endpoints | 7 Route Handlers |

### 7.8 Capturas Existentes en `/public/images/projects/lukess-home/`
1. `lukess-home_Home_page hero.png` — Vista del hero del e-commerce
2. `lukess-home_cart_drawer.png` — Drawer lateral del carrito animado
3. `lukess-home_Catalogo.png` — Vista global del catálogo
4. `lukess-home_catalogo_con_filtros.png` — Catálogo con filtros activos
5. `lukess-home_page_product.png` — Página de detalle de producto
6. `lukess-home_catalogo_mobile.png` — Catálogo en viewport móvil
7. `lukess-home_page_product_mobile.png` — Producto en viewport móvil

### 7.9 Features de UX Destacables del Proyecto (Aprovechables para el Portafolio)
- Animaciones de banner con keyframes `slideInFromRight` + `shimmerSweep`
- Marquee infinito en trust banner
- Galería de imágenes con fade entre fotos (Framer Motion)
- Badge countdown de descuento con expiración
- Overlay `AGOTADO` en cards de producto sin stock
- Color swatches visuales en filtros dinámicos
- Notificaciones WhatsApp automatizadas por estado del pedido
- Motor de fidelización: al completar un pedido, se genera automáticamente un código de descuento único

---

## 8. CASO DE ESTUDIO 2: LUKESS INVENTORY SYSTEM (ERP/POS ENTERPRISE)

**URL en portafolio:** `/projects/lukess-inventory-system`
**Deploy del proyecto real:** https://lukess-inventory-system.vercel.app (alias: https://inventory.adrianoliver.dev)
**Repositorio:** `adrianoliver-dev/lukess-inventory-system`

### 8.1 El Problema Sistémico
Antes de este sistema, el inventario del cliente se gestionaba con **registros en papel y hojas de cálculo semanales**. Esto causaba:
- **Fuga constante de inventario** (shrinkage no rastreable)
- **Devoluciones no registradas**
- **Compras reactivas** en vez de informadas
- **Cero visibilidad financiera** en tiempo real
- **Sin auditoría** de quién hizo qué transacción

### 8.2 La Ingeniería Inyectada
Un ERP + POS personalizado con:
- **19+ tablas de PostgreSQL** con modelo multi-tenancy (`organization_id`)
- **RBAC de doble capa:** Middleware de Next.js Edge + verificación en cada Server Action
- **Sistema anti-overselling por reservas de inventario:** Un trigger de PostgreSQL gestiona estados de `reserved → confirmed → completed` o `→ cancelled` con liberación automática de stock
- **POS táctil para ventas físicas** con búsqueda por SKU/nombre, control de stock por talla y ubicación, generación de recibo PDF con QR
- **Marketing CMS** para banners del e-commerce y códigos de descuento
- **Reportes financieros con gráficos** (Recharts) y exportación a PDF/Excel
- **Motor de lealtad automático:** Al completar un pedido, genera cupón `THANKS-{orderID}` con descuento enviado por email Y WhatsApp

### 8.3 Máquina de Estados del Pedido (7 estados)
```
pending          🕐  Validando Pago       → cliente sube comprobante QR
pending_payment  🏦  Reserva Activa       → para cash_on_pickup
reserved         💳  Pago pendiente       → admin confirma
confirmed        ✅  Pago confirmado      → admin despacha
shipped          🚚  En camino            → admin entrega
completed        🎉  Entregado            → stock descontado definitivamente por trigger
cancelled        ❌  Cancelado            → stock reservado liberado automáticamente por trigger
```

### 8.4 Snippet Técnico Expuesto en el Portafolio
Row Level Security dinámica de PostgreSQL:
```sql
ALTER TABLE inventory ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Managers can update stock"
ON inventory FOR UPDATE
TO authenticated
USING (
  auth.uid() IN (
    SELECT user_id FROM staff_roles
    WHERE role IN ('manager', 'admin')
  )
);

CREATE POLICY "Public read access"
ON inventory FOR SELECT
TO anon, authenticated
USING (true);
```

### 8.5 Métricas Publicadas
| Métrica | Valor |
|---|---|
| Visibility | Real-time |
| Auditability | 100% (immutable transaction logs) |
| Reporting | Instant (con gráficos Recharts) |
| DB tables | 19+ |
| SQL migrations | 16+ |
| Triggers/RPCs | 6+ |
| WhatsApp templates | 9 mapped to order states |
| Development time | ~6 weeks (Feb-Mar 2026) |
| Largest component | `pos-client.tsx` 78,705 bytes |
| RBAC roles | 3 (admin, manager, staff) |

### 8.6 Capturas Existentes en `/public/images/projects/lukess-inventory/`
1. `inventory_dashboard.png` — Business Intelligence Center (KPIs, low stock, recent sales)
2. `inventory_POS_view.png` — Point of Sale interface (búsqueda, carrito, pago)
3. `inventory_reports.png` — Permisos y reportes por roles
4. `inventory_list_inventory.png` — Tabla de datos de inventario completa
5. `inventory_edit_product.png` — Panel de edición de producto con image uploader
6. `inventory_reports_2.png` — Advanced Analytics Reports (Recharts)

### 8.7 Features de UX Destacables del Proyecto (Aprovechables para el Portafolio)
- Sidebar colapsable con RBAC visual (staff no ve Dashboard ni Reportes)
- PendingOrdersBadge con Supabase Realtime (actualización sin refresh)
- POS con efecto confetti (`react-confetti`) al confirmar venta
- Stagger animations en listas de dashboard (`animation-delay: i * 0.1s`)
- Focus rings dorados (`gold-500`) para accesibilidad WCAG 2.1 AA
- Skeleton loaders que replican exactamente la forma de cada gráfico y tabla
- Timezone awareness para Bolivia (GMT-4 → UTC conversion)

---

## 9. CASO DE ESTUDIO 3: SOLNR STUDIO (Catálogo de Moda)

**URL en portafolio:** `/projects/solnr-studio`

### 9.1 Descripción
Catálogo e-commerce editorial para una marca de moda. Foco en la experiencia visual y la navegación por categorías con filtros dinámicos basados en URL.

### 9.2 Features Técnicas
- **Cart state global** con React Context + `useReducer` + `localStorage`
- **Slide-in cart drawer** con animaciones de entrada/salida
- **Catalog filters URL-based:** El estado de los filtros se maneja directamente en los query params de la URL (Next.js searchParams), permitiendo deep-linking y compartibilidad
- **CatalogGrid con animaciones:** Framer Motion anima la reordenación de items al cambiar filtros
- **Product Detail Page (PDP)** con galería de imágenes, selector de tallas sticky, y sección "You may also like"
- **Branded 404 page** con el look and feel de la marca

---

## 10. INFRAESTRUCTURA SEO Y ANALYTICS

### 10.1 Metadata del `layout.tsx`
```typescript
metadata: {
  metadataBase: new URL('https://adrianoliver.dev'),
  title: { default: 'Adrian Oliver — Full-Stack Developer', template: '%s | Adrian Oliver' },
  description: 'Full-stack developer specializing in Next.js, TypeScript, and Supabase...',
  keywords: ['Next.js developer', 'full-stack developer', 'TypeScript developer', ...],
  openGraph: { type: 'website', locale: 'en_US', images: ['/opengraph-image'] },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, googleBot: { 'max-image-preview': 'large' } },
}
```

### 10.2 JSON-LD Schema.org (Doble Esquema)
Inyectado como `<script type="application/ld+json">` en `layout.tsx`:
1. **`@type: Person`** — name, jobTitle, knowsAbout (8 tecnologías), sameAs (GitHub)
2. **`@type: ProfessionalService`** — address (Santa Cruz, BO), geo coordinates, openingHours, priceRange ($$), areaServed (US, EU)

### 10.3 Sitemap Dinámico (`sitemap.ts`)
Genera `/sitemap.xml` automáticamente con:
- Homepage (prioridad 1.0)
- Páginas de case study (prioridad 0.8)
- Blog posts (leídos del filesystem MDX)
- Páginas estáticas

### 10.4 LLMs.txt
Archivo en `public/llms.txt` diseñado para crawlers de IA (OpenAI, Perplexity, Anthropic). Contiene un digest Markdown de Adrian Oliver: background, stack, proyectos, y expertise técnico.

### 10.5 Analytics Cuádruple Stack
| Sistema | Propósito |
|---|---|
| Vercel Analytics | Page views + custom events |
| Vercel Speed Insights | Core Web Vitals (LCP, INP, CLS) en tiempo real |
| Google Analytics 4 | Tracking estándar + e-commerce events |
| Microsoft Clarity | Heatmaps, rage-clicks, session recordings. **Crucial** para ver cómo los usuarios experimentan las animaciones |

### 10.6 Section Tracking
`SectionTracker` wrapper en cada sección de la homepage permite medir scroll-depth por sección en analytics.

---

## 11. BLOG TÉCNICO MDX

- **Ruta:** `/blog` (lista) y `/blog/[slug]` (post individual)
- **Motor:** `gray-matter` parsea frontmatter YAML + `next-mdx-remote` renderiza MDX a React
- **Archivo existente:** `src/content/blog/server-components-retail.mdx`
- **JSON-LD:** Cada post genera automáticamente un schema `BlogPosting` para Google
- **Propósito:** Captar tráfico orgánico de CTOs/Fundadores buscando soluciones (ej. "migrar de Shopify a Next.js", "modernizar inventarios")

---

## 12. COMPONENTES REUTILIZABLES DE CASE STUDY (Rich Media)

Los case studies usan 6 componentes de `src/components/projects/`:

| Componente | Bytes | Función |
|---|---|---|
| `ProjectHero.tsx` | 4,928 | Banner hero con título, itálica, descripción, metadata strip (Role, Timeline, Stack, Service), y link al deploy |
| `ProjectMetric.tsx` | 1,063 | Métricas animadas (ej. "23 / Days to production", "100 / /100") |
| `TechBento.tsx` | 2,298 | Bento grid de features técnicas con col-spans configurables |
| `TechnicalSnippet.tsx` | 2,411 | Bloque de código real con título y subtítulo (ej. trigger PL/pgSQL) |
| `ProjectGallery.tsx` | 2,232 | Galería responsive masonry de screenshots con col-spans |
| `VideoDemo.tsx` | 2,225 | Player de video/demo con poster image y overlay play |

**Nota crítica:** `VideoDemo` y `ProjectGallery` actualmente reciben **imágenes PNG estáticas**. La infraestructura para video está lista (`posterImage` prop, overlay play), pero no hay videos reales grabados y subidos aún.

---

## 13. CAPTURAS DE PANTALLA — INVENTARIO Y BRECHAS

### 13.1 Capturas Existentes
**Lukess Home (7 capturas):** Hero page, cart drawer, catálogo, filtros, producto desktop, catálogo mobile, producto mobile.
**Lukess Inventory (6 capturas):** Dashboard, POS, reportes/permisos, lista inventario, edición producto, analytics avanzados.

### 13.2 Capturas que FALTAN (Crítico para el portafolio)
1. **Videos de las animaciones reactivas** — El Lenis scroll, el card spotlight hover, el glitch del nombre. Ningún PNG captura la esencia de estas interacciones.
2. **Grabación del checkout multi-step** — El flujo completo del carrito → datos → QR → confirmación es impresionante en movimiento.
3. **Grabación del POS** — La interfaz completa de venta con búsqueda, carrito, descuento, confetti de éxito.
4. **Video del sistema de banners** — Crear un banner en el admin → verlo aparecer en la landing en tiempo real.
5. **Video de WhatsApp notification** — Cambiar estado del pedido → ver la notificación llegar al teléfono.
6. **Capturas de Solnr Studio** — El catálogo con filtros URL-based, el cart drawer animado.
7. **Screenshot del propio portafolio** — El hero con glitch, las cards con tilt, el noise overlay visible.

---

## 14. OPEN ISSUES Y DEUDA TÉCNICA DEL PORTAFOLIO

| # | Área | Descripción | Prioridad |
|---|---|---|---|
| 1 | **Navbar Mobile** | El navbar funciona en desktop pero necesita un overlay cinemático con glassmorphism (backdrop-blur) para móvil | 🔴 Alta |
| 2 | **Media Estática vs Dinámica** | PNGs donde deberían haber WebM/MP4 — pierde el 80% del impacto visual | 🔴 Alta |
| 3 | **Shared-Layout Animation** | Las transiciones entre páginas son fade genérico; debería haber morphing de la card del proyecto → hero del case study | 🟡 Media |
| 4 | **Copy "Solo 30-day builds"** | Atrae atención pero le falta el "colmillo comercial" para tickets de $3k+ | 🟡 Media |
| 5 | **Blog Content** | Solo 1 post publicado. Se necesitan 4-5 posts más orientados a dolor de negocio | 🟡 Media |
| 6 | **Redes sociales** | Cero presencia en LinkedIn, X, Upwork. El portafolio existe en el vacío sinyndse indexar | 🔴 Alta |

---

## 15. ISSUES DE LUKESS (TRANSFERIBLES COMO EXPERIENCIA DE PORTAFOLIO)

Los proyectos Lukess tienen deudas técnicas conocidas que demuestran experiencia real:
- **Rate limiting en memoria** (debería ser Redis/Upstash para múltiples instancias Vercel)
- **CheckoutModal monolítico** (130KB, 3500+ líneas — requiere refactor en sub-componentes)
- **Email domain no verificado** en Resend (envía desde `onboarding@resend.dev`)
- **Middleware de auth faltante** en la landing (protección solo client-side)
- **Wildcard de imágenes** (`hostname: "**"` en next.config permite cualquier dominio)
- **10 funciones SQL con mutable search_path** (flagged por Supabase Security Advisor)
- **RLS permisivo en INSERT** para 6 tablas
- **Liberación de reservas incompleta** al cancelar pedidos (solo cron de 48h para pickups)

Estos issues son **credibilidad cruda** si se documentan transparentemente como "lecciones aprendidas" en un artículo de blog o en la sección "Architecture Decisions" del portafolio.

---
---

## 16. MEGA-PROMPT DEFINITIVO PARA LA IA DE DEEP RESEARCH

**Instrucciones:** Copia ÍNTEGRAMENTE este prompt junto con todo el documento superior y proporciónaselo a tu LLM experto (Claude Opus, GPT-4o, Gemini Pro, etc).

---

> **Tu Rol Asignado:**
> Eres un Chief Strategy Officer + Fractional CMO de una agencia digital top-tier (nivel Awwwards / The FWA / Bürocratik). Tienes background técnico como Engineering Manager y experiencia directa escalando freelancers técnicos de $0 → $100K+ anuales a nivel internacional. Tu fuerte es la intersección entre ingeniería elite, diseño inmersivo, y posicionamiento comercial B2B.
>
> **Contexto Completo de Datos:**
> Has recibido arriba la auditoría exhaustiva del portafolio `adrianoliver.dev`, incluyendo:
> - El stack exacto (Next.js 16, React 19, TypeScript strict, Tailwind v4 `@theme`, Supabase)
> - La paleta "Dark Organic Luxury" (#0C0C0C + Ámbar #D97706) con tokens CSS
> - Las 3 fuentes tipográficas y su uso (Instrument Serif, DM Sans, JetBrains Mono)
> - Cada efecto de animación activo: Glitch/Scramble, Lenis Smooth Scroll, Vanilla Tilt 3D, Card Spotlight con coordenadas de mouse, Noise SVG overlay, Vignette, Ambient Glow, Ghost Typography, Magnetic Buttons, FadeUp stagger reveals
> - Los 3 case studies completos con capturas existentes:
>   - **Lukess Home:** E-commerce omnicanal con 10+ tablas PostgreSQL, triggers atómicos anti-overselling, Stripe+QR+WhatsApp, 10 tipos de email, guest checkout sin fricción, LCP 5.6s→2.5s
>   - **Lukess Inventory System:** ERP/POS enterprise con 19+ tablas, RBAC doble capa, máquina de 7 estados, POS táctil con confetti, motor de lealtad automático, reportes con Recharts + export PDF/Excel
>   - **Solnr Studio:** Catálogo editorial con cart drawer animado y filtros URL-based
> - La infraestructura SEO (JSON-LD, sitemap.ts, robots.ts, llms.txt, GA4, Clarity, Vercel Insights)
> - Las brechas críticas: PNGs estáticos donde deberían haber videos, navbar mobile incompleto, copy que necesita colmillo comercial, blog con solo 1 post, cero presencia en redes
>
> **Tu Misión — Plan Maestro Prescriptivo (NO GENERALIDADES):**
>
> Genera un reporte **accionable, paso a paso, con nombres de herramientas específicas y ejemplos de copy textual**. Sé despiadado con lo que está mal. Sé concreto.
>
> ### 1. PULIDO VISUAL TOP-TIER (5 Recomendaciones Técnicas)
> Dados mis efectos activos (Tilt, Lenis, Noise, Spotlight, Glitch, MagneticButtons), dictamina exactamente **5 micro-interacciones o ajustes visuales** que agencias como Bürocratik, Locomotive, o Studio Freight implementarían hoy en un portafolio de este nivel. Para cada una:
> - Nombre del efecto
> - Qué elemento DOM lo recibe (navbar, footer, project cards, etc)
> - Implementación en 3 líneas: CSS puro o Framer Motion (nada que pese más de 2KB)
> - ¿Lo tiene Linear.app? ¿Lo tiene Vercel.com? ¿Lo tiene Raycast.com?
>
> ### 2. ESTRATEGIA VISUAL WARFARE (Screencast + Content Pipeline)
> Mis animaciones son cinemáticas pero solo tengo PNGs. Necesito un blueprint exacto:
> - **¿Qué 5 escenas debo grabar del portafolio y de los proyectos Lukess en vivo?** (Sé específico: "grabar el hover en la ProjectCard mostrando el Tilt + Spotlight durante 4 segundos")
> - **¿Con qué app en macOS?** (ScreenFlow, OBS, CleanShot X, Kap, Arc Browser recorder, etc.) — dame NOMBRE + SETTINGS (FPS, resolución, formato export)
> - **¿Cómo editar para maximizar engagement en LinkedIn/X?** (Duración ideal, music/SFX, captions, aspect ratio para cada plataforma)
> - **¿Qué formato de contenido usar?** ("Thread técnico de X", "Loom walkthrough", "Before/After carousel", etc.)
>
> ### 3. COPYWRITING LETAL (Hero + Bio + Value Prop)
> "Solo 30-day builds" + "fast, clean, production-ready" es bueno pero genérico. Con el contexto de mis case studies reales (Lukess: hojas de cálculo → sistema con zero race conditions):
> - **Reescribe 3 versiones del titular del Hero** que atraigan a CTOs y Founders
> - **Reescribe 2 versiones de la bio** (la línea "Available for remote projects")
> - **Propón 1 "anti-agency" statement** que pueda usar en LinkedIn como diferenciador
>
> ### 4. INBOUND ENGINE — CALENDARIO EDITORIAL MDX (5 Artículos)
> Tengo un sistema MDX con JSON-LD y sitemaps dinámicos listos. Necesito 5 títulos de artículos optimizados para atraer **fundadores y CTOs** (no devs), con:
> - **Título SEO** (largo, emocional, orientado a dolor de negocio)
> - **3 H2s** que debe contener cada artículo
> - **1 diagrama o tabla** que debe incluir para aumentar el time-on-page
> - **Keyword primary** y **keyword secondary** para targeting
>
> ### 5. CREDIBILIDAD Y TRUST SIGNALS
> Analiza lo que tengo (SLA strip, métricas en cards, technical snippets) y propón:
> - **3 trust signals faltantes** que debería agregar al portafolio inmediatamente
> - **1 redesign** de la sección About/TerminalCard para humanizar al developer sin parecer junior
>
> Comienza inmediatamente. Sé analítico. Sé directo. Sé extremadamente valioso.

---

**Documento Generado por:** Antigravity AI Agent (Google DeepMind)
**Fecha:** 2026-03-19 00:16 (UTC-4)
**Fuentes Directas Analizadas:**
- `src/app/globals.css` — Design system completo
- `src/app/layout.tsx` — SEO, JSON-LD, metadata, providers
- `src/app/page.tsx` — Composición del homepage
- `src/components/home/HeroAnimations.tsx` — Glitch/scramble + ambient glow + ghost text
- `src/components/home/Services.tsx` — 3 service cards + SLA strip
- `src/components/home/ProjectCard.tsx` — TiltCard + analytics tracking
- `src/components/projects/*.tsx` — 6 componentes de case study
- `src/app/projects/lukess-home/page.tsx` — Case study e-commerce completo
- `src/app/projects/lukess-inventory-system/page.tsx` — Case study ERP completo
- `C:\LukessHome\lukess-landing-ecommerce\meta\LUKESS_HOME_ECOMMERCE_AUDIT_18_03.md` (1,412 líneas)
- `C:\LukessHome\lukess-inventory-system\meta\LUKESS_INVENTORY_SYSTEM_AUDIT_18_03.md` (1,042 líneas)
- `.agent/.context/activecontext.md` — Estado del proyecto y block history
- `.agent/rules/portfolio-rules.md` — Reglas de diseño y animación
- `package.json` — Dependencias exactas con versiones
