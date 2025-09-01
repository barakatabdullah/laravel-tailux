import { dashboards } from "./dashboards";
import { NAV_TYPE_ITEM, NAV_TYPE_ROOT } from '@/constants/app.constant.js';
import DashboardsIcon from '@/assets/dualicons/dashboards.svg?react'
import { HomeIcon } from '@heroicons/react/24/outline/index.js';

export const navigation = [
    // dashboards,
    {
        id: 'dashboards',
        type: NAV_TYPE_ROOT,
        path: '/',
        title: 'Dashboard',
        transKey: 'nav.dashboards.dashboards',
        Icon: DashboardsIcon,
        childs: [
            {
                id: 'dashboard.home',
                path: '/',
                type: NAV_TYPE_ITEM,
                title: 'Home',
                transKey: 'nav.dashboards.home',
                Icon: HomeIcon,
            },

        ]
    }
]

export { baseNavigation } from './baseNavigation'
