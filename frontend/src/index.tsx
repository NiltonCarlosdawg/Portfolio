
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById('root')!

// Limpa qualquer renderização anterior (React 17 ou 18)
// @ts-ignore - propriedade interna do React
if (rootElement._reactRootContainer) {
  // @ts-ignore
  delete rootElement._reactRootContainer
}

// Remove qualquer propriedade interna do React 17
// @ts-ignore
if (rootElement._reactRootFiberRoot) {
  // @ts-ignore
  delete rootElement._reactRootFiberRoot
}

// Limpa o conteúdo HTML do container
rootElement.innerHTML = ''

// Agora cria a root do React 18
const root = ReactDOM.createRoot(rootElement)
root.render(<App />)