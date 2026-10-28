# QA Automation — Azurian

Proyecto de automatización QA con **Playwright, TypeScript, playwright-bdd, Gherkin y Allure**.

## 1. Instalación y configuración

Instalar dependencias y navegadores:

```bash
npm install
npx playwright install
```

Configurar variables de entorno en Git Bash:

```bash
export BASE_URL="http://localhost:3000"
export E2E_USER="admin@azurian.com"
export E2E_PASSWORD="TU_CONTRASEÑA"
```

Asegurarse de que la aplicación esté levantada antes de ejecutar las pruebas.

## 2. Ejecutar pruebas

Ejecutar toda la suite:

```bash
npm test
```

Ejecutar pruebas BDD de API o interfaz:

```bash
npm run bdd:api
npm run bdd:ui
```

Ejecutar por operación:

```bash
npm run bdd:crear
npm run bdd:editar
npm run bdd:eliminar
npm run bdd:leer
npm run bdd:crear-api
```

Ejecutar un escenario específico por tag:

```bash
npx bddgen
npx playwright test --project=bdd-chromium --grep @crear-documento-api
```

Ejecutar el API Test directo:

```bash
npx playwright test tests/ApiTests/crear-documento.api.spec.ts --project=chromium
```

## 3. Reportes Allure

Ejecutar las pruebas y generar el reporte:

```bash
npm test
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

Para reiniciar los resultados anteriores en Git Bash:

```bash
rm -rf allure-results allure-report
```

Se requiere tener instalado `allure-playwright` y Allure Commandline.

## 4. Scripts de npm

Agregar estos scripts a la sección `scripts` del `package.json`, conservando los existentes:

```json
{
  "test": "bddgen && playwright test",
  "bdd:api": "bddgen && playwright test --project=bdd-chromium --grep @api",
  "bdd:ui": "bddgen && playwright test --project=bdd-chromium --grep @ui",
  "bdd:crear": "bddgen && playwright test --project=bdd-chromium --grep @crear-documento",
  "bdd:editar": "bddgen && playwright test --project=bdd-chromium --grep @editar-documento",
  "bdd:eliminar": "bddgen && playwright test --project=bdd-chromium --grep @eliminar-documento",
  "bdd:leer": "bddgen && playwright test --project=bdd-chromium --grep @leer-documento",
  "bdd:crear-api": "bddgen && playwright test --project=bdd-chromium --grep @crear-documento-api",
  "api:crear": "playwright test tests/ApiTests/crear-documento.api.spec.ts --project=chromium",
  "allure:generate": "allure generate allure-results --clean -o allure-report",
  "allure:open": "allure open allure-report"
}
```