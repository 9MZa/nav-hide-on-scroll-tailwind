import { useState, useEffect } from "react";

export default function Home() {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(prevScrollPos > currentScrollPos);
        setPrevScrollPos(currentScrollPos);
      };

      //   handle if user is at the top of the page
      if (prevScrollPos < 20) {
        setVisible(true);
      }

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollPos]);

  return (
    <div
      style={{
        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
      }}
    >
      <nav
        className={`navbar fixed left-0 top-0 h-52 w-full transform transition-transform duration-1000 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex h-20 items-center justify-center bg-blue-900 text-white">
          <h1 className="text-2xl font-bold">Navbar</h1>
        </div>
      </nav>

      <div className="min-h-screen max-w-screen-md mx-auto">
        <div className="mt-24">
          <p className="text-2xl font-light text-gray-600">{dummyContent}</p>
          <p className="text-2xl font-light text-gray-600">{dummyContent}</p>
          <p className="text-2xl font-light text-gray-600">{dummyContent}</p>
          <p className="text-2xl font-light text-gray-600">{dummyContent}</p>
        </div>
      </div>
    </div>
  );
}

const dummyContent = `
Pariatur nulla dolore anim ipsum dolore consectetur qui veniam excepteur amet cillum eu. Labore ad ut cupidatat est esse quis nulla ea ullamco laboris tempor. Officia do anim ad magna anim commodo duis sint occaecat consequat excepteur ut fugiat. Mollit Lorem esse adipisicing esse excepteur mollit.

Consequat ipsum duis nulla consequat officia sit esse ex ullamco non excepteur. Elit amet cupidatat sunt dolor proident pariatur ullamco cillum ex proident officia eiusmod deserunt excepteur. Culpa sit nisi non amet commodo ea exercitation occaecat do sit sit do.

Non enim fugiat exercitation velit quis dolore duis ad proident magna. Velit excepteur commodo officia duis esse pariatur anim ipsum reprehenderit nulla anim sint nulla. Amet proident fugiat nisi consequat Lorem veniam sint reprehenderit. Commodo ad ipsum excepteur duis aute anim commodo enim non sint. Anim enim consequat occaecat elit Lorem enim sunt sunt proident do veniam.

Nostrud adipisicing veniam ullamco aliquip officia aute eu exercitation in ut. Irure elit enim laborum ex laborum id et elit. Irure nisi occaecat minim culpa voluptate ut. Ipsum sint tempor incididunt sunt ut pariatur qui deserunt tempor in esse culpa laboris.

Laboris ex eiusmod irure adipisicing voluptate elit ipsum laboris et ad. Lorem dolor sunt non sunt magna incididunt Lorem pariatur cupidatat. Eiusmod aute sit cillum nostrud aute quis irure. Deserunt tempor est nulla eu eiusmod. Deserunt ea consectetur aliquip nulla.

Consequat consectetur labore commodo exercitation commodo pariatur proident consequat. Amet dolore non nulla minim id exercitation sint laborum reprehenderit consectetur. Ipsum pariatur nisi irure commodo consectetur adipisicing culpa deserunt deserunt laborum quis ipsum. Non est mollit cillum ut. Tempor id in cillum consequat fugiat. Irure irure elit eu elit.

Magna aute aliqua elit minim do mollit consectetur est officia enim aute. Est eiusmod culpa commodo voluptate id anim dolor. Amet adipisicing enim ullamco aliquip dolore Lorem adipisicing aliqua incididunt velit amet est.

Excepteur esse in eu cupidatat dolore Lorem consequat voluptate. Pariatur ut culpa cillum excepteur enim commodo velit cupidatat ad ea consectetur. In ipsum mollit ea sint laboris commodo ad magna labore. Culpa deserunt et nulla cillum deserunt cupidatat irure exercitation magna. Quis exercitation eu laborum eu nulla officia sit dolore sunt deserunt culpa. Qui labore amet dolor amet culpa dolore incididunt enim pariatur commodo. Pariatur quis veniam occaecat tempor exercitation dolore nulla velit et adipisicing ut consequat deserunt excepteur.

Elit non excepteur aute ipsum ea ex est est incididunt minim laboris. Fugiat tempor velit quis ipsum aute ipsum laboris consequat sint sint velit deserunt adipisicing et. Ut ipsum tempor ullamco laboris fugiat enim minim. Anim nulla tempor in eiusmod minim culpa mollit ullamco exercitation deserunt aliqua. Laboris est irure duis commodo velit consectetur nostrud. Tempor dolore ullamco elit deserunt.

Laboris proident labore enim esse aute consectetur. Enim qui consectetur ea qui Lorem ad dolor proident sunt sunt. Minim non laborum reprehenderit sit adipisicing ad labore dolor.
`;
