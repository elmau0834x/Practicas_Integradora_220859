# 🏛️ Práctica 02: Boceto de Arquitectura de Proyecto Integrador

<p align="center">
  <!-- Tecnologías del Modelo Arquitectónico -->
  <img src="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=flutter&logoColor=white" alt="Flutter" />
  <img src="https://img.shields.io/badge/Keycloak-CA5924?style=for-the-badge&logo=keycloak&logoColor=white" alt="Keycloak" />
  <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169e1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Docker-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  <br><br>
  <!-- Herramientas de Ejecución de la Práctica -->
  <img src="https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/OpenAI_Codex-%23412991.svg?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI Codex" />
</p>

---

## 🚀 Despliegue en Vivo

El resultado de esta práctica es un modelo arquitectónico interactivo renderizado en HTML. Puedes consultarlo directamente desde el navegador:

👉 **[Ver Diagrama Interactivo en GitHub Pages](https://elmau0834x.github.io/Practicas_Integradora_220859/Practica02/arquitectura_app_flutter.html)**

---

## 📋 Objetivo de la Práctica

Realizar la instalación, configuración y ejecución del agente de modelado arquitectónico **Achify (Archify)**, interactuando con la inteligencia artificial de **Codex CLI**. El propósito es generar un primer boceto interactivo de la arquitectura del Proyecto Integrador mediante ingeniería de prompts.

## 🏗️ Stack Tecnológico Modelado

El diagrama ilustra el flujo de datos y los límites de confianza (Trust Boundaries) de un sistema compuesto por:

*   **Cliente Móvil:** Aplicación desarrollada en Flutter.
*   **Capa de Autenticación:** Gestión de identidad y accesos con Keycloak.
*   **Capa API:** Backend RESTful de alto rendimiento construido con FastAPI.
*   **Capa de Datos (Híbrida):** 
    *   PostgreSQL para datos relacionales.
    *   MongoDB para persistencia NoSQL.
*   **Servicios Externos:** Integración con Leaflet / Maps Service para geolocalización.
*   **Infraestructura de Desarrollo:** Contenedorización orquestada con Docker y Docker Compose.

## 🛠️ Herramientas Utilizadas para la Generación

Para la creación de este modelo se utilizó el siguiente entorno de línea de comandos:

1.  **Node.js & NPM:** Gestor de paquetes base.
2.  **@openai/codex:** CLI para la interacción con los agentes de IA.
3.  **Archify (Skill):** Módulo de modelado y diagramación arquitectónica.

```bash
# Comando principal de ejecución utilizado
npx -y skills add tt-a1i/archify --skill archify --agent codex --global --copy --yes