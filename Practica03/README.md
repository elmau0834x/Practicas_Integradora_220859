# 📊 Práctica 03: Business Model Canvas de PokéMMO con Archify

<p align="center">
  <img src="https://img.shields.io/badge/OpenAI_Codex-%23412991.svg?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI Codex" />
  <img src="https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/Java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
  <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" alt="Android" />
  <img src="https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white" alt="iOS" />
</p>

---

## 🚀 Despliegue del Modelo

👉 **[Ver Business Model Canvas Interactivo en GitHub Pages](https://elmau0834x.github.io/Practicas_Integradora_220859/Practica03/pokemmo_business_model_canvas.html)**

---

## 📋 Objetivo de la Práctica
Utilizar la herramienta de modelado arquitectónico **Archify** a través de **Codex CLI** para generar un modelo de negocio Canvas de una aplicación multiplataforma de uso cotidiano. Se aplicó ingeniería de prompts iterativa para refinar el resultado de un modelo genérico a uno altamente detallado.

## 🕹️ Aplicación Seleccionada: PokéMMO
Se eligió **PokéMMO**, un título multiplataforma (PC, Android, iOS, Mac, Linux) con un modelo de negocio destacable que evita mecánicas *Pay-to-Win* y sostiene una economía impulsada enteramente por los jugadores.

---

## 🛠️ Evolución e Ingeniería de Prompts

Para cumplir con los requisitos de la práctica, se realizó un proceso iterativo de mejora del prompt, solucionando problemas de visualización y profundidad analítica:

### Iteración 1: Generación Base (Modelo Inicial)
Se solicitó a la IA la creación del modelo estándar. Aunque Archify respetó la estructura visual del Canvas, el panel emergente interactivo ("Semantic Passport") carecía de profundidad, mostrando únicamente texto plano y repetitivo.

**Prompt utilizado (Fragmento):**
> "Usa Archify para crear un Business Model Canvas inicial para PokéMMO. REQUISITOS CRÍTICOS: Estructura visual tradicional... Inserta una breve descripción descriptiva EXACTAMENTE dentro del atributo 'description'."

![Ejecución V1 Codex](./src/img/Basic_Promnt..png)
*(Captura de la instrucción base en la terminal de Codex)*

![Modelo Canvas V1](./src/img/Basic_Promnt_BMC.png)
*(Vista general del diagrama HTML generado)*

![Detalle Panel V1](./src/img/Basic_Promnt_BMC_3.png)
*(El panel emergente muestra un diseño básico sin viñetas ni profundidad analítica)*


### Iteración 2: Refinamiento del Modelo (Inyección de Datos)
Para solucionar la falta de profundidad, se aplicó ingeniería de prompts estructurando la información con **listas de viñetas (bullets)** directamente en el prompt. Se inyectó contexto específico sobre la economía in-game (Global Trade Link), el enfoque competitivo (EVs/IVs) y la monetización cosmética estricta.

**Prompt refinado (Fragmento):**
> "Usa Archify para crear un Business Model Canvas altamente detallado... DEBES inyectar una lista con viñetas en el atributo de descripción de cada nodo. ESTRICTAMENTE PROHIBIDO: No generes texto suelto en la parte inferior... Toda la información vive en los paneles interactivos."

![Ejecución V2 Codex](./src/img/Avanced_Promnt.png)
*(Captura del prompt avanzado con inyección de listas estructuradas)*

![Modelo Canvas V2](./src/img/Avanced_Promnt_BMC.png)
*(Vista general del diagrama HTML refinado)*

![Detalle Panel V2](./src/img/Avanced_Promnt_BMC_2.png)
*(El "Semantic Passport" ahora muestra un análisis profundo estructurado correctamente con viñetas)*

---
**Autor:** Mauricio Rosales Gabriel (Matrícula: `220859`)  
**Universidad:** Universidad Tecnológica de Xicotepec de Juárez (UTXJ).