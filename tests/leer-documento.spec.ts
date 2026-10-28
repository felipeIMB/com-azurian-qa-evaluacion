/*import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test.describe('Portal de Gestión de Documentos - Ver Detalle de Documento', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('admin@azurian.com', 'Azurian2026!');
  });

  test('Debe validar la fila exacta por Folio, RUT y Monto, y abrir su detalle', async ({ page }) => {
    // 1. Datos exactos que debe tener la fila a evaluar
    const folio = '#9700';
    const rut = '77.777.777-7';
    const monto = '$ 2.230.000';

    // 2. Localizar la fila EXACTA asegurando que contenga el Folio, el RUT Y el Monto simultáneamente (Sin usar first() o nth())
    const targetRow = page
      .locator('tr')
      .filter({ hasText: folio })
      .filter({ hasText: rut })
      .filter({ hasText: monto });

    // 3. Confirmar que la fila exacta existe y es visible en la tabla
    await expect(targetRow).toBeVisible();

    // 4. Hacer clic en "Ver detalle" usando el selector de rol sobre la fila filtrada
    await targetRow.getByRole('button', { name: 'Ver detalle' }).click();

    // 5. Validar la apertura del modal
    const modalTitle = page.getByRole('heading', { name: 'Ver detalle' }).or(
      page.getByRole('heading', { name: 'Detalle del documento' })
    );
    await expect(modalTitle).toBeVisible();

    // 6. Validar que el modal contenga la información de ese documento en particular
    const dialog = page.getByRole('dialog');
    await expect(dialog.getByText(folio)).toBeVisible();
    await expect(dialog.getByText(rut)).toBeVisible();

    // 7. Cerrar el modal mediante el botón con rol
    const closeButton = dialog.getByRole('button', { name: 'Cerrar' }).or(
      dialog.getByRole('button', { name: 'Close' })
    );

    if (await closeButton.isVisible()) {
      await closeButton.click();
    } else {
      await page.keyboard.press('Escape');
    }

    // 8. Confirmar cierre del modal con aserción explícita
    await expect(modalTitle).not.toBeVisible();
  });

});*/