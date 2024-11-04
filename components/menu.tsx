import Link from 'next/link';
import { Card, CardContent } from './ui/card';
import { LucideIcon } from 'lucide-react';

type MenuItem = {
  name: string;
  icon: LucideIcon,
  href: string;
};


export default function Menu({ menuItems }: { menuItems: MenuItem[] }) {
  return (
    <>
      {menuItems.map((item) => (
        <Link key={item.name} href={item.href} passHref>
          <Card className="group hover:bg-primary/5 transition-colors cursor-pointer">
            <CardContent className="p-6 flex flex-col items-center justify-center h-32">
              <item.icon
                size={48}
                className="mb-2 text-primary group-hover:text-primary/80 transition-colors"
              />
              <span className="text-sm font-medium">{item.name}</span>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
};

