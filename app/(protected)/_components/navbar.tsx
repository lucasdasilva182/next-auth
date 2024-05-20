'use client';

import { UserButton } from '@/components/auth/user-button';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();

  const menus = [
    { title: 'Server', path: '/server' },
    { title: 'Client', path: '/client' },
    { title: 'Admin', path: '/admin' },
    { title: 'Settings', path: '/settings' },
  ];

  return (
    <div className="bg-secondary flex justify-between items-center p-4 rounded-xl max-w-[600px] w-full shadow-sm">
      <div className={`hidden md:flex md:gap-4`}>
        {menus.map((item, idx) => (
          <Button
            key={idx}
            asChild
            variant={pathname === item.path ? 'default' : 'outline'}
          >
            <Link href={item.path}>{item.title}</Link>
          </Button>
        ))}
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="border-none bg-transparent text-foreground hover:text-foreground"
            >
              <MenuIcon />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent className="flex flex-col gap-4 pt-10" side="left">
            {menus.map((item, idx) => (
              <Button
                key={idx}
                asChild
                variant={pathname === item.path ? 'default' : 'outline'}
              >
                <Link href={item.path}>
                  <SheetClose asChild>
                    <span>{item.title}</span>
                  </SheetClose>
                </Link>
              </Button>
            ))}
          </SheetContent>
        </Sheet>
      </div>
      <UserButton />
    </div>
  );
};
