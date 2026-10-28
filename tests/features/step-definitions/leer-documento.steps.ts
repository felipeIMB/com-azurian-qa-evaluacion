import { createBdd } from 'playwright-bdd';
import { LeerDocumentoPage } from '../../pages/LeerDocumentoPage';

const { When, Then } = createBdd();

let leerDocumentoPage: LeerDocumentoPage;

When(
    'identifica el documento para consultar con folio {string}, RUT {string} y monto {string}',
    async ({ page }, folio: string, rut: string, monto: string) => {
        leerDocumentoPage = new LeerDocumentoPage(page);

        await leerDocumentoPage.identificarDocumento(folio, rut, monto);
    }
);

When('abre el detalle del documento', async () => {
    await leerDocumentoPage.abrirDetalle();
});

Then('el detalle debe mostrar el folio y el RUT del documento', async () => {
    await leerDocumentoPage.validarDetalle();
});

Then('cierra el detalle del documento', async () => {
    await leerDocumentoPage.cerrarDetalle();
});