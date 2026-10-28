Feature: Consulta del detalle de documentos

  @leer-documento
  Scenario: Consultar el detalle de un documento existente
    Given que el usuario administrador ha iniciado sesión
    When identifica el documento para consultar con folio "#9700", RUT "77.777.777-7" y monto "$ 2.230.000"
    And abre el detalle del documento
    Then el detalle debe mostrar el folio y el RUT del documento
    And cierra el detalle del documento