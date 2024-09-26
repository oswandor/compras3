import React, { useEffect, useState } from "react";
import Grid from "@nadavshaar/react-grid-table";

// Componente funcional que muestra una tabla con los datos de detalle de compras
// https://github.com/NadavShaar/react-grid-table
// npx create-react-app appcompras
// cd appcompras
// npm install @nadavshaar/react-grid-table
// Se ha creado el archivo deploy.ps1 para automatizar el despliegue de la aplicación en el servidor

const DetalleCompraTable = () => {
  const [detalleCompras, setDetalleCompras] = useState([]);

  // Función para obtener los datos de la API
  useEffect(() => {
    const fetchDetalleCompras = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/detalle-compras");
        const data = await response.json();
        //console.log("Datos obtenidos:", data);
        setDetalleCompras(data); // Guarda los datos en el estado
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDetalleCompras(); // Llama a la función cuando el componente se monte
  }, []);

  const columns = [
    { id: 1, field: "idDetalleCompra", label: "ID Detalle Compra" },
    { id: 2, field: "nrc", label: "NRC" },
    { id: 3, field: "razonSocial", label: "Razón Social" },
    { id: 4, field: "fechaCompra", label: "Fecha de Compra" },
    { id: 5, field: "cantidad", label: "Cantidad" },
    { id: 6, field: "precioUnitario", label: "Precio Unitario" },
  ];

  // Verificación visual de los datos
  if (detalleCompras.length === 0) {
    return <div>Cargando datos...</div>; // Muestra un mensaje si no hay datos
  }

  // Configuración de paginación, con 7 filas por página
  const pagination = {
    enabled: true,
    limit: 7, // Número de filas por página
  };

  // Renderiza la tabla con los datos y columnas
  return (
    <div>
      <h1>Detalle de Compras</h1>
      <Grid columns={columns} rows={detalleCompras} pagination={pagination} />
    </div>
  );
};

export default DetalleCompraTable;