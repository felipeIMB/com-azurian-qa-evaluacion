/*import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test.describe('Portal de Gestión de Documentos - Editar Documento', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('admin@azurian.com', 'Azurian2026!');
    });

    test('Debe identificar la fila exacta, abrir el modal de edición, modificar datos y reflejar los cambios en la tabla', async ({ page }) => {
        // 1. Datos iniciales del documento objetivo
        const folio = '#9700';
        const initialRut = '77.777.777-7';
        const initialMontoRegex = /2\.230\.000/;

        // 2. Localizar la fila por los 3 criterios
        const targetRow = page
            .locator('tr')
            .filter({ hasText: folio })
            .filter({ hasText: initialRut })
            .filter({ hasText: initialMontoRegex });

        await expect(targetRow).toBeVisible();

        // 3. Abrir el modal de edición desde la fila identificada
        await targetRow.getByRole('button', { name: /Editar/i }).click();

        // 4. Delimitar el ámbito de búsqueda al diálogo modal activo
        const dialog = page.getByRole('dialog');
        const modalHeading = dialog.getByRole('heading', { name: /Editar documento/i });
        await expect(modalHeading).toBeVisible();

        // 5. Nuevos valores
        const updatedRut = '76.123.456-0';
        const updatedMonto = '2500000';
        const updatedMontoRegex = /2\.500\.000/;

        // 6. Rellenar inputs dentro del modal (evita colisionar con el buscador del dashboard)
        const rutInput = dialog.getByLabel(/RUT receptor/i);
        await rutInput.click();
        await rutInput.press('ControlOrMeta+A');
        await rutInput.fill(updatedRut);

        const montoInput = dialog.getByLabel(/Monto total/i);
        await montoInput.click();
        await montoInput.press('ControlOrMeta+A');
        await montoInput.fill(updatedMonto);

        const obsInput = dialog.getByPlaceholder(/Información adicional para el receptor/i);
        await obsInput.fill('Documento actualizado en prueba automatizada');

        // 7. Guardar cambios presionando el botón dentro del modal
        await dialog.getByRole('button', { name: /Guardar cambios/i }).click();

        // 8. Confirmar que el modal se cierre
        await expect(modalHeading).not.toBeVisible();

        // 9. Validar que la fila exacta actualizada refleje el folio original, nuevo RUT y nuevo Monto
        const updatedRow = page
            .locator('tr')
            .filter({ hasText: folio })
            .filter({ hasText: updatedRut })
            .filter({ hasText: updatedMontoRegex });

        await expect(updatedRow).toBeVisible();
    });
});*/