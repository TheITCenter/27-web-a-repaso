import { useParams } from "react-router-dom"


export const Prueba = () => {
   const params = useParams()
   console.log(params)
  return (
    <div>Prueba</div>
  )
}
