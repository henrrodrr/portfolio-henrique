import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Olá, sou Henrique Ribeiro</h1>
        <p className="text-lg text-gray-600">
          Estudante de Engenharia Informática. Crio websites modernos e soluções web personalizadas.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">💼 Serviços</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          <li>✅ Criação de sites modernos e responsivos</li>
          <li>🔧 Atualização e manutenção de websites</li>
          <li>📱 Aplicações web simples</li>
          <li>🤖 Scripts e automações</li>
          <li>🎓 Explicações e apoio em programação</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">📂 Projetos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Website para Pastelaria</h3>
            <p className="text-sm text-gray-600 mb-2">
              Site institucional simples com menu e localização. Feito em HTML, CSS e JS.
            </p>
            <a href="#" className="text-blue-500 text-sm">Ver projeto</a>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">App de Tarefas</h3>
            <p className="text-sm text-gray-600 mb-2">
              Aplicação web feita com React e Firebase para gerir tarefas pessoais.
            </p>
            <a href="#" className="text-blue-500 text-sm">Ver projeto</a>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Bot para Telegram</h3>
            <p className="text-sm text-gray-600 mb-2">
              Script em Python que responde a mensagens e envia notificações.
            </p>
            <a href="#" className="text-blue-500 text-sm">Ver projeto</a>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">📬 Contacta-me</h2>
        <p className="text-gray-700 mb-4">
          Envia email para <a className="text-blue-600 font-semibold" href="mailto:henrrodrr@gmail.com">henrrodrr@gmail.com</a>
        </p>
      </section>
    </div>
  );
}

export default App;

