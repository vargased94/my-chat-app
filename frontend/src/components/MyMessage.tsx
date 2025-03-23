export default function MyMessage() {
  return (
    <div className="w-full flex justify-end items-center space-x-1">
      <div className="rounded-l-md rounded-tr-md bg-gray-200 p-2 my-1">
        <p className="text-sm">Hola, ¿cómo estás?</p>
      </div>
      <div className="h-8 w-8 rounded-full p-2 bg-blue-500 justify-center items-center flex">
        <p className="text-sm font-bold text-white">E</p>
      </div>
    </div>
  );
}
