# 📋 Cómo personalizar tu Portfolio

## 1️⃣ CAMBIAR TEXTO

Edita el archivo: `src/app/App.tsx`

### Tu información (líneas 8-11):
```javascript
name: "Tu Nombre Completo",
title: "Product Manager",
tagline: "Tu frase profesional aquí",
about: "Tu descripción profesional aquí...",
```

### Tus proyectos (líneas 14-42):
```javascript
{
  id: 1,
  title: "Nombre de tu proyecto",
  description: "Explica el problema, tu solución y el impacto",
  tags: ["Tecnología", "Categoría", "Tipo"],
  metrics: ["Resultado 1", "Resultado 2"],
  link: "https://link-a-tu-proyecto.com"
}
```

### Tus skills (líneas 45-50):
```javascript
skills: {
  "Product Strategy": ["Skill 1", "Skill 2", "Skill 3"],
  "Execution": ["Skill 1", "Skill 2"],
  // ... agrega más categorías
}
```

### Tu contacto (líneas 52-56):
```javascript
contact: {
  email: "tu.email@ejemplo.com",
  linkedin: "https://linkedin.com/in/tu-perfil",
  github: "https://github.com/tu-usuario" // Opcional
}
```

---

## 2️⃣ AGREGAR IMÁGENES

### OPCIÓN A: Usar URLs online (rápido y fácil)

1. Sube tus imágenes a:
   - Imgur (https://imgur.com)
   - Google Drive (haz la imagen pública)
   - Tu sitio web

2. En `App.tsx`, reemplaza:
```javascript
image: null,
```

Por:
```javascript
image: "https://i.imgur.com/tu-imagen.jpg",
```

### OPCIÓN B: Usar imágenes locales (recomendado)

1. **Copia tus imágenes** a la carpeta: `src/assets/projects/`
   - Ejemplo: `project-1.jpg`, `project-2.jpg`, `project-3.jpg`

2. **Importa las imágenes** al inicio de `App.tsx`:
```javascript
import project1 from '../assets/projects/project-1.jpg';
import project2 from '../assets/projects/project-2.jpg';
import project3 from '../assets/projects/project-3.jpg';
```

3. **Usa las imágenes** en tus proyectos:
```javascript
{
  id: 1,
  title: "Mi Proyecto",
  image: project1,  // ← Usa la imagen importada
  // ...
}
```

---

## 📝 EJEMPLO COMPLETO

```javascript
// Al inicio del archivo, después de los imports de lucide-react:
import project1 from '../assets/projects/ecommerce-app.jpg';
import project2 from '../assets/projects/saas-dashboard.jpg';

export default function App() {
  const portfolio = {
    name: "Ana Martínez",
    title: "Senior Product Manager",
    tagline: "Transformando ideas en productos que los usuarios aman",
    about: "Product Manager con 6 años de experiencia liderando equipos...",

    projects: [
      {
        id: 1,
        title: "E-commerce Mobile App",
        description: "Lideré el desarrollo de una app móvil que aumentó las conversiones en 45%...",
        image: project1,  // ← Imagen local
        tags: ["Mobile", "E-commerce", "UX"],
        metrics: ["45% aumento en conversiones", "500K descargas"],
        link: "https://miportfolio.com/proyecto1"
      },
      {
        id: 2,
        title: "SaaS Dashboard",
        description: "Rediseño completo de dashboard para mejorar retención...",
        image: "https://i.imgur.com/ejemplo.jpg",  // ← Imagen online
        tags: ["SaaS", "B2B", "Analytics"],
        metrics: ["35% reducción en churn", "4.7★ rating"],
        link: "https://miportfolio.com/proyecto2"
      }
    ],

    skills: {
      "Product Strategy": ["Product Vision", "Roadmapping", "Market Research"],
      "Technical": ["SQL", "Python", "APIs", "Jira"],
      "Design": ["Figma", "User Testing", "Wireframing"]
    },

    contact: {
      email: "ana.martinez@ejemplo.com",
      linkedin: "https://linkedin.com/in/anamartinez",
      github: null  // Si no tienes GitHub, déjalo así
    }
  };

  return (
    // ... resto del código
  );
}
```

---

## ✅ CHECKLIST

- [ ] Cambié mi nombre, título y tagline
- [ ] Actualicé la sección "About"
- [ ] Agregué mis 3 proyectos con descripciones reales
- [ ] Subí/agregué las imágenes de mis proyectos
- [ ] Actualicé mis skills y categorías
- [ ] Puse mi email y LinkedIn real
- [ ] Cambié los links de los proyectos

---

## 🎨 TIPS

- **Imágenes**: Usa fotos de 1200x900px (ratio 4:3) para mejor calidad
- **Descripciones**: Enfócate en el IMPACTO y los RESULTADOS
- **Métricas**: Usa números específicos (%, $, usuarios, etc.)
- **Tags**: Máximo 3-4 tags por proyecto
- **Links**: Si no tienes link, pon "#" o quita la propiedad link

---

## ❓ ¿Necesitas ayuda?

Si tienes dudas, dime qué necesitas cambiar y te ayudo específicamente.
