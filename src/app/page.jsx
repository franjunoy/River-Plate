'use client';
const { useState, useEffect } = require('react');

export default function Practica() {
  const jugadores = [
    {
      nombre: 'Messi',
      altura: '1.70m',
      edad: 36,
      posicion: 'Delantero',
      piernaHabil: 'Izquierda'
    },
    {
      nombre: 'Ronaldo',
      altura: '1.87m',
      edad: 39,
      posicion: 'Delantero',
      piernaHabil: 'Derecha'
    },
    {
      nombre: 'Neymar',
      altura: '1.75m',
      edad: 32,
      posicion: 'Delantero',
      piernaHabil: 'Derecha'
    },
    {
      nombre: 'Mbappe',
      altura: '1.78m',
      edad: 25,
      posicion: 'Delantero',
      piernaHabil: 'Derecha'
    },
    {
      nombre: 'Haaland',
      altura: '1.94m',
      edad: 23,
      posicion: 'Delantero',
      piernaHabil: 'Izquierda'
    }
  ];

  const [ingresarNombre, setIngresarNombre] = useState('');
  const [jugadorAleatorio, setJugadorAleatorio] = useState(null);
  const [mensaje, setMensaje] = useState('');
  const [pistas, setPistas] = useState([]);
  const [indicePista, setIndicePista] = useState(0);

  useEffect(() => {
    const jugador = jugadores[Math.floor(Math.random() * jugadores.length)];
    setJugadorAleatorio(jugador);
    setPistas(['altura', 'posicion', 'edad', 'piernaHabil']);
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    const jugador = ingresarNombre.trim().toLowerCase();

    if (!jugadorAleatorio) return;

    if (jugador === '') {
      setMensaje('Por favor, ingresa un nombre válido');
      return;
    }

    if (jugador === jugadorAleatorio.nombre.toLowerCase()) {
      setMensaje(`¡Adivinaste el jugador! Es ${jugadorAleatorio.nombre}`);
    } else {
      if (indicePista < pistas.length) {
        const pista = pistas[indicePista];
        setIndicePista(indicePista + 1);

        let mensajePista;
        switch (pista) {
          case 'altura':
            mensajePista = `Pista: La altura del jugador es ${jugadorAleatorio.altura}`;
            break;
          case 'edad':
            mensajePista = `Pista: Tiene ${jugadorAleatorio.edad} años`;
            break;
          case 'posicion':
            mensajePista = `Pista: Juega en la posición de ${jugadorAleatorio.posicion}`;
            break;

          case 'piernaHabil':
            mensajePista = `Pista: Su pierna hábil es la ${jugadorAleatorio.piernaHabil}`;
            break;
          default:
            mensajePista = 'No hay mas pistas';
        }

        setMensaje(`Incorrecto. ${mensajePista}`);
      } else {
        setMensaje(`No adivinaste. El jugador era ${jugadorAleatorio.nombre}`);
      }
    }
  };

  const onChange = (elem) => {
    setIngresarNombre(elem.target.value);
  };

  return (
    <div>
      <h1>Adivina el Jugador</h1>
      <form onSubmit={onSubmit}>
        <label>Selecciona un jugador:</label>
        <select value={ingresarNombre} onChange={onChange}>
          <option value='' disabled>
            -- Selecciona un jugador --
          </option>
          {jugadores.map((jugador) => (
            <option key={jugador.nombre} value={jugador.nombre.toLowerCase()}>
              {jugador.nombre}
            </option>
          ))}
        </select>
        <button type='submit'>Adivinar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}
