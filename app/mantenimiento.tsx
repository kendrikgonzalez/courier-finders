export default function Maintenance () {
  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Mantenimiento en progreso</h1>
        <p className="text-lg mb-4">Estamos trabajando para mejorar nuestro sitio web. Vuelve pronto para ver las nuevas actualizaciones.</p>
        <img src="/maintenance.svg" alt="Mantenimiento" className="w-64 mx-auto mb-4" />
        <p className="text-sm">Si tienes alguna pregunta, no dudes en contactarnos.</p>
      </div>
    </div>
  );
};
