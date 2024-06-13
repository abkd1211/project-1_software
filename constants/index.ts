
import {  LayoutDashboard, ListTodo, Coins, CircleUserRound, Cog } from 'lucide-react';


interface SidebarLink {
    label: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    route: string;
  }

export const sidebarLinks: SidebarLink[] = [
    {
        
        label: 'Dashboard',
        route: '/dashboard',
        icon: LayoutDashboard
    },

    {
        label: 'Registration',
        route: '/registration',
        icon: ListTodo
    },

    {
        label: 'Fee Payment',
        route: '/registration/pay-fees',
        icon: Coins
    },

    {
        label: 'Account',
        route: '/account',
        icon: CircleUserRound
    },

    {
        label: 'Settings',
        route: '/settings',
        icon: Cog 
    }
    
    
]

