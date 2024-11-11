'use client';
const { useState, useEffect } = require('react');

export default function Practica() {
  const jugadores = [
    {
      nombre: 'Franco Armani',
      altura: '1.89m',
      edad: 38,
      posicion: 'Portero',
      piernaHabil: 'Derecha'
    },
    {
      nombre: 'Lucas Lavagnino',
      altura: '1.89m',
      edad: 20,
      posicion: 'Portero',
      piernaHabil: 'Derecha'
    },
    {
      nombre: 'Conan Ledesma',
      altura: '1.83m',
      edad: 31,
      posicion: 'Portero',
      piernaHabil: 'Derecha'
    },

    {
      nombre: 'Paulo Díaz',
      altura: '1.78m',
      edad: 30,
      posicion: 'Defensa Central',
      piernaHabil: 'Derecha'
    },
    {
      nombre: 'Federico Gattoni',
      altura: '1.83m',
      edad: 25,
      posicion: 'Defensa Central',
      piernaHabil: 'Derecha'
    },
    {
      nombre: 'Germán Pezzella',
      altura: '1.87m',
      edad: 33,
      posicion: 'Defensa Central',
      piernaHabil: 'Derecha'
    },
    {
      nombre: 'Leandro González Pírez',
      altura: '1.85m',
      edad: 32,
      posicion: 'Defensa Central',
      piernaHabil: 'Derecha'
    },
    {
      nombre: 'Ramiro Funes Mori',
      altura: '1.87m',
      edad: 33,
      posicion: 'Defensa Central',
      piernaHabil: 'Izquierda'
    },

    {
      nombre: 'Marcos Acuña',
      altura: '1.72m',
      edad: 33,
      posicion: 'Lateral Izquierdo',
      piernaHabil: 'Izquierda'
    },
    {
      nombre: 'Enzo Díaz',
      altura: '1.67m',
      edad: 28,
      posicion: 'Lateral Izquierdo',
      piernaHabil: 'Izquierda'
    },
    {
      nombre: 'Milton Casco',
      altura: '1.70m',
      edad: 36,
      posicion: 'Lateral Izquierdo',
      piernaHabil: 'Derecha'
    },
    {
      nombre: 'Fabricio Bustos',
      altura: '1.67m',
      edad: 28,
      posicion: 'Lateral Derecho',
      piernaHabil: 'Derecha'
    },
    {
      nombre: "Agustín Sant'Anna",
      altura: '1.73m',
      edad: 27,
      posicion: 'Lateral Derecho',
      piernaHabil: 'Derecha'
    },

    {
      nombre: 'Rodrigo Villagra',
      altura: '1.78m',
      edad: 23,
      posicion: 'Pivote',
      piernaHabil: 'Derecha'
    },
    {
      nombre: 'Nicolás Fonseca',
      altura: '1.81m',
      edad: 26,
      posicion: 'Pivote',
      piernaHabil: 'Derecha'
    },
    {
      nombre: 'Matías Kranevitter',
      altura: '1.79m',
      edad: 31,
      posicion: 'Pivote',
      piernaHabil: 'Derecha'
    },

    {
      nombre: 'Rodrigo Aliendro',
      altura: '1.73m',
      edad: 33,
      posicion: 'Mediocentro',
      piernaHabil: 'Derecha'
    },
    {
      nombre: 'Santiago Simón',
      altura: '1.81m',
      edad: 22,
      posicion: 'Interior Derecho',
      piernaHabil: 'Derecha'
    },

    {
      nombre: 'Claudio Echeverri',
      altura: '1.70m',
      edad: 18,
      posicion: 'Mediocentro Ofensivo',
      piernaHabil: 'Derecha'
    },
    {
      nombre: 'Franco Mastantuono',
      altura: '1.77m',
      edad: 17,
      posicion: 'Mediocentro Ofensivo',
      piernaHabil: 'Izquierda'
    },
    {
      nombre: 'Manuel Lanzini',
      altura: '1.70m',
      edad: 31,
      posicion: 'Mediocentro Ofensivo',
      piernaHabil: 'Derecha'
    },
    {
      nombre: 'Gonzalo Martínez',
      altura: '1.72m',
      edad: 31,
      posicion: 'Mediocentro Ofensivo',
      piernaHabil: 'Izquierda'
    },
    {
      nombre: 'Nacho Fernández',
      altura: '1.82m',
      edad: 34,
      posicion: 'Mediocentro Ofensivo',
      piernaHabil: 'Izquierda'
    },

    {
      nombre: 'Pablo Solari',
      altura: '1.78m',
      edad: 23,
      posicion: 'Extremo Derecho',
      piernaHabil: 'Derecha'
    },
    {
      nombre: 'Maxi Meza',
      altura: '1.81m',
      edad: 31,
      posicion: 'Extremo Derecho',
      piernaHabil: 'Derecha'
    },
    {
      nombre: 'Ian Subiabre',
      altura: '1.71m',
      edad: 17,
      posicion: 'Extremo Derecho',
      piernaHabil: 'Izquierda'
    },

    {
      nombre: 'Adam Bareiro',
      altura: '1.80m',
      edad: 28,
      posicion: 'Delantero Centro',
      piernaHabil: 'Derecha'
    },
    {
      nombre: 'Facundo Colidio',
      altura: '1.80m',
      edad: 24,
      posicion: 'Delantero Centro',
      piernaHabil: 'Derecha'
    },
    {
      nombre: 'Miguel Borja',
      altura: '1.84m',
      edad: 31,
      posicion: 'Delantero Centro',
      piernaHabil: 'Derecha'
    },
    {
      nombre: 'Agustín Ruberto',
      altura: '1.83m',
      edad: 18,
      posicion: 'Delantero Centro',
      piernaHabil: 'Derecha'
    }
  ];

  const [ingresarNombre, setIngresarNombre] = useState('');
  const [jugadorAleatorio, setJugadorAleatorio] = useState(null);
  const [mensaje, setMensaje] = useState('');
  const [pistas, setPistas] = useState([]);
  const [indicePista, setIndicePista] = useState(0);

  useEffect(() => {
    reiniciarJuego(); // Inicia el juego con un jugador aleatorio al cargar el componente
  }, []);

  const reiniciarJuego = () => {
    const jugador = jugadores[Math.floor(Math.random() * jugadores.length)];
    setJugadorAleatorio(jugador);
    setPistas(['altura', 'posicion', 'edad', 'piernaHabil']);
    setIndicePista(0);
    setMensaje('');
    setIngresarNombre('');
  };

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
      setTimeout(reiniciarJuego, 3000); // Reinicia el juego después de 3 segundos
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
            mensajePista = 'No hay más pistas';
        }

        setMensaje(`Incorrecto. ${mensajePista}`);
      } else {
        setMensaje(`No adivinaste. El jugador era ${jugadorAleatorio.nombre}`);
        setTimeout(reiniciarJuego, 3000); // Reinicia el juego después de 3 segundos
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
