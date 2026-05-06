---
title: Technical Analysis
slug: technical-analysis
project: internal
category: Maintenance
order: 3
sitemap: false
robots: noindex
published: false
---

# Resumen Técnico: Elevación de Plantilla Jekyll a Nivel Profesional

Este documento detalla los hallazgos del análisis comparativo entre el repositorio de referencia `Baleon` y el repositorio actual `gabrielcapilla.github.io`, estableciendo el plan de acción para alcanzar un estándar de calidad profesional.

---

## 1. Estructura del Repositorio (Arquitectura Propuesta)

Para igualar la robustez de `Baleon`, se propone migrar a una estructura modular:

- **`_data/`**: Centralización de la configuración del sitio (mover datos de `_config.yml` a `settings.yml`).
- **`_sass/`**: Adopción de arquitectura **7-1 (Inverted Triangle CSS)**:
  - `0-settings/`: Variables (colores, fuentes).
  - `1-tools/`: Mixins y funciones.
  - `2-base/`: Reset y tipografía base.
  - `3-modules/`: Componentes (botones, tarjetas, navbar).
  - `4-layouts/`: Estilos específicos de páginas.
- **`assets/js/`**: Scripts modulares en Vanilla JS.

---

## 2. Configuración y Dependencias

### \_config.yml

- Se recomienda separar la lógica de build de los datos de contenido.
- **Plugins requeridos (GitHub Pages compatible):**
  - `jekyll-sitemap`: SEO esencial.
  - `jekyll-seo-tag`: Gestión automática de meta tags (OpenGraph, Twitter).
  - `jekyll-feed`: Generación de RSS.

### Gemfile

Asegurar el uso de `bundler` para mantener paridad entre entornos de desarrollo y producción.

---

## 3. Front-end: CSS y JavaScript

- **CSS:** Transición de un archivo monolítico a una estructura compilada vía SASS con `style: compressed`.
- **JavaScript:**
  - **Zero jQuery:** Mantener el enfoque de Vanilla JS detectado en `Baleon`.
  - **Splide.js:** Implementación ligera para sliders/carousels sin dependencias externas.
  - **Medium Zoom:** Integración de `medium-zoom` para una experiencia de visualización de imágenes moderna.

---

## 4. Checklist de Funcionalidades y Estado de Implementación

| Funcionalidad           | Estado Actual   | Implementación Recomendada                 |
| :---------------------- | :-------------- | :----------------------------------------- |
| **No jQuery**           | ✅ Implementado | Mantener Vanilla JS nativo.                |
| **100% Responsive**     | ⚠️ Parcial      | Adoptar CSS Grid/Flexbox modular.          |
| **Slider**              | ❌ Faltante     | Integrar `Splide.js`.                      |
| **Lazy Loading**        | ❌ Faltante     | Usar atributo `loading="lazy"` nativo.     |
| **Copy Code Button**    | ✅ Implementado | Refinar diseño y feedback visual.          |
| **Google Analytics**    | ❌ Faltante     | Include condicional respetando privacidad. |
| **Formulario Contacto** | ❌ Faltante     | Integración vía Formspree.                 |

---

## 5. Snippets y Recomendaciones de Implementación

### A. Slider Accesible (Splide.js)

Uso de la estructura `splide__track` y `splide__list` para asegurar accesibilidad y rendimiento.

### B. SEO Automático

Sustitución de metatags manuales por el tag `{% seo %}` para garantizar cumplimiento de estándares de redes sociales y buscadores.

### C. Optimización de Imágenes

Migración a formatos **WebP** y uso de atributos `width` y `height` para minimizar el _Cumulative Layout Shift (CLS)_.

---

## 6. Métricas de Éxito (Objetivos Lighthouse)

- **Performance:** > 95
- **Accesibilidad:** 100
- **Best Practices:** 100
- **SEO:** 100

---

## 7. Próximos Pasos Prioritarios

1. Reestructurar el directorio `_sass/`.
2. Limpiar `_config.yml` y configurar `jekyll-seo-tag`.
3. Implementar `loading="lazy"` en componentes de imagen.
4. Integrar Splide.js para secciones de proyectos.
