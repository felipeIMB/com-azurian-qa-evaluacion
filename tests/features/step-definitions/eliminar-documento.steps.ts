import { createBdd } from 'playwright-bdd';
import { EliminarDocumentoPage } from '../../pages/EliminarDocumentoPage';

const { When, Then } = createBdd();

let eliminarDocumentoPage: EliminarDocumentoPage;
let folioDocumento: string;

When(
    'identifica el documento que se desea eliminar con folio {string}, RUT {string} y monto {string}',
    async ({ page }, folio: string, rut: string, monto: string) => {
        eliminarDocumentoPage = new EliminarDocumentoPage(page);
        folioDocumento = folio;

        await eliminarDocumentoPage.identificarDocumento(folio, rut, monto);
    }
);

When('abre el modal de eliminación del documento', async () => {
    await eliminarDocumentoPage.abrirModalEliminacion();
});

When('confirma la eliminación del documento', async () => {
    await eliminarDocumentoPage.confirmarEliminacion();
});

Then('el documento eliminado no debe aparecer en la tabla', async () => {
    await eliminarDocumentoPage.validarDocumentoEliminado(folioDocumento);
});