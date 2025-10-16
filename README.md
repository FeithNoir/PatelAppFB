
# PastelApp - Pastelería "El Dulce Sabor"

![PastelApp Banner](https://via.placeholder.com/1200x300.png?text=Pastelería+"El+Dulce+Sabor")

## 🍰 Descripción

"PastelApp" es una aplicación web moderna para la pastelería "El Dulce Sabor". Permite a los clientes explorar el inventario de pasteles, gestionar recetas, y eventualmente, realizar pedidos. Esta aplicación está siendo construida con las últimas características de Angular, enfocándose en un rendimiento óptimo y una experiencia de usuario de primera clase.

## ✨ Características Principales

| Característica | Descripción | Estado |
| :--- | :--- | :--- |
| **Arquitectura Moderna** | Construido 100% con componentes `standalone` de Angular. | ✅ Implementado |
| **Rendimiento Optimizado** | Uso de `ChangeDetectionStrategy.OnPush` en todos los componentes. | ✅ Implementado |
| **Carga Perezosa (Lazy Loading)** | Las rutas de las funcionalidades se cargan bajo demanda para un inicio más rápido. | ✅ Implementado |
| **Gestión de Estado Reactiva** | Utiliza `Signals` de Angular para una gestión de estado eficiente y predecible. | ✅ Implementado |
| **Autenticación** | Sistema de autenticación simulado con `AuthService` y protección de rutas. | ✅ Implementado |
| **Diseño Adaptable** | Interfaz de usuario que se adapta a dispositivos móviles y de escritorio. | ✅ Implementado |
| **Estilo Global** | Paleta de colores y tipografía personalizadas a través de variables CSS para un diseño consistente. | ✅ Implementado |

## 🛠️ Tech Stack

- **Framework**: Angular v18+
- **Lenguaje**: TypeScript
- **Estilo**: CSS Nativo (con variables CSS)
- **Gestión de Estado**: Angular Signals
- **Enrutamiento**: Angular Router (con carga perezosa)
- **Compilador**: Angular CLI

## 🚀 Empezando

### Prerrequisitos

Asegúrate de tener Node.js y Angular CLI instalados en tu máquina.

```bash
npm install -g @angular/cli
```

### Instalación

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/pastelapp.git
    ```
2.  Navega al directorio del proyecto:
    ```bash
    cd pastelapp
    ```
3.  Instala las dependencias:
    ```bash
    npm install
    ```

### Compilación

Para compilar el proyecto y verificar que todo esté correcto, ejecuta:

```bash
ng build
```

### Servidor de Desarrollo

Para iniciar el servidor de desarrollo y ver la aplicación en tu navegador, ejecuta:

```bash
ng serve
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los ficheros fuente.
