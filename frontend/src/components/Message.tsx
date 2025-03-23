export default function Message() {
  return (
    <div className="w-full flex justify-start items-center space-x-1">
      <div className="h-8 w-8 rounded-full p-2 bg-green-400 justify-center items-center flex">
        <p className="text-sm font-bold text-white">
          E
        </p>
      </div>
      <div className="rounded-r-md rounded-tl-md bg-gray-200 p-2 my-1">
        <p className="text-sm">Hola, ¿cómo estás?</p>
      </div>
    </div>
  );
}