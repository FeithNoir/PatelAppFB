# Pastelería "El Dulce Sabor" - Plan de desarrollo

## Resumen

"Pastelería 'El Dulce Sabor'" es una aplicación web para una pastelería. Permite a los usuarios buscar pasteles, ver detalles, añadirlos a la cesta de la compra y realizar el pago. También incluye autenticación de usuarios para gestionar perfiles y asegurar el proceso de pago.

## Características implementadas

*   **Arquitectura basada en componentes:**
    *   Componentes independientes para elementos de la interfaz de usuario como cabecera, pie de página, tarjetas de pasteles, etc.
    *   Detección de cambios `OnPush` para el rendimiento.
*   **Enrutamiento:**
    *   `app.routes.ts` define las rutas para inicio, inventario, recetas, carrito, perfil y pago.
    *   **Se ha implementado la carga perezosa (Lazy Loading) para todas las rutas, mejorando el rendimiento inicial de la aplicación.**
*   **Gestión de estado:**
    *   Utiliza señales de Angular para el estado de los componentes locales.
    *   `AuthService` para la gestión del estado de autenticación, con una señal `currentUser` que contiene los datos del usuario o `null`.
*   **Autenticación:**
    *   `AuthService` gestiona el estado de autenticación.
    *   Cabecera dinámica que muestra "Login" o "Perfil/Cerrar sesión" según el estado de `currentUser`.
*   **Estilo:**
    *   Fichero `styles.css` global con una paleta de colores y tipografía personalizada usando variables CSS.
    *   Diseño moderno y limpio aplicado a los componentes principales.
    *   Diseño adaptable para móviles y ordenadores de sobremesa.
    *   Utiliza CSS nativo con enlaces `[class]` y `[style]`.
*   **Proceso de compilación:**
    *   Se compila correctamente con `ng build`.

## Cambio actual (Fase 3): Refinamiento visual y autenticación en la cabecera

*   **Objetivo:** Definir una paleta de colores y tipografía global, y conectar el estado de autenticación a la cabecera para mostrar los enlaces de Login/Perfil/Logout.
*   **Pasos:**
    1.  **Definir estilos globales (`styles.css`):**
        *   Crear variables CSS para la paleta de colores (`--primary-color`, `--accent-color`, etc.).
        *   Definir fuentes primarias y secundarias (`--font-primary`, `--font-secondary`).
        *   Establecer estilos base para `body`, enlaces, etc.
    2.  **Crear `AuthService`:**
        *   Definir una interfaz `User`.
        *   Crear una señal `currentUser` para almacenar el usuario (o `null`).
        *   Implementar los métodos `login()` y `logout()` (simulados).
    3.  **Integrar `AuthService` en `AppComponent`:**
        *   Inyectar `AuthService`.
        *   Exponer la señal `currentUser` y los métodos `login`/`logout` a la plantilla.
    4.  **Actualizar `HeaderComponent`:**
        *   Usar `input()` para recibir el `currentUser`.
        *   Usar `output()` para emitir eventos `login` y `logout`.
        *   Modificar la plantilla `header.html` para mostrar condicionalmente los enlaces de autenticación usando `@if`.
    5.  **Actualizar `app.html`:**
        *   Pasar la señal `currentUser` al `app-header`.
        *   Vincular los eventos `(login)` y `(logout)` a los métodos del `AppComponent`.
    6.  **Aplicar estilos globales:**
        *   Actualizar los ficheros CSS de `inventory`, `inventory-form`, `app`, y `header` para usar las nuevas variables CSS.
    7.  **Verificar y compilar:**
        *   Ejecutar `ng build` para asegurar que no haya errores de compilación.
