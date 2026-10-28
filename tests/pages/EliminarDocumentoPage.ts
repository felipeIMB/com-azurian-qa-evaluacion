import { Page, Locator, expect } from '@playwright/test';

export class EliminarDocumentoPage {
    readonly page: Page;
    readonly tabla: Locator;
    targetRow: Locator | null = null;
    readonly modalTitle: Locator;
    readonly btnConfirmarEliminacion: Locator;

    constructor(page: Page) {
        this.page = page;
        this.tabla = page.locator('table, [role="grid"]');

        this.modalTitle = page.getByRole('heading', {
            name: /Eliminar documento/i,
        });

        this.btnConfirmarEliminacion = page.getByRole('button', {
            name: /Eliminar documento/i,
        });
    }

    async identificarDocumento(
        folio: string,
        rut: string,
        monto: string
    ): Promise<void> {
        this.targetRow = this.page
            .locator('tr')
            .filter({ hasText: folio })
            .filter({ hasText: rut })
            .filter({ hasText: monto });

        await expect(this.targetRow).toBeVisible();
    }

    async abrirModalEliminacion(): Promise<void> {
        if (!this.targetRow) {
            throw new Error('Primero debes identificar el documento.');
        }

        await this.targetRow
            .getByRole('button', { name: /Eliminar/i })
            .click();

        await expect(this.modalTitle).toBeVisible();
    }

    async confirmarEliminacion(): Promise<void> {
        await this.btnConfirmarEliminacion.click();
        await expect(this.modalTitle).not.toBeVisible();
    }

    async validarDocumentoEliminado(folio: string): Promise<void> {
        await expect(this.tabla.getByText(folio, { exact: true }))
            .not.toBeVisible();
    }
}