export default function DashboardCard(props) {
  return (
    <div className="card bg-slate-700 border-[1px] border-black image-full shadow-xl flex items-center">
      <div className="card-body flex flex-col items-center justify-center">
        <h2 className="card-title text-2xl">{props.category}</h2>
        <p className="text-center">{props.content}</p>
      </div>
    </div>
  );
}
