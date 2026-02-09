import Image from "next/image";

type ProductCardProps = {
  name: string;
  description: string;
  imageUrl: string;
  className?: string; 
};

export default function ProductCard({
  name,
  description,
  imageUrl,
  className = "", 
}: ProductCardProps) {
  return (
    <div 
      className={`
        bg-white shadow-md overflow-hidden 
        rounded-lg 
        flex flex-col 
        h-full 
        ${className}
      `}
    >
      {/* Immagine - altezza fissa */}
      <div className="relative w-full h-60">
  <Image
    src={imageUrl}
    alt={name}
    fill
    className="object-contain"    // o "object-cover"
  />
</div>

      {/* Contenuto testuale - si espande per riempire lo spazio */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3">{name}</h3>
        
        {/* Descrizione che occupa tutto lo spazio disponibile */}
        <div className="flex-grow"> 
          <p className="text-gray-600 text-sm line-clamp-4">{description}</p>
        </div>
        
       
        {/* <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Scopri di più
        </button> */}
      </div>
    </div>
  );
}