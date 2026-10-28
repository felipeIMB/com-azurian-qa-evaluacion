Feature: Creación de documentos
  @crear-documento
  Scenario: Emitir un documento correctamente
    Given que el usuario administrador ha iniciado sesión
    When abre el formulario de creación de documento
    And completa los datos del nuevo documento
    And guarda y emite el documento
    Then el documento debe aparecer en la lista con los datos correctos