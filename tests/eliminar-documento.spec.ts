/*import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test.describe('Portal de Gestión de Documentos - Eliminar Documento', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('admin@azurian.com', 'Azurian2026!');
  });

  test('Debe validar la fila exacta por Folio, RUT y Monto, abrir el modal y eliminar el documento', async ({ page }) => {
    // 1. Datos del documento objetivo
    const folio = '#9700';
    const rut = '77.777.777-7';
    const monto = '$ 2.230.000';

    // 2. Localizar la fila EXACTA asegurando coincidencia en Folio, RUT y Monto
    const targetRow = page
      .locator('tr')
      .filter({ hasText: folio })
      .filter({ hasText: rut })
      .filter({ hasText: monto });

    // 3. Confirmar que la fila existe y es visible
    await expect(targetRow).toBeVisible();

    // 4. Hacer clic en el botón "Eliminar" dentro de la fila filtrada
    await targetRow.getByRole('button', { name: /Eliminar/i }).click();

    // 5. Validar que el título del modal sea visible directamente por su rol de encabezado
    const modalTitle = page.getByRole('heading', { name: /Eliminar documento/i });
    await expect(modalTitle).toBeVisible();

    // 6. Hacer clic en el botón de confirmación "Eliminar documento" (el botón rojo de confirmación)
    await page.getByRole('button', { name: /Eliminar documento/i }).click();

    // 7. Confirmar que el modal se haya cerrado
    await expect(modalTitle).not.toBeVisible();

    // 8. Verificar que el documento con ese folio ya no exista en la tabla
    await expect(page.locator('table, [role="grid"]').getByText(folio)).not.toBeVisible();
  });

});*/