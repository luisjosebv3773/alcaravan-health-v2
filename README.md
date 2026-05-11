# Alcaraván Health - Project Overview & Technical Context

Este documento sirve como guía técnica y funcional para el desarrollo de **Alcaraván Health**, un ecosistema integral para la gestión de salud laboral en Sistemas Tecnológicos Alcaraván S.A.

---

## 1. Arquitectura del Sistema
La plataforma utiliza una arquitectura desacoplada y moderna, optimizada para escalabilidad y mantenimiento:

- **Frontend**: React 18 (TypeScript) + Vite.
  - *Nota*: Actualmente se utilizan CSS Modules, con el objetivo de migrar a Tailwind CSS para un diseño más ágil.
- **Backend**: NestJS (Node.js framework).
- **Base de Datos**: PostgreSQL.
- **ORM**: TypeORM o Prisma.
- **Autenticación**: JWT (JSON Web Tokens) gestionados por el Backend.
- **IA**: Google Gemini API (análisis multimodal y chatbot).
- **Notificaciones**: Firebase Cloud Messaging (FCM).

---

## 2. Modelado de Datos y Roles (RBAC)
El sistema implementa un Control de Acceso Basado en Roles para garantizar la seguridad de la información médica.

### Roles de Usuario
- **Paciente (Empleado)**: Consulta métricas (IMC, ICC), reserva citas y usa el asistente de IA.
- **Médico**: Gestiona agenda, notas SOAP, recetas y certificados.
- **Nutricionista**: Análisis antropométrico avanzado y monitoreo poblacional.

### Entidades Principales
- `users`: Credenciales, correo, contraseña (hasheada) y rol.
- `profiles`: Datos personales, cargo y fecha de ingreso.
- `appointments`: Gestión de citas (id, doctor_id, patient_id, fecha, modalidad, estatus).
- `medical_records`: Historial clínico centralizado.
- `nutritional_stats`: Mediciones de grasa, músculo, agua e IMC.

---

## 3. Lógica de Negocio y Flujos Técnicos

### 3.1 Autenticación
El flujo migró de un modelo BaaS (Supabase) a un API propio en NestJS. El frontend realiza un `POST /auth/login` y recibe un JWT que debe enviarse en el header `Authorization: Bearer <token>`.

### 3.2 Servicio de IA (Gemini)
El backend actúa como proxy seguro para la API de Gemini:
- **Análisis Multimodal**: Procesamiento de imágenes (comida, postura, piel) enviadas en Base64.
- **Persona de IA**: Asistente médico ético que prioriza la consulta humana.

### 3.3 Tiempo Real y Notificaciones
- **WebSockets**: Sincronización en vivo mediante Socket.io integrado en NestJS.
- **Push**: Notificaciones mediante Firebase Cloud Messaging.

---

## 4. Estándares de Desarrollo

### Frontend
- Uso de **React Query** o Axios para el consumo de API.
- Navegación mediante **HashRouter**.
- Enfoque en componentes modulares y reutilizables.

### Backend (NestJS)
- Patrón **Module-Service-Controller**.
- Uso estricto de **DTOs** para validación.
- **Guards** para protección de rutas por rol.

### Base de Datos
- Integridad referencial mediante Foreign Keys.
- Identificadores **UUID**.
- Auditoría básica (`created_at`, `updated_at`) obligatoria.

---

## 5. Roadmap

1. **Sprint 1**: Configuración de NestJS, PostgreSQL y Autenticación JWT.
2. **Sprint 2**: Migración de citas y perfiles desde el esquema anterior.
3. **Sprint 3**: Integración del módulo de IA (Gemini).
4. **Sprint 4**: Notificaciones push y despliegue final.

---

**Seguridad**: Al tratar con datos médicos, la seguridad es la máxima prioridad. Todas las respuestas de la IA deben ser validadas en el backend antes de mostrarse al usuario.
