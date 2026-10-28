import { test, expect } from '@playwright/test';
import { randomInt } from 'node:crypto';

test('Crear un documento mediante API', async ({ request }) => {
    // 1. Iniciar sesión
    const loginResponse = await request.post('/api/auth/login', {
        data: {
            email: process.env.E2E_USER ?? 'admin@azurian.com',
            password: process.env.E2E_PASSWORD ?? 'Azurian2026!',
        },
    });

    expect(loginResponse.status()).toBe(200);

    const loginBody = await loginResponse.json();
    const token = loginBody.token;

    // Generar un folio aleatorio entre 1 y 9.999.999
    const folio = randomInt(1, 10_000_000);

    // 2. Crear el documento
    const response = await request.post('/api/documents', {
        headers: {
            Authorization: `Bearer ${token}`,
            'x-lab-run-id': 'qa-api-test-crear-documento',
        },
        data: {
            tipoDte: 'DTE 33',
            folio,
            rutReceptor: '76.192.083-9',
            monto: 450000,
            fechaEmision: new Date().toISOString().slice(0, 10),
        },
    });

    // 3. Validar la respuesta
    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.id).toBeTruthy();
    expect(body.folio).toBe(folio);
    expect(body.tipoDte).toBe('DTE 33');
    expect(body.rutReceptor).toBe('76.192.083-9');
    expect(body.monto).toBe(450000);
    expect(body.estado).toBe('PENDIENTE');
});