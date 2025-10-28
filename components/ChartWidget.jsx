import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function ChartWidget({ title='Chart', data={ labels: [], values: [] } }){
  const chartData = { labels: data.labels, datasets: [{ label: title, data: data.values }] }
  return (
    <div className="p-4 bg-white dark:bg-slate-800 rounded">
      <h3 className="font-medium">{title}</h3>
      <div style={{height:220}}><Bar data={chartData} /></div>
    </div>
  )
}
