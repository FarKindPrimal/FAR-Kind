export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-serif">
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="FAR Kind Logo" className="h-10 w-10 object-contain" />
          <span className="text-xl font-bold tracking-tight">FAR Kind</span>
        </div>
        <div className="space-x-4 hidden sm:block">
          <a href="#" className="hover:underline">Home</a>
          <a href="#shop" className="hover:underline">Shop</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#cart-section" className="hover:underline">Cart</a>
        </div>
      </nav>
      <main className="flex items-center justify-center h-[80vh] text-3xl">
        Welcome to FAR Kind 🌱
      </main>
    </div>
  );
}
