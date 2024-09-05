import { Barchart } from "../charts/finance/Barchart"
import { LineChart } from "../charts/finance/LineChart"

export const FinancialDash = () =>  {

  return (
    <div>

      <Barchart />
      <LineChart />
    </div>
  )
}