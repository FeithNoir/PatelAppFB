# Pastelería "El Dulce Sabor" - Plan de desarrollo

## Resumen

"Pastelería 'El Dulce Sabor'" es una aplicación web para una pastelería. Permite a los usuarios buscar pasteles, ver detalles, añadirlos a la cesta de la compra y realizar el pago. También incluye autenticación de usuarios para gestionar perfiles y asegurar el proceso de pago.

## Características implementadas

* **Arquitectura basada en componentes:**
    * Componentes independientes para elementos de la interfaz de usuario como cabecera, pie de página, tarjetas de pasteles, etc.
    * Detección de cambios OnPush para el rendimiento.
* **Enrutamiento:**
    * `app.routes.ts` define las rutas para inicio, cesta, inicio de sesión, perfil y pago.
    * **Se ha implementado la carga perezosa (Lazy Loading) para todas las rutas, mejorando el rendimiento inicial de la aplicación.**
* **Gestión de estado:**
    * Utiliza señales de Angular para el estado de los componentes locales.
    * `AuthService` y `CartService` para la gestión del estado global.
* **Autenticación:**
    * Componente de inicio de sesión para la autenticación de usuarios.
    * `AuthService` para gestionar el estado de autenticación (señal `isAuthenticated`).
    * `authGuard` para proteger rutas (`/profile`, `/checkout`).
    * Cabecera dinámica que muestra "Iniciar sesión" o "Perfil/Cerrar sesión" según el estado de autenticación.
* **Estilo:**
    * Diseño moderno y limpio con una paleta de colores y tipografía personalizadas.
    * Diseño adaptable para móviles y ordenadores de sobremesa.
    * Utiliza CSS nativo con enlaces `[class]` y `[style]`.
* **Proceso de compilación:**
    * Se compila correctamente con `ng build`.

## Cambio actual (Fase 2): Autenticación y enrutamiento con Carga Perezosa

* **Objetivo:** Implementar la autenticación de usuarios y crear una estructura de página básica con enrutamiento optimizado mediante carga perezosa.
* **Pasos:**
    1.  **Crear servicio de autenticación (`AuthService`):**
        * Gestiona el estado de autenticación del usuario (p. ej., señal `isAuthenticated`).
        * Proporciona los métodos `login()` y `logout()`.
        * Utiliza un usuario simulado por simplicidad.
    2.  **Crear `auth.guard.ts`:**
        * Protege las rutas que requieren autenticación.
        * Redirige a los usuarios no autenticados a la página de inicio de sesión.
    3.  **Crear componentes de página:**
        * `HomeComponent`: La página de destino principal.
        * `CartComponent`: Muestra la cesta de la compra.
        * `CheckoutComponent`: La página de pago (protegida).
        * `LoginComponent`: La página de inicio de sesión del usuario.
        * `ProfileComponent`: La página de perfil del usuario (protegida).
    4.  **Actualizar `app.routes.ts` con Carga Perezosa:**
        * Se modificaron las rutas para usar `loadComponent` en lugar de `component`.
        * Esto permite que cada componente de la página se cargue solo cuando se navega a su ruta, mejorando el rendimiento.
        * Se aplicó el `authGuard` a las rutas `profile` y `checkout`.
    5.  **Actualizar componente de cabecera:**
        * Inyectar `AuthService`.
        * Mostrar dinámicamente los enlaces "Iniciar sesión" o "Perfil/Cerrar sesión" según la señal `isAuthenticated`.
        * Implementar la funcionalidad `logout()`.
    6.  **Actualizar navegación móvil:**
        * Añadir los mismos enlaces de autenticación dinámica que la cabecera principal.
    7.  **Verificar y compilar:**
        * Ejecutar `ng build` para asegurar que no haya errores de compilación.
        * Corregir el error `noMatchError` implementando la carga perezosa.
