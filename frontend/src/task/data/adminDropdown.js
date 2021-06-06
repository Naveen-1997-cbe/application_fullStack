import {
    faUser, faFile, faNewspaper, faShoppingBasket, faBellSlash, faEnvelope, faWarehouse, faGripLines, faGripLinesVertical
   , faOutdent, faIndent, faSyncAlt, faFilePdf, faFileCsv, faDollarSign, faUserCheck, faAngleDoubleDown, faProjectDiagram, 
   faFileInvoice, faFileWord, faFileExcel, faPrescription, faIdBadge, faPaperclip, faUserTie, faFilePowerpoint, faFolderPlus, faChartLine, 
   faCogs, faRupeeSign, faHandsHelping
 } from '@fortawesome/free-solid-svg-icons'
 let dropdown = [
   {
     id: 1,
     name: 'Home',
     path: '/home',
     children: [
       {
         id: 11,
         name: 'Profile',
         path: '/profile',
         icons: faIdBadge
       },
       {
         id: 12,
         name: 'Office Administration',
         path: '/office-administration',
         icons: faUser
       },
       {
         id: 13,
         name: 'Company Policies',
         path: '/company-policies',
         icons: faFile
       }
     ]
   },
   {
     id: 2,
     name: 'Procurement',
     path: '/procurement',
     children: [
       {
         id: 21,
         name: 'Dashboard',
         path: '/dashboard',
         icons: faNewspaper
       },
       {
         id: 22,
         name: 'Local Purchase',
         path: '/local-purchase',
         icons: faShoppingBasket
       },
       {
         id: 23,
         name: 'Purchase order',
         path: '/purchase-order',
         icons: faBellSlash
       },
       {
         id: 24,
         name: 'LOI (Letter of indents)',
         path: '/loi',
         icons: faEnvelope
       }
     ]
   },
   {
     id: 4,
     name: 'Projects',
     path: '/projects',
     children: [
       {
         id: 41,
         name: 'Dashboard',
         path: '/dashboard',
         icons: faNewspaper
       },
       {
         id: 42,
         name: 'Approvals',
         path: '/approvals',
         icons: faFilePdf
       },
       {
         id: 43,
         name: 'Letter Corr',
         path: '/letter-Corr',
         icons: faEnvelope
       },
       {
         id: 44,
         name: 'DWA BOQ',
         path: '/DWA-BOQ',
         icons: faFileCsv
       },
       {
         id: 45,
         name: 'Project Estimates',
         path: '/project-estimates',
         icons: faDollarSign
       },
       {
         id: 46,
         name: 'Work Orders',
         path: '/work-orders',
         icons: faUserCheck
       },
       {
         id: 47,
         name: 'Execution',
         path: '/execution',
         icons: faAngleDoubleDown
       },
       {
         id: 48,
         name: 'Material Indents',
         path: '/material-indents',
         icons: faIndent
       },
       {
         id: 49,
         name: 'Return Indent',
         path: '/return-indent',
         icons: faOutdent
       },
       {
         id: 410,
         name: 'Project Documents',
         path: '/project-documents',
         icons: faFilePdf
       },
       {
         id: 411,
         name: 'Issue Tracker',
         path: '/issue-tracker',
         icons: faProjectDiagram
       },
       {
         id: 412,
         name: 'Billing',
         path: '/billing',
         icons: faFileInvoice
       },
     ]
   },
   {
     id: 5,
     name: 'Sub-Contract',
     path: '/sub-contract',
     children: [
       {
         id: 51,
         name: 'Service BOQ',
         path: '/service-BOQ',
         icons: faFileCsv
       },
       {
         id: 52,
         name: 'Service Orders',
         path: '/service-orders',
         icons: faFileWord
       },
       {
         id: 53,
         name: 'WCC/ Bill Certification',
         path: '/WCC-bill-certification',
         icons: faFilePdf
       },
       {
         id: 54,
         name: 'Reconciliation Report',
         path: '/reconciliation-report',
         icons: faFileExcel
       },
       {
         id: 55,
         name: 'Settelment Report',
         path: '/settelment-report',
         icons: faPrescription
       }
     ]
   },
   {
     id: 6,
     name: 'Accounts',
     path: '/accounts',
     children: [
       {
         id: 61,
         name: 'DC waiting',
         path: '/dc-waiting',
         icons: faFilePdf
       },
       {
         id: 62,
         name: 'DC All',
         path: '/dc-all',
         icons: faPrescription
       }
     ]
   },
   {
     id: 7,
     name: 'HR & Payroll',
     path: '/hr-payroll',
     children: [
       {
         id: 71,
         name: '',
         path: '/hr-payroll'
       }
     ]
   },
   {
     id: 8,
     name: 'Analytics',
     path: '/analytics',
     children: [
       {
         id: 81,
         name: '',
         path: '/analytics'
       }
     ]
   },
   {
     id: 9,
     name: 'Admin Settings',
     path: '/admin-settings',
     children: [
       {
         id: 91,
         name: 'User management',
         path: '/user-management',
         icons: faUserTie
       },
       {
         id: 92,
         name: 'Product Category',
         path: '/product-category',
         icons: faPaperclip
       },
       {
         id: 93,
         name: 'UOM',
         path: '/UOM',
         icons: faPrescription
       },
       {
         id: 94,
         name: 'Materials',
         path: '/materials',
         icons: faIndent
       },
       {
         id: 95,
         name: 'Customers',
         path: '/customers',
         icons: faUserTie
       },
       {
         id: 96,
         name: 'Project Utils',
         path: '/project-utils',
         icons: faFilePowerpoint
       },
       {
         id: 97,
         name: 'Add Project',
         path: '/add-project',
         icons: faFolderPlus
       },
       {
         id: 98,
         name: 'Supply Vendors',
         path: '/supply-vendors',
         icons: faChartLine
       },
       {
         id: 99,
         name: 'Service Vendors',
         path: '/service-vendorst',
         icons: faCogs
       },
       {
         id: 910,
         name: 'Vendor rate contracts',
         path: '/vendor-rate-contracts',
         icons: faRupeeSign
       },
       {
         id: 911,
         name: 'Warehouses',
         path: '/admin-warehouses',
         icons: faWarehouse
       },
       {
         id: 912,
         name: 'Help',
         path: '/help',
         icons: faHandsHelping
       },
     ]
   },
 ];
 
 export default dropdown;