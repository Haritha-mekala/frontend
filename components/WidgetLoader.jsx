import dynamic from 'next/dynamic'

const map = {
  chart: dynamic(() => import('./ChartWidget')),
  stat: dynamic(() => import('./StatWidget'))
}

export default function WidgetLoader({ widget }){
  const Comp = map[widget.type] || (() => <div className="p-4 bg-white dark:bg-slate-800 rounded">Unknown widget</div>)
  return <Comp {...widget.props} />
}
