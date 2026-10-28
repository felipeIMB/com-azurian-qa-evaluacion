// Generated from: tests\features\eliminar-documento.feature
import { test } from "playwright-bdd";

test.describe('Eliminación de documentos', () => {

  test('Eliminar un documento existente correctamente', { tag: ['@eliminar-documento'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('que el usuario administrador ha iniciado sesión', null, { page }); 
    await When('identifica el documento que se desea eliminar con folio "#9700", RUT "77.777.777-7" y monto "$ 2.230.000"', null, { page }); 
    await And('abre el modal de eliminación del documento'); 
    await And('confirma la eliminación del documento'); 
    await Then('el documento eliminado no debe aparecer en la tabla'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\eliminar-documento.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@eliminar-documento"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given que el usuario administrador ha iniciado sesión","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When identifica el documento que se desea eliminar con folio \"#9700\", RUT \"77.777.777-7\" y monto \"$ 2.230.000\"","stepMatchArguments":[{"group":{"start":56,"value":"\"#9700\"","children":[{"start":57,"value":"#9700","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":69,"value":"\"77.777.777-7\"","children":[{"start":70,"value":"77.777.777-7","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":92,"value":"\"$ 2.230.000\"","children":[{"start":93,"value":"$ 2.230.000","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And abre el modal de eliminación del documento","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And confirma la eliminación del documento","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then el documento eliminado no debe aparecer en la tabla","stepMatchArguments":[]}]},
]; // bdd-data-end