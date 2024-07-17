import GitHubIcon from "@/app/components/shared/icons/github";
import LinkedinIcon from "@/app/components/shared/icons/linkedin";
import TwitterIcon from "@/app/components/shared/icons/twitter";
import InstaIcon from "@/app/components/shared/icons/instagram";

const navigation = {
  product: [
    { name: "Casa de Ferias", href: "https://casadoferias.info" },
    { name: "Aulas de Yoga", href: "/aulas" }
  ],
  resources: [
    { name: "Privacy Policy EU", href: "https://www.termsfeed.com/live/f636382a-1b4b-43de-8cbc-b9dbf4a50aaf" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Blog", href: "https://xani.pt" },
  ],
  mapas: [
    { name: "Casa do Canto", href: "/mapas" },
    { name: "Casa do Canto Source Investors", href: "/mapas" },
    { name: "Investor Database", href: "/mapas" },
    {
      name: "Casa do Canto GPT",
      href: "https://chat.openai.com/g/g-LYDRCiZB9-yc-application-gpt",
    }
  ],
  alternatives: [
    { name: "...", href: "/" }
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/AlexandreXavier",
      icon: () => <GitHubIcon className="h-6 w-6" aria-hidden="true" />,
    },
    {
      name: "X / Twitter",
      href: "https://twitter.com/alexandxavier",
      icon: () => <TwitterIcon className="h-5 w-5" aria-hidden="true" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/alexandre-xavier-967a4a15/",
      icon: () => (
        <LinkedinIcon className="h-5 w-5" color={false} aria-hidden="true" />
      ),
    },
    {
      name: "InstaIcon",
      href: "https://www.instagram.com/yogahouse_portugal_/?locale=pt&hl=am-et",
      icon: () =><InstaIcon className="h-5 w-5" aria-hidden="true" />
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 pb-4 pt-20 md:px-8">
        {" "}
        {/* px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 */}
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
        
            <div className="flex space-x-2">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-md px-2.5 py-1 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-semibold leading-6 text-black">Productos</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="leading-6 text-gray-500 hover:text-black"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-semibold leading-6 text-black">
                  Recursos
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="leading-6 text-gray-500 hover:text-black"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="font-semibold leading-6 text-black">Mapas</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.mapas.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="leading-6 text-gray-500 hover:text-black"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
             
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-black/10 pt-4 sm:mt-20 lg:mt-24">
          <p className="text-sm leading-5 text-gray-500">
            &copy; 2024 CasaDoCanto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
