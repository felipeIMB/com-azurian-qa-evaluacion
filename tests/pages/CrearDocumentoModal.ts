import { Page, Locator, expect } from '@playwright/test';

export interface NuevoDocumentoData {
    tipoDteIndex?: number;
    folio: string;
    rut: string;
    monto: string;
    emailCopia?: string;
    observaciones?: string;
}

export class CrearDocumentoModal {
    readonly page: Page;
    readonly btnNuevoDocumento: Locator;
    readonly modalHeading: Locator;
    readonly selectTipoDte: Locator;
    readonly inputFolio: Locator;
    readonly inputRut: Locator;
    readonly inputMonto: Locator;
    readonly chkEnviarCopia: Locator;
    readonly inputEmailCopia: Locator;
    readonly inputObservaciones: Locator;
    readonly btnGuardarYEmitir: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnNuevoDocumento = page.getByRole('button', { name: /Nuevo documento/i });
        this.modalHeading = page.getByRole('heading', { name: /Emitir nuevo documento/i });
        this.selectTipoDte = page.getByLabel(/Tipo de documento tributario/i);
        this.inputFolio = page.getByPlaceholder(/Ej\. 1004/i);
        this.inputRut = page.getByPlaceholder(/Ej\. 77\.341\.920-5/i);
        this.inputMonto = page.getByPlaceholder(/Ej\. 250000/i);
        this.chkEnviarCopia = page.getByLabel(/Enviar copia al contacto/i);
        this.inputEmailCopia = page.getByPlaceholder(/contacto@empresa\.cl/i);
        this.inputObservaciones = page.getByPlaceholder(/Información adicional para el receptor/i);
        this.btnGuardarYEmitir = page.getByRole('button', { name: /Guardar y emitir/i });
    }

    async abrirModal(): Promise<void> {
        await this.btnNuevoDocumento.click();
        await expect(this.modalHeading).toBeVisible();
    }

    async completarFormulario(data: NuevoDocumentoData): Promise<void> {
        await this.selectTipoDte.selectOption({ index: data.tipoDteIndex ?? 0 }).catch(async () => {
            await this.page.locator('select').selectOption({ index: data.tipoDteIndex ?? 0 });
        });

        await this.inputFolio.fill(data.folio);
        await this.inputRut.fill(data.rut);
        await this.inputMonto.fill(data.monto);

        if (data.emailCopia && (await this.chkEnviarCopia.isVisible())) {
            await this.chkEnviarCopia.check();
            await this.inputEmailCopia.fill(data.emailCopia);
        }

        if (data.observaciones) {
            await this.inputObservaciones.fill(data.observaciones);
        }
    }

    async guardarYEmitir(): Promise<void> {
        await this.btnGuardarYEmitir.click();
        await expect(this.modalHeading).not.toBeVisible();
    }

    async validarFilaCreada(folio: string, rut: string, montoFormateado: string): Promise<void> {
        const filaExacta = this.page
            .locator('tr')
            .filter({ hasText: folio })
            .filter({ hasText: rut })
            .filter({ hasText: montoFormateado });

        await expect(filaExacta).toBeVisible();
    }
}