// import cover from "../assets/Manga.jpg"
import { useNavigate } from "react-router-dom";
import webtoonsImages from "../data/webtoonsImages";
import logo from "../assets/logo.svg";
import Cards from './Cards';
import Card from './Card';
import Hero from './Hero';
/*************  ✨ Codeium Command 🌟  *************/
// const webtoons = [
//     { title: 'The Stand I...', author: 'Naya Turtle', image: { cover } },
//     { title: 'Cut Some S...', author: 'divinebina', image: { cover } },
//     { title: 'Veil\'s Edge', author: 'LazyFawnLexi', image: { cover } },
//     { title: 'Neo Typical', author: 'MANDY Z', image: { cover } },
//     { title: 'We Can Be', author: 'MANDY Z', image: { cover } },
//     { title: 'We Grow A...', author: 'Flamboyant-King', image: { cover } },
//     { title: 'The Galling ON', author: 'kasat5u', image: { cover } },
//     { title: 'Flightless S', author: 'A Sparrow', image: { cover } },
//     { title: 'The Stand I...', author: 'Naya Turtle' ,image:{cover} },
//     { title: 'Cut Some S...', author: 'divinebina' ,image:{cover} },
//     { title: 'Veil\'s Edge', author: 'LazyFawnLexi'  ,image:{cover}},
//     { title: 'Neo Typical', author: 'MANDY Z'  ,image:{cover}},

//   ] as const;

export default function Main() {
  const navigate = useNavigate(); // Initialize navigate here

  return (
    <>
      <Hero />
      <Cards />
      <Card />
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-7xl font-bold mb-12 text-center">قد يعجبك</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {webtoonsImages.map((webtoon, index) => (
              <div
                key={index}
                className="cursor-pointer bg-white p-6 rounded-lg shadow-md hover:scale-110 duration-500 transition"
                onClick={() => navigate(`/manga/${index}`)} // Use navigate here
              >
                <img
                  src={webtoon.image}
                  alt={webtoon.title}
                  className="rounded-lg w-full"
                />
                <h3 className="text-xl font-bold mt-4">{webtoon.title}</h3>
                <p className="text-sm text-gray-500">{webtoon.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#0d7ea8] text-white py-16 ">
        <div className="container mx-auto px-16">
          <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
            {/* Left Side: Text and Button */}
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0 order-1 text-right">
              <h2 className="text-5xl font-bold mb-4">البحث عن المزيد</h2>
              <p className="text-lg mb-6">
                البحث عن المزيد من القصص المصورة التي تناسب زوقك من رسامينا
              </p>
              <button className="bg-[#a409bf] hover:bg-[#148da1] transition text-white font-bold py-2 px-4 rounded">
                المزيد
              </button>
            </div>

            {/* Right Side: Image Grid */}
            <div className="w-full lg:w-2/3 pr-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {webtoonsImages.map((webtoonImage, index) => (
                  <div key={index} className="w-full">
                    <img
                      src={webtoonImage.image}
                      alt={webtoonImage.title}
                      className="w-full h-auto rounded-lg object-cover bg-white"
                      style={{ aspectRatio: "1 / 1" }} // Makes the images square
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="px-3 py-5 bg-neutral-100 lg:py-10">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="order-2 lg:order-2 flex flex-col text-right">
            <h1 className="text-4xl font-bold md:text-6xl">تريد معرفة المزيد عن المنصة</h1>
            <p className="mt-2 text-sm md:text-lg">
             زر صفحة عن المنصة لمعرفة المزيد
            </p>
            <button className="text-lg md:text-2xl bg-[#148da1] transition duration-1000 text-white py-2 px-5 mt-10 hover:bg-zinc-800">
              المزيد
            </button>
          </div>
          <div className="order-1 lg:order-1">
            <img
              className="h-80 w-80 object-contain lg:w-[500px] lg:h-[500px]"
              src={logo}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
