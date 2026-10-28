
import { createBdd } from 'playwright-bdd';
import { EditarDocumentoPage } from '../../pages/EditarDocumentoPage';

const { When, Then } = createBdd();

let editarDocumentoPage: EditarDocumentoPage;

When(
    'identifica el documento con folio {string}, RUT {string} y monto {string}',
    async ({ page }, folio: string, rut: string, monto: string) => {
        editarDocumentoPage = new EditarDocumentoPage(page);
        await editarDocumentoPage.identificarDocumento(folio, rut, monto);
    }
);

When('abre el modal de edición del documento', async () => {
    await editarDocumentoPage.abrirModalEdicion();
});

When('modifica el RUT, el monto y las observaciones', async () => {
    await editarDocumentoPage.modificarDocumento();
});

When('guarda los cambios del documento', async () => {
    await editarDocumentoPage.guardarCambios();
});

Then(
    'el documento debe reflejar los datos actualizados en la tabla',
    async () => {
        await editarDocumentoPage.validarDocumentoActualizado();
    }
);
