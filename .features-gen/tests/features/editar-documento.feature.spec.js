// Generated from: tests\features\editar-documento.feature
import { test } from "playwright-bdd";

test.describe('Edición de documentos', () => {

  test('Editar un documento existente correctamente', { tag: ['@editar-documento'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('que el usuario administrador ha iniciado sesión', null, { page }); 
    await When('identifica el documento con folio "#9700", RUT "77.777.777-7" y monto "2.230.000"', null, { page }); 
    await And('abre el modal de edición del documento'); 
    await And('modifica el RUT, el monto y las observaciones'); 
    await And('guarda los cambios del documento'); 
    await Then('el documento debe reflejar los datos actualizados en la tabla'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\editar-documento.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@editar-documento"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given que el usuario administrador ha iniciado sesión","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When identifica el documento con folio \"#9700\", RUT \"77.777.777-7\" y monto \"2.230.000\"","stepMatchArguments":[{"group":{"start":34,"value":"\"#9700\"","children":[{"start":35,"value":"#9700","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"77.777.777-7\"","children":[{"start":48,"value":"77.777.777-7","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":70,"value":"\"2.230.000\"","children":[{"start":71,"value":"2.230.000","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And abre el modal de edición del documento","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And modifica el RUT, el monto y las observaciones","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And guarda los cambios del documento","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then el documento debe reflejar los datos actualizados en la tabla","stepMatchArguments":[]}]},
]; // bdd-data-end