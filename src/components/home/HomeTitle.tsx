const HomeTitle = ({ title }: { title: string }) => {
  return (
    <div
      className="text-3xl font-semibold w-fit mx-auto pb-1.5  rounded mb-8 "
      // className="text-3xl font-semibold w-fit mx-auto px-3 pb-1.5 border-b-4 border-black rounded mb-8"
      // style={{ filter: "drop-shadow(1px 1px 2px #ff8080" }}
    >
      <h1 className="tracking-wide">{title}</h1>
    </div>
  );
};

export default HomeTitle;
