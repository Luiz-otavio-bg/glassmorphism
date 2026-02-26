
"use client";

interface NavbarProps{
    onNavHover: (isHovering: boolean) => void;
}

export default function Navbar({ onNavHover }: NavbarProps) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <nav 
        onMouseEnter={() => onNavHover(true)}
        onMouseLeave={() => onNavHover(false)}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-full max-w-4xl px-12 py-1 flex justify-between items-center">
      
      <div className="font-lemon text-xl text-white cursor-pointer" onClick={() => scrollTo('home')}>
        BG
      </div>

     
      <div className="flex gap-8">
        {['home', 'about', 'contact us'].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item.replace(" ", ""))}
            className="font-sans text-sm font-medium text-white/70 hover:text-white transition-all capitalize tracking-wide"
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}