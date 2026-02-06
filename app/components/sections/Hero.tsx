type HeroProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
};

export const metadata = {
  title: "Chi sono",
  description:
    "C.F.S. Caldaie di Aldo Trussardi",
};

export default function Hero({ title, subtitle, imageUrl}: HeroProps) {
  return (
    
<section
  className="py-20 px-6 max-w-7xl mx-auto max-h-[500px] h-[50vh] bg-cover bg-center flex items-center"
  style={{ backgroundImage: `url(${imageUrl})` }}
>
  <div className="bg-black/50 p-8 text-white max-w-xl ml-10">
    <h2 className="text-4xl font-bold mb-4">{title}</h2>
    <p className="text-lg">{subtitle}</p>
  </div>
</section>


  );
}
