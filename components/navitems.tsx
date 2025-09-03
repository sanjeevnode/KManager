import { List, Plus, User } from "lucide-react";
import { JSX } from "react";

export type NavItemType = {
  label: string;
  icon: JSX.Element;
};

export const navItems: NavItemType[] = [
  {
    label: "My Secrets",
    icon: <List className="w-5 h-5 " />,
  },
  {
    label: "New Secret",
    icon: <Plus className="w-5 h-5 " />,
  },
  {
    label: "My Account",
    icon: <User className="w-5 h-5 " />,
  },
];

export function NavItems({ navIndex, setNavIndex }: { navIndex: number; setNavIndex: (idx: number) => void }) {
  return (
    <div className="w-full flex items-center justify-center h-fit">
      {navItems.map((item, idx) => (
        <div
          key={item.label}
          className={`max-w-[150px] w-full space-x-2 p-2 flex items-center justify-center cursor-pointer ${idx === 0 ? 'rounded-l' : ''} ${idx === navItems.length - 1 ? 'rounded-r' : ''} ${navIndex === idx ? 'bg-gradient-to-r from-amber-600 to-orange-500 text-white' : 'bg-gray-50 text-black'}`}
          onClick={() => setNavIndex(idx)}
        >
          {item.icon}
          <span className="">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
