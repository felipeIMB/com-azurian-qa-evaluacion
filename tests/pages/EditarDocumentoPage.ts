import { Page, Locator, expect } from '@playwright/test';

export class EditarDocumentoPage {
    readonly page: Page;
    readonly dialog: Locator;
    readonly modalHeading: Locator;
    readonly rutInput: Locator;
    readonly montoInput: Locator;
    readonly obsInput: Locator;
    readonly btnGuardarCambios: Locator;
    targetRow: Locator | null = null;

    constructor(page: Page) {
        this.page = page;

        this.dialog = page.getByRole('dialog');

        this.modalHeading = this.dialog.getByRole('heading', {
            name: /Editar documento/i,
        });

        this.rutInput = this.dialog.getByLabel(/RUT receptor/i);
        this.montoInput = this.dialog.getByLabel(/Monto total/i);

        this.obsInput = this.dialog.getByPlaceholder(
            /Información adicional para el receptor/i
        );

        this.btnGuardarCambios = this.dialog.getByRole('button', {
            name: /Guardar cambios/i,
        });
    }



    async identificarDocumento(
        folio: string,
        rut: string,
        monto: string
    ): Promise<void> {
        const montoRegex = new RegExp(monto.replace(/\./g, '\\.'));

        this.targetRow = this.page
            .locator('tr')
            .filter({ hasText: folio })
            .filter({ hasText: rut })
            .filter({ hasText: montoRegex });

        await expect(this.targetRow).toBeVisible();
    }

    async abrirModalEdicion(): Promise<void> {
        if (!this.targetRow) {
            throw new Error('Primero debes identificar el documento.');
        }

        await this.targetRow.getByRole('button', { name: /Editar/i }).click();
        await expect(this.modalHeading).toBeVisible();
    }


    async modificarDocumento(): Promise<void> {
        await this.rutInput.fill('76.123.456-0');
        await this.montoInput.fill('2500000');

        await this.obsInput.fill(
            'Documento actualizado en prueba automatizada'
        );
    }

    async guardarCambios(): Promise<void> {
        await this.btnGuardarCambios.click();
        await expect(this.modalHeading).not.toBeVisible();
    }

    async validarDocumentoActualizado(): Promise<void> {
        const updatedRow = this.page
            .locator('tr')
            .filter({ hasText: '#9700' })
            .filter({ hasText: '76.123.456-0' })
            .filter({ hasText: /2\.500\.000/ });

        await expect(updatedRow).toBeVisible();
    }
}