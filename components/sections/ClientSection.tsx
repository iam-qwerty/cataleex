// "use client";

// import React, { useCallback, useEffect, useMemo, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { ExternalLink, Globe } from "lucide-react";
// import { cn } from "@/lib/utils";

// interface Client {
//   id: number;
//   name: string;
//   logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
//   website: string;
//   description?: string;
// }

// interface ClientColumnProps {
//   clients: Client[];
//   index: number;
//   currentTime: number;
// }

// const shuffleArray = <T,>(array: T[]): T[] => {
//   const shuffled = [...array];
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//   }
//   return shuffled;
// };

// const distributeClients = (allClients: Client[], columnCount: number): Client[][] => {
//   const shuffled = shuffleArray(allClients);
//   const columns: Client[][] = Array.from({ length: columnCount }, () => []);

//   shuffled.forEach((client, index) => {
//     columns[index % columnCount].push(client);
//   });

//   const maxLength = Math.max(...columns.map((col) => col.length));
//   columns.forEach((col) => {
//     while (col.length < maxLength) {
//       col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
//     }
//   });

//   return columns;
// };

// const ClientColumn: React.FC<ClientColumnProps> = React.memo(
//   ({ clients, index, currentTime }) => {
//     const cycleInterval = 3000;
//     const columnDelay = index * 300;
//     const adjustedTime = (currentTime + columnDelay) % (cycleInterval * clients.length);
//     const currentIndex = Math.floor(adjustedTime / cycleInterval);
//     const currentClient = clients[currentIndex];
//     const CurrentLogo = useMemo(() => currentClient.logo, [currentClient]);

//     return (
//       <motion.div
//         className="relative h-32 w-full overflow-hidden rounded-xl border border-border bg-background/50 backdrop-blur-sm"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: index * 0.1,
//           duration: 0.5,
//           ease: "easeOut",
//         }}
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={`${currentClient.id}-${currentIndex}`}
//             className="absolute inset-0 flex flex-col items-center justify-center p-4 group cursor-pointer"
//             initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
//             animate={{
//               y: "0%",
//               opacity: 1,
//               filter: "blur(0px)",
//               transition: {
//                 type: "spring",
//                 stiffness: 300,
//                 damping: 20,
//                 mass: 1,
//                 bounce: 0.2,
//                 duration: 0.5,
//               },
//             }}
//             exit={{
//               y: "-20%",
//               opacity: 0,
//               filter: "blur(6px)",
//               transition: {
//                 type: "tween",
//                 ease: "easeIn",
//                 duration: 0.3,
//               },
//             }}
//             onClick={() => window.open(currentClient.website, '_blank')}
//           >
//             <div className="relative mb-3 transition-transform duration-300 group-hover:scale-110">
//               <CurrentLogo className="h-12 w-12 text-foreground" />
//             </div>
            
//             <div className="text-center">
//               <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
//                 {currentClient.name}
//               </h3>
              
//               <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <Globe className="h-3 w-3" />
//                 <span>Visit Website</span>
//                 <ExternalLink className="h-3 w-3" />
//               </div>
//             </div>

//             <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </motion.div>
//         </AnimatePresence>
//       </motion.div>
//     );
//   }
// );

// interface ClientShowcaseProps {
//   columnCount?: number;
//   clients: Client[];
//   title?: string;
//   subtitle?: string;
// }

// function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="209"
//       height="256"
//       viewBox="0 0 814 1000"
//       {...props}
//     >
//       <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
//     </svg>
//   );
// }

// function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 488 512"
//       {...props}
//     >
//       <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h240z"/>
//     </svg>
//   );
// }

// function MicrosoftIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 448 512"
//       {...props}
//     >
//       <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/>
//     </svg>
//   );
// }

// function NetflixIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 448 512"
//       {...props}
//     >
//       <path d="M400.5 32.5L448 0v96l-47.5 32.5V32.5zM224 96L0 480V32L224 96zm224 0v384L224 96l224 0z"/>
//     </svg>
//   );
// }

// function SpotifyIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 496 512"
//       {...props}
//     >
//       <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/>
//     </svg>
//   );
// }

// function AirbnbIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 448 512"
//       {...props}
//     >
//       <path d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-49.13 0-56.27 3.93-185.11 278.23C-2.97 369.63 14.23 404.17 58.81 409.5c52.26 6.25 85.24-68.59 120.25-73.27 9.84-1.31 19.5 2.59 27.98 10.28 34.36 31.05 68.74 50.47 119.3 50.47 52.15 0 86.64-18.31 119.3-50.47 8.48-7.69 18.14-11.59 27.98-10.28 35.01 4.68 68-79.52 120.25-73.27 44.58-5.33 61.78-39.87 20.92-99.27z"/>
//     </svg>
//   );
// }

