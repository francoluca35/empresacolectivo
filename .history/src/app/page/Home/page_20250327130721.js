"use client";
import { useState, useEffect } from "react";
import useTickets from "@/Hook/useTickets";

const imagenes = [
  "/Assets/carrousel/1.jpg",
  "/Assets/carrousel/2.jpg",
  "/Assets/carrousel/3.jpg",
];

export default function Home() {
  const { tickets, loading, error } = useTickets();
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [rangoFechas, setRangoFechas] = useState([null, null]);
  const [horario, setHorario] = useState("");
  const [pasajeros, setPasajeros] = useState(1);
  const [resultados, setResultados] = useState([]);
  const [buscado, setBuscado] = useState(false);
  const [tipoServicio, setTipoServicio] = useState("");

  const router = useRouter();

  const [cantidadBoletos, setCantidadBoletos] = useState({});

  const buscarPasajes = () => {
    setBuscado(true);

    const fechaInicio = rangoFechas[0]
      ? new Date(rangoFechas[0]).getTime()
      : null;
    const fechaFin = rangoFechas[1] ? new Date(rangoFechas[1]).getTime() : null;

    const parseFecha = (fecha) => {
      if (!fecha) return null;
      const partes = fecha.split("-");
      if (partes.length !== 3) return null;
      const anio = parseInt(partes[0], 10);
      const mes = parseInt(partes[1], 10) - 1;
      const dia = parseInt(partes[2], 10);
      return new Date(anio, mes, dia).getTime();
    };


      const filtrados = tickets?.filter((ticket) => {
        const fechaDesdeTicket = parseFecha(ticket.fechaDesde);
        const fechaHastaTicket = parseFecha(ticket.fechaHasta);
      
        return (
          (!origen || ticket.origen === origen) &&
          (!destino || ticket.destino === destino) &&
          (!tipoServicio || ticket.tipoServicio === tipoServicio) &&
          (!horario || ticket.horario === horario) &&
          (!fechaInicio || (fechaDesdeTicket && fechaDesdeTicket >= fechaInicio)) &&
          (!fechaFin || (fechaHastaTicket && fechaHastaTicket <= fechaFin))
        );
      });
      

    setResultados(filtrados);
  };

  const handleCompra = (ticket) => {
    const boletos = cantidadBoletos[ticket.id] || 1;
    router.push(
      `/pago?origen=${ticket.origen}&destino=${ticket.destino}&localidad=${ticket.localidad}&horario=${ticket.horario}&horariosalida=${ticket.horaSalida}&horariollegada=${ticket.horaLlegada}&fechaDesde=${ticket.fechaDesde}&fechaHasta=${ticket.fechaHasta}&butaca=${ticket.tipoServicio}&precio=${ticket.precio}&cantidad=${boletos}`
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="flex mt-14 justify-center items-center p-4 md:p-8 lg:p-28"
      style={{
        backgroundImage: "url('/Assets/fondo-home.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex mt-10 md:mt-0 flex-col md:flex-row max-w-6xl w-full">
        {/* Buscador */}
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col space-y-4 text-black bg-opacity-30 bg-black backdrop-blur-lg rounded-3xl shadow-2xl md:mr-4">
        <div className="relative">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="absolute left-3 top-3 text-gray-500"
            />
            <select
              className="border p-2 pl-10 rounded w-full"
              value={origen}
              onChange={(e) => setOrigen(e.target.value)}
            >
              <option value="">¿Desde dónde viajas?</option>
              {[...new Set(tickets?.map((ticket) => ticket.origen))].map(
                (origen, index) => (
                  <option key={index} value={origen}>
                    {origen}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="relative">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="absolute left-3 top-3 text-gray-500"
            />
            <select
              className="border p-2 pl-10 rounded w-full"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
            >
              <option value="">¿Hasta dónde viajas?</option>
              {[...new Set(tickets?.map((ticket) => ticket.destino))].map(
                (destino, index) => (
                  <option key={index} value={destino}>
                    {destino}
                  </option>
                )
              )}
            </select>
          </div>

          {/* Tipo de viaje */}
          <div className="flex bg-white text-white rounded-xl p-3 space-x-6 justify-center font-medium">
            <label className="flex items-center space-x-2 ">
              <input
                type="radio"
                name="tipo"
                value="ida"
                checked={tipoViaje === "ida"}
                onChange={() => setTipoViaje("ida")}
              />
              <span className="text-black">Sólo IDA</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="tipo"
                value="idaYvuelta"
                checked={tipoViaje === "idaYvuelta"}
                onChange={() => setTipoViaje("idaYvuelta")}
              />
              <span className="text-black">IDA y VUELTA</span>
            </label>
          </div>

          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="rounded-xl bg-white px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-800 text-black"
          />
          {tipoViaje === "idaYvuelta" && (
            <input
              type="date"
              className="rounded-xl text-black bg-white px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          )}

          <input
            type="number"
            min="1"
            value={pasajeros}
            onChange={(e) => setPasajeros(e.target.value)}
            placeholder="Cantidad de Pasajero(s)"
            className="rounded-xl bg-white placeholder:text-black px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-800"
          />

          <button
            onClick={() => setMostrarResultados(true)}
            className="bg-cyan-700 hover:bg-cyan-600 text-white rounded-xl py-3 font-bold text-lg transition"
          >
            Buscar
          </button>

          {/* Resultados */}
          {mostrarResultados && !loading && (
            <div className="bg-white p-4 mt-4 rounded-xl text-black max-h-80 overflow-y-auto">
              <h2 className="font-bold mb-2">Resultados:</h2>
              {resultadosFiltrados.length > 0 ? (
                resultadosFiltrados.map((b, i) => (
                  <div key={i} className="border-b py-2">
                    <p><strong>Origen:</strong> {b.origen}</p>
                    <p><strong>Destino:</strong> {b.destino}</p>
                    <p><strong>Precio:</strong> ${b.precio}</p>
                    <p><strong>Horario:</strong> {b.horario}</p>
                    <p><strong>Tipo:</strong> {b.tipoServicio}</p>
                  </div>
                ))
              ) : (
                <p>No se encontraron boletos para tu búsqueda.</p>
              )}
            </div>
          )}
        </div>

        {/* Carrusel de promociones */}
        <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center">
          <div className="w-full max-w-md h-auto overflow-hidden rounded-2xl shadow-xl transition-all duration-700">
            <img
              src={imagenes[index]}
              alt={`promo-${index}`}
              className="w-full h-auto object-cover rounded-2xl transition-opacity duration-1000"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
