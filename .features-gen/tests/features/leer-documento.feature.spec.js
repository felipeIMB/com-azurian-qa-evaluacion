// Generated from: tests\features\leer-documento.feature
import { test } from "playwright-bdd";

test.describe('Consulta del detalle de documentos', () => {

  test('Consultar el detalle de un documento existente', { tag: ['@leer-documento'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('que el usuario administrador ha iniciado sesión', null, { page }); 
    await When('identifica el documento para consultar con folio "#9700", RUT "77.777.777-7" y monto "$ 2.230.000"', null, { page }); 
    await And('abre el detalle del documento'); 
    await Then('el detalle debe mostrar el folio y el RUT del documento'); 
    await And('cierra el detalle del documento'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\leer-documento.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@leer-documento"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given que el usuario administrador ha iniciado sesión","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When identifica el documento para consultar con folio \"#9700\", RUT \"77.777.777-7\" y monto \"$ 2.230.000\"","stepMatchArguments":[{"group":{"start":49,"value":"\"#9700\"","children":[{"start":50,"value":"#9700","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":62,"value":"\"77.777.777-7\"","children":[{"start":63,"value":"77.777.777-7","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":85,"value":"\"$ 2.230.000\"","children":[{"start":86,"value":"$ 2.230.000","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And abre el detalle del documento","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then el detalle debe mostrar el folio y el RUT del documento","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And cierra el detalle del documento","stepMatchArguments":[]}]},
]; // bdd-data-end