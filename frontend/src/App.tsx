import Chat from "@/components/Chat";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg">
        <Chat />
      </div>
    </div>
  );
}

export default App;
