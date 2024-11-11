const { useState } = require('react');

export default function practica() {
  const num = () => Math.floor(Math.random() * 100) + 1;
  const [ingresarNum, setIngresarNum] = useState();
  const [randomNumber, setRandomNumber] = useState(num());
  const [mensaje, setMensaje] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (ingresarNum < randomNumber) {
      setMensaje('El numero es menor');
    }
    if (ingresarNum > randomNumber) {
      setMensaje('El numero es menor');
    } else {
      setMensaje('Asertaste el numero');
    }
  };

  const onChange = (elem) => {
    setIngresarNum(elem.ingresarNum.value);
  };

  return (
    <div>
      <input
        type='num'
        value={ingresarNum}
        onChange={onChange}
        placeholder='Ingresa un número entre 1 y 100'
      />
      <button onSubmit={onSubmit}>Adivinar</button>
    </div>
  );
}
