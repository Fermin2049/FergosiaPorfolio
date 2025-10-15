# 🌐 Fergocia Portfolio

**Fergocia Portfolio** es un sitio web personal moderno inspirado en la plantilla **Bentos Portfolio**, reconstruido con **Next.js 14**, **TailwindCSS**, **Swiper.js** y **Framer Motion**.  
Cada sección del sitio (Inicio, Sobre mí, Portfolio, Contacto) se muestra como un **slide horizontal** navegable con el scroll del mouse o el teclado, creando una experiencia fluida y minimalista.

---

## 🚀 Tecnologías principales

- **[Next.js 14](https://nextjs.org/)** – Framework React moderno con App Router  
- **[TailwindCSS 3](https://tailwindcss.com/)** – Utilidades de diseño rápidas y personalizables  
- **[Swiper.js](https://swiperjs.com/react)** – Navegación horizontal con soporte para teclado y rueda del mouse  
- **[Framer Motion](https://www.framer.com/motion/)** – Animaciones declarativas y fluidas  
- **RemixIcon** – Set de íconos modernos (importados por CDN o paquete npm)

---

## 📂 Estructura del proyecto

fergocia-portfolio/
├── src/
│ ├── app/
│ │ ├── layout.jsx
│ │ └── page.jsx
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── About.jsx
│ │ ├── Portfolio.jsx
│ │ ├── CallToAction.jsx
│ │ ├── Footer.jsx
│ │ ├── HorizontalSwiper.jsx
│ │ └── SwiperContext.jsx
│ └── styles/
│ └── globals.css
├── public/
│ └── assets/
│ └── images/
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.mjs
└── README.md

yaml
Copiar código

---

## ⚙️ Instalación y ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tuusuario/fergocia-portfolio.git
cd fergocia-portfolio
2️⃣ Instalar dependencias
bash
Copiar código
npm install
3️⃣ Ejecutar el servidor de desarrollo
bash
Copiar código
npm run dev
Luego abrí tu navegador en:
👉 http://localhost:3000

4️⃣ Compilar para producción
bash
Copiar código
npm run build
npm start
🎨 Personalización
🧩 Colores principales
Configurados en tailwind.config.js:

js
Copiar código
colors: {
  primary: '#eb5d3a',
  heading: '#ffffff',
  subtitle: '#cccccc',
  border: 'rgba(119, 119, 125, 0.2)',
  background: '#000000',
  greybg: '#E6EAEE',
  accent: '#FF6B6B'
}
🌙 Modo oscuro
Activado con darkMode: 'class'
El botón del Header permite alternar entre modo claro y oscuro.

🌀 Navegación Swiper
Dirección: horizontal

Soporte: mousewheel, teclado, y paginación

Flechas de navegación deshabilitadas (sin UI invasiva)

🧠 Características clave
✅ Animaciones suaves en cada sección (Framer Motion)

✅ Diseño 100% responsive

✅ Tipografía Poppins (Google Fonts)

✅ Código modular y escalable

✅ Soporte para dark mode

✅ Sin dependencias de Bootstrap ni jQuery

🧑‍💻 Autor
Santiago “Fergocia”
Frontend Developer · UI/UX Enthusiast
📧 contacto@fergocia.com
🌐 fergocia.com (próximamente)

📄 Licencia
Este proyecto se distribuye bajo la licencia MIT.
Podés modificarlo, usarlo y adaptarlo libremente, siempre con atribución al autor original.
