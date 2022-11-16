import { motion } from "framer-motion"

function App() {
  return (
    <motion.div
      className="container mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Hello world!
    </motion.div>
  )
}

export default App
