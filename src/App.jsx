import './App.css'
import Collapsible from './Collapsible'
import { motion, animate } from 'framer-motion'

function App() {


  return (
    <div className="App">
      <Collapsible title="Описание">
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.5, type: "spring"}}
        >
        <br/>Футболка мужская Zara 
        <br/>Мужская футболка из 100% хлопка. 
        <br/>Имеет прямой крой и круглый вырез.
        <br/>Доступные размеры: S, M, L, XL, XXL.
        <br/> Цвет: черный.
        <br/>Материал: 100% хлопок
        <br/>Цена: 1990р.
        </motion.div>
      </Collapsible>
    </div>
  )
}

export default App
