import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../../pages/LoginPage';
import { CrearDocumentoModal } from '../../pages/CrearDocumentoModal';

const { Given, When, Then } = createBdd();

const nuevoDocumento = {
    folio: '9903',
    rut: '77.777.777-7',
    monto: '180000',
    emailCopia: 'cliente@azurian.com',
    observaciones: 'test',
};

Given(
    'que el usuario administrador ha iniciado sesión',
    async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(
            process.env.E2E_USER ?? 'admin@azurian.com',
            process.env.E2E_PASSWORD ?? ''
        );
    }
);

When(
    'abre el formulario de creación de documento',
    async ({ page }) => {
        const modal = new CrearDocumentoModal(page);
        await modal.abrirModal();
    }
);

When(
    'completa los datos del nuevo documento',
    async ({ page }) => {
        const modal = new CrearDocumentoModal(page);
        await modal.completarFormulario(nuevoDocumento);
    }
);

When(
    'guarda y emite el documento',
    async ({ page }) => {
        const modal = new CrearDocumentoModal(page);
        await modal.guardarYEmitir();
    }
);

Then(
    'el documento debe aparecer en la lista con los datos correctos',
    async ({ page }) => {
        const modal = new CrearDocumentoModal(page);

        await modal.validarFilaCreada(
            nuevoDocumento.folio,
            nuevoDocumento.rut,
            '$ 180.000'
        );
    }
);