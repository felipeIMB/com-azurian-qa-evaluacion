// Generated from: tests\features\crear-documento.feature
import { test } from "playwright-bdd";

test.describe('Creación de documentos', () => {

  test('Emitir un documento correctamente', { tag: ['@crear-documento'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('que el usuario administrador ha iniciado sesión', null, { page }); 
    await When('abre el formulario de creación de documento', null, { page }); 
    await And('completa los datos del nuevo documento', null, { page }); 
    await And('guarda y emite el documento', null, { page }); 
    await Then('el documento debe aparecer en la lista con los datos correctos', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\crear-documento.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@crear-documento"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que el usuario administrador ha iniciado sesión","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When abre el formulario de creación de documento","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And completa los datos del nuevo documento","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And guarda y emite el documento","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then el documento debe aparecer en la lista con los datos correctos","stepMatchArguments":[]}]},
]; // bdd-data-end