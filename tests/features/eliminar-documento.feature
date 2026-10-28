Feature: Eliminación de documentos

  @eliminar-documento
  Scenario: Eliminar un documento existente correctamente
    Given que el usuario administrador ha iniciado sesión
    When identifica el documento que se desea eliminar con folio "#9700", RUT "77.777.777-7" y monto "$ 2.230.000"
    And abre el modal de eliminación del documento
    And confirma la eliminación del documento
    Then el documento eliminado no debe aparecer en la tabla