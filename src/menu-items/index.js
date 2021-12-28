// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const items = {
    id: 'menu-items',
    type: 'group',
    children: [
        {
            id: 'admin-panel',
            title: 'Admin Panel',
            type: 'item',
            url: '/admin-panel',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'new-vesting',
            title: 'New Vesting',
            type: 'item',
            url: '/new-vesting',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        }
    ]
};

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [items]
};

export default menuItems;