// function UberIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 448 512"
//       {...props}
//     >
//       <path d="M414.1 32H33.9C15.2 32 0 47.2 0 65.9v380.2C0 464.8 15.2 480 33.9 480h380.2c18.7 0 33.9-15.2 33.9-33.9V65.9C448 47.2 432.8 32 414.1 32zM237.6 391.1C163 398.6 96.4 344.2 88.9 269.6h91.1v-45.7H88.9c7.5-74.6 74.1-129 148.7-121.5 55.7 5.6 101.8 51.7 107.4 107.4v60.2c0 25.2-20.4 45.7-45.7 45.7h-61.8v75.4z"/>
//     </svg>
//   );
// }

// function SlackIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 448 512"
//       {...props}
//     >
//       <path d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 244.96 0 223.8 0 197.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V197.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V80.06C283.1 54.16 304.26 33 330.16 33s47.06 21.16 47.06 47.06V197.9zm-47.06 188.98c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H330.16z"/>
//     </svg>
//   );
// }

// function TeslaIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 448 512"
//       {...props}
//     >
//       <path d="M224 32C100.3 32 0 132.3 0 256s100.3 224 224 224 224-100.3 224-224S347.7 32 224 32zm0 384c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm0-288c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm0 224c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"/>
//     </svg>
//   );
// }

// export function ClientShowcase({ 
//   columnCount = 3, 
//   clients,
//   title = "Trusted by Industry Leaders",
//   subtitle = "Join thousands of companies that trust us with their success"
// }: ClientShowcaseProps) {
//   const [clientColumns, setClientColumns] = useState<Client[][]>([]);
//   const [time, setTime] = useState(0);

//   const updateTime = useCallback(() => {
//     setTime((prevTime) => prevTime + 100);
//   }, []);

//   useEffect(() => {
//     const intervalId = setInterval(updateTime, 100);
//     return () => clearInterval(intervalId);
//   }, [updateTime]);

//   useEffect(() => {
//     const distributedClients = distributeClients(clients, columnCount);
//     setClientColumns(distributedClients);
//   }, [clients, columnCount]);

//   return (
//     <section className="py-24 px-4 bg-gradient-to-br from-background via-background to-muted/20">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
//               {title}
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               {subtitle}
//             </p>
//           </motion.div>
//         </div>

//         <div className={cn(
//           "grid gap-6 mx-auto",
//           columnCount === 2 && "grid-cols-1 md:grid-cols-2 max-w-2xl",
//           columnCount === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-4xl",
//           columnCount === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl"
//         )}>
//           {clientColumns.map((columnClients, index) => (
//             <ClientColumn
//               key={index}
//               clients={columnClients}
//               index={index}
//               currentTime={time}
//             />
//           ))}
//         </div>

//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 0.6 }}
//         >
//           <p className="text-sm text-muted-foreground">
//             Click on any client to visit their website
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// const sampleClients: Client[] = [
//   {
//     id: 1,
//     name: "Apple",
//     logo: AppleIcon,
//     website: "https://apple.com",
//     description: "Technology innovation leader"
//   },
//   {
//     id: 2,
//     name: "Google",
//     logo: GoogleIcon,
//     website: "https://google.com",
//     description: "Search and cloud services"
//   },
//   {
//     id: 3,
//     name: "Microsoft",
//     logo: MicrosoftIcon,
//     website: "https://microsoft.com",
//     description: "Software and cloud computing"
//   },
//   {
//     id: 4,
//     name: "Netflix",
//     logo: NetflixIcon,
//     website: "https://netflix.com",
//     description: "Streaming entertainment"
//   },
//   {
//     id: 5,
//     name: "Spotify",
//     logo: SpotifyIcon,
//     website: "https://spotify.com",
//     description: "Music streaming platform"
//   },
//   {
//     id: 6,
//     name: "Airbnb",
//     logo: AirbnbIcon,
//     website: "https://airbnb.com",
//     description: "Travel and hospitality"
//   },
//   {
//     id: 7,
//     name: "Uber",
//     logo: UberIcon,
//     website: "https://uber.com",
//     description: "Transportation technology"
//   },
//   {
//     id: 8,
//     name: "Slack",
//     logo: SlackIcon,
//     website: "https://slack.com",
//     description: "Business communication"
//   },
//   {
//     id: 9,
//     name: "Tesla",
//     logo: TeslaIcon,
//     website: "https://tesla.com",
//     description: "Electric vehicles and energy"
//   }
// ];

// function ClientShowcaseDemo() {
//   return (
//     <div className="min-h-screen bg-background">
//       <ClientShowcase 
//         clients={sampleClients}
//         columnCount={3}
//         title="Our Amazing Clients"
//         subtitle="We're proud to work with these incredible brands that trust us with their digital transformation"
//       />
//     </div>
//   );
// }

// export default ClientShowcaseDemo;
