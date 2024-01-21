const HomeCard = ({ data }) => {
  return (
    <div className="w-full bg-white shadow-md p-4 border rounded-md space-y-3">
      <div className="w-full flex justify-between">
        {console.group(data)}
        <div className="font-semibold text-xl">{data.name}</div>
        <div>{data.animal}</div>
      </div>
      <div className="w-full bg-gradient-to-r from-white to-slate-950 h-6 rounded-lg"></div>
      <div className="flex gap-2 text-sm ">
        <div>Founder:</div> <div className="font-bold">{data.founder}</div>
      </div>
    </div>
  );
};

export default HomeCard;
