export default function StatWidget({ title='Stat', value='' }){
  return (
    <div className="p-4 bg-white dark:bg-slate-800 rounded">
      <h3 className="font-medium">{title}</h3>
      <p className="text-2xl mt-2">{value}</p>
    </div>
  )
}
