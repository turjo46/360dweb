import infrastructure from "../../../../assets/Infrastructure/Infrastructure.png";
const Infrastructure = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-[#00000b] via-[#000c2a] to-[#002550] py-14 font-[Inter]">
      <div className="">
        <h1 className="text-center text-5xl font-bold pb-10 text-gray-200">
          IT INFRASTRUCTURE
        </h1>
        <img src={infrastructure} alt="infrastructure" />
      </div>
    </div>
  );
};

export default Infrastructure;
