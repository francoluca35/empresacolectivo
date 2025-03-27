"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useTickets from "@/Hook/useTickets";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const imagenes = [
  "/Assets/carrousel/1.jpg",
  "/Assets/carrousel/2.jpg",
  "/Assets/carrousel/3.jpg",
];

export default function Home() {
  const router = useRouter();
  const { tickets, loading } = useTickets();
  const [index, setIndex] = useState(0);
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [tipoServicio, setTipoServicio] = useState("");
  const [horario, setHorario] = useState("");
  const [rangoFechas, setRangoFechas] = useState([null, null]);
  const [pasajeros, setPasajeros] = useState(1);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [cantidadBoletos, setCantidadBoletos] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const parseFecha = (fecha) => {
    if (!fecha) return null;
    const partes = fecha.split("-");
    if (partes.length !== 3) return null;
    const anio = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1;
    const dia = parseInt(partes[2], 10);
    return new Date(anio, mes, dia).getTime();
  };

  const fechaInicio = rangoFechas[0] ? rangoFechas[0].getTime() : null;
  const fechaFin = rangoFechas[1] ? rangoFechas[1].getTime() : null;

  const resultadosFiltrados = tickets?.filter((ticket) => {
    const desde = parseFecha(ticket.fechaDesde);
    const hasta = parseFecha(ticket.fechaHasta);

    return (
      (!origen || ticket.origen === origen) &&
      (!destino || ticket.destino === destino) &&
      (!tipoServicio || ticket.tipoServicio === tipoServicio) &&
      (!horario || ticket.horario === horario) &&
      (!fechaInicio || (desde && desde >= fechaInicio)) &&
      (!fechaFin || (hasta && hasta <= fechaFin))
    );
  });

  const handleCompra = (ticket) => {
    const boletos = cantidadBoletos[ticket.id] || 1;
    router.push(
      `/pago?origen=${ticket.origen}&destino=${ticket.destino}&localidad=${ticket.localidad}&horario=${ticket.horario}&horariosalida=${ticket.horaSalida}&horariollegada=${ticket.horaLlegada}&fechaDesde=${ticket.fechaDesde}&fechaHasta=${ticket.fechaHasta}&butaca=${ticket.tipoServicio}&precio=${ticket.precio}&cantidad=${boletos}`
    );
  };

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
          <select
            value={origen}
            onChange={(e) => setOrigen(e.target.value)}
            className="rounded-xl bg-white px-4 py-3"
          >
            <option value="">¿Desde dónde?</option>
            {[...new Set(tickets?.map((t) => t.origen))].map((ori, i) => (
              <option key={i} value={ori}>
                {ori}
              </option>
            ))}
          </select>

          <select
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            className="rounded-xl bg-white px-4 py-3"
          >
            <option value="">¿Hasta dónde?</option>
            {[...new Set(tickets?.map((t) => t.destino))].map((dest, i) => (
              <option key={i} value={dest}>
                {dest}
              </option>
            ))}
          </select>

          <select
            value={tipoServicio}
            onChange={(e) => setTipoServicio(e.target.value)}
            className="rounded-xl bg-white px-4 py-3"
          >
            <option value="">Tipo de servicio</option>
            <option value="clasico">Clásico</option>
            <option value="semi-cama">Semi-Cama</option>
            <option value="cama-completa">Cama Completa</option>
          </select>

          <select
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
            className="rounded-xl bg-white px-4 py-3"
          >
            <option value="">Turno</option>
            <option value="mañana">Mañana</option>
            <option value="tarde">Tarde</option>
            <option value="noche">Noche</option>
          </select>

          <DatePicker
            selected={rangoFechas[0]}
            onChange={(update) => setRangoFechas(update)}
            startDate={rangoFechas[0]}
            endDate={rangoFechas[1]}
            selectsRange
            className="rounded-xl bg-white px-4 py-3 w-full"
            placeholderText="Seleccioná un rango de fechas"
          />

          <input
            type="number"
            min="1"
            value={pasajeros}
            onChange={(e) => setPasajeros(parseInt(e.target.value))}
            placeholder="Cantidad de pasajeros"
            className="rounded-xl bg-white px-4 py-3"
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
                resultadosFiltrados.map((ticket, i) => (
                  <div key={i} className="border-b py-2 text-sm space-y-1">
                    <p><strong>{ticket.origen}</strong> → <strong>{ticket.destino}</strong></p>
                    <p>Tipo: {ticket.tipoServicio} | Turno: {ticket.horario}</p>
                    <p>Desde: {ticket.fechaDesde} / Hasta: {ticket.fechaHasta}</p>
                    <p>Precio por boleto: ${ticket.precio}</p>
                    <button
                      onClick={() => handleCompra(ticket)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded mt-1"
                    >
                      Comprar
                    </button>
                  </div>
                ))
              ) : (
                <p>No se encontraron pasajes.</p>
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
