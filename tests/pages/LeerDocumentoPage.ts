import { Page, Locator, expect } from '@playwright/test';

export class LeerDocumentoPage {
    readonly page: Page;
    readonly modalTitle: Locator;
    readonly dialog: Locator;
    readonly closeButton: Locator;

    targetRow: Locator | null = null;
    folioDocumento = '';
    rutDocumento = '';

    constructor(page: Page) {
        this.page = page;
        this.modalTitle = page.locator('#detail-modal-title');
        this.dialog = this.modalTitle.locator('xpath=..');
        this.closeButton = this.dialog.getByRole('button', {
            name: 'Cerrar',
            exact: true
        });
    }

    async identificarDocumento(
        folio: string,
        rut: string,
        monto: string
    ): Promise<void> {
        this.folioDocumento = folio;
        this.rutDocumento = rut;

        this.targetRow = this.page
            .locator('tr')
            .filter({ hasText: folio })
            .filter({ hasText: rut })
            .filter({ hasText: monto });

        await expect(this.targetRow).toBeVisible();
    }


    async abrirDetalle(): Promise<void> {
        if (!this.targetRow) {
            throw new Error('Primero debes identificar el documento.');
        }

        await this.targetRow
            .getByRole('button', { name: /Ver detalle de folio 9700/i })
            .click();

        await expect(this.modalTitle).toBeVisible();
    }

    async validarDetalle(): Promise<void> {
        await expect(this.modalTitle).toBeVisible();

        await expect(this.modalTitle).toContainText(this.folioDocumento);

        await expect(
            this.page.locator('#detail-modal-title')
                .locator('xpath=following-sibling::div')
                .filter({ hasText: 'RUT Receptor:' })
                .getByText(this.rutDocumento, { exact: false })
        ).toBeVisible();
    }

    async cerrarDetalle(): Promise<void> {
        if (await this.closeButton.isVisible()) {
            await this.closeButton.click();
        } else {
            await this.page.keyboard.press('Escape');
        }

        await expect(this.modalTitle).not.toBeVisible();
    }
}