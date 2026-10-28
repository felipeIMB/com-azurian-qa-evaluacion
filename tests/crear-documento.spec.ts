/*import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { CrearDocumentoModal } from './pages/CrearDocumentoModal';

test.describe('Portal de Gestión de Documentos - Creación de Documento', () => {
  let loginPage: LoginPage;
  let crearDocumentoModal: CrearDocumentoModal;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    crearDocumentoModal = new CrearDocumentoModal(page);

    await loginPage.goto();
    await loginPage.login('admin@azurian.com', 'Azurian2026!');
  });

  test('Debe abrir el modal y emitir un nuevo documento correctamente', async () => {
    const nuevoDocumento = {
      folio: '9903',
      rut: '77.777.777-7',
      monto: '180000',
      emailCopia: 'cliente@azurian.com',
      observaciones: 'Prueba de creación directa',
    };
    const montoFormateadoEsperado = '$ 180.000';

    await crearDocumentoModal.abrirModal();
    await crearDocumentoModal.completarFormulario(nuevoDocumento);
    await crearDocumentoModal.guardarYEmitir();
    await crearDocumentoModal.validarFilaCreada(
      nuevoDocumento.folio,
      nuevoDocumento.rut,
      montoFormateadoEsperado
    );
  });
});*/