Feature: Edición de documentos

  @editar-documento
  Scenario: Editar un documento existente correctamente
    Given que el usuario administrador ha iniciado sesión
    When identifica el documento con folio "#9700", RUT "77.777.777-7" y monto "2.230.000"
    And abre el modal de edición del documento
    And modifica el RUT, el monto y las observaciones
    And guarda los cambios del documento
    Then el documento debe reflejar los datos actualizados en la tabla