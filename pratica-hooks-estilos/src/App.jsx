import { useState, useEffect } from 'react';
import BotaoDinamico from './components/BotaoDinamico.jsx';
import Alerta from './components/Alerta.jsx';
import CardProduto from './components/CardProduto.jsx';
import Interruptor from './components/Interruptor.jsx';
import CardProdutoMUI from './components/CardProdutoMUI.jsx';

export default function App() {
  const [count, setCount] = useState(0);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    document.title = `Cliques: ${count}`;
    if (count > 0) {
      setMensagem('Contador atualizado com sucesso!');
      const timer = setTimeout(() => {
        setMensagem('');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '2rem', 
      fontFamily: 'Roboto, sans-serif',
      textAlign: 'center'
    }}>
      <h1>Aula Prática Ciclo 4 - Frameworks Web I</h1>

      <section style={{ marginBottom: '2rem', width: '100%', maxWidth: '400px' }}>
        <h2>Atividade 1: Botão com Estilo Dinâmico</h2>
        <BotaoDinamico />
      </section>

      <section style={{ marginBottom: '2rem', width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Atividade 2: Alertas com CSS Modules</h2>
        <Alerta type="sucesso" message="Operação realizada com sucesso!" />
        <Alerta type="erro" message="Falha ao processar a requisição." />
      </section>

      <section style={{ marginBottom: '2rem', width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Atividade 3: Styled Components</h2>
        <CardProduto nome="Café Especial" preco="45,00" />
      </section>

      <section style={{ marginBottom: '2rem', width: '100%', maxWidth: '400px' }}>
        <h2>Atividade 4: useEffect em Ação</h2>
        <p>Você clicou {count} vezes</p>
        <button onClick={() => setCount(count + 1)}>Clique aqui</button>
        {mensagem && <p style={{ color: 'green', marginTop: '10px' }}>{mensagem}</p>}
      </section>

      <section style={{ marginBottom: '2rem', width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Atividade 5: Hook Personalizado</h2>
        <Interruptor />
      </section>

      <section style={{ marginBottom: '2rem', width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Atividade 6: Desafio com Material-UI</h2>
        <CardProdutoMUI 
          imagem="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80"
          nome="Xícara de Café"
          descricao="Uma xícara de café de alta qualidade para começar bem o seu dia."
          preco="25,00"
        />
      </section>
    </div>
  );
}