import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import a from '../Images/a.jpeg'
import {ImageData} from '../imageData/data'

const themes = [
  { name: 'Light' },
  { name: 'Dark', },
  { name: 'Emerald', },
  { name: 'Pink', },
]

const ToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  useEffect(()=>{console.log(theme,"theme #")},[theme])

  if (!mounted) return null;

  return (
    <div className="p-8 flex justify-between items-center font-bold text-xl bg-th-background-secondary text-th-primary-dark">
    <span>The current theme is: <strong>{theme}</strong></span>
    <div>
      <label htmlFor="theme-select" className="sr-only mr-2">Choose theme:</label>
      <select
        name="theme"
        id="theme-select"
        className="bg-white text-gray-800 border-gray-800 border py-1 px-3"
        onChange={(e) => setTheme(e.currentTarget.value)}
        value={theme}
      >
        <option value="">Select Theme</option>
        {themes.map(t => (
          <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>{t.name}</option>
        )
        )}
      </select>
    </div>
  </div>
  );
};

export default function Home() {
  return (
    <div className="font-sans h-full w-full bg-th-background text-th-primary-dark">
      <ToggleButton />

      <main>
        <div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 bg-th-background">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-th-accent-medium sm:text-4xl">
                SuperCars Blog
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
              </p>
            </div>

            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {
                ImageData?.map((item: any, idx: any) => {
                  return (
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden" key={idx}>
                      <div className="flex-shrink-0">
                        <Image src={item?.img} width={420} height={50} alt="" style={{ objectFit: "cover" }} />
                      </div>
                      <div className="flex-1 bg-th-background-secondary p-6 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-th-accent-medium">
                            <a href="#" className="hover:underline">
                              {item?.tag}
                            </a>
                          </p>
                          <a href="#" className="block mt-2">
                            <p className="text-xl font-semibold">
                              {item?.title}
                            </p>
                            <p className="mt-3 text-base">
                              {item?.description}
                            </p>
                          </a>
                        </div>
                        <div className="mt-6 flex items-center">
                          <div className="ml-3">
                            <p className="text-sm font-medium">
                              <a href="#" className="hover:underline">
                                {item?.footer}
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}