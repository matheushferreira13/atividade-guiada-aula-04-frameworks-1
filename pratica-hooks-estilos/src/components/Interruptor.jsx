import { useToggle } from '../hooks/useToggle';

export default function Interruptor() {
  const [ligado, toggleLuz] = useToggle(false);

  return (
    <div style={{ marginTop: '1rem' }}>
      <p>A luz está ligada? {ligado ? 'Ligada' : 'Desligada'}</p>
      <button onClick={toggleLuz}>
        Alternar Luz
      </button>
    </div>
  );
}