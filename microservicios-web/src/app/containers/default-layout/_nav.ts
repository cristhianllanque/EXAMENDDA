import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Modulos',
    title: true
  },
  {
   //
  },
  {
    name: 'Tablas',
    url: '/dashboard/setup',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'compra',
        url: '/dashboard/setup/compr'
      },
      {
        name: 'cliente',
        url: '/dashboard/setup/client'
      },
      {
        name: 'productos',
        url: '/dashboard/setup/product'
      },
      {
        name: 'proveedores',
        url: '/dashboard/setup/proveedor'
      }
    ]
  },

  {
    name: 'Asistencia',
    url: '/dashboard/attendance',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Asistencia',
        url: '/dashboard/attendance/attendance'
      }
    ]
  }
];
