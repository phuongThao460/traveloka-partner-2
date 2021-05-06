import GenerationInformation from '../pages/GenerationInformation'
import PropertyDetail from '../pages/PropertyDetail'

export const SidebarData = [
  {
    key: 1,
    cLinkName: 'slidebar-item css-check',
    cLinkActive: 'slidebar-item slidebar-item--is-active css-check',
    cFlexbox: 'flexbox css-nb',
    cText: 'text css-nb-text',
    cNumber: 'bagde__number bagde__color bagde__pill css-bagde',
    title: 'General Information',
    number: 1,
    path: "/",
    main: () => <GenerationInformation/>,
    exact: true
  },
  {
    key: 2,
    cLinkName: 'slidebar-item css-check',
    cLinkActive: 'slidebar-item slidebar-item--is-active css-check',
    cFlexbox: 'flexbox css-nb',
    cText: 'text css-nb-text',
    cNumber: 'bagde__number bagde__color bagde__pill css-bagde',
    title: 'Property Detail',
    number: 1,
    path: "/propertyDetail",
    main: () => <PropertyDetail/>,
  },
  {
    key: 3,
    cLinkName: 'slideba-item css-check',
    cLinkActive: 'slidebar-item slidebar-item--is-active css-check',
    cFlexbox: 'flexbox css-nb',
    cText: 'text css-nb-text',
    cNumber: 'bagde__number bagde__color bagde__pill css-bagde',
    title: 'Property Facilities',
    number: 1,
    path: "/"
  },
  {
    key: 4,
    cLinkName: 'slidebar-item css-check',
    cLinkActive: 'slidebar-item slidebar-item--is-active css-check',
    cFlexbox: 'flexbox css-nb',
    cText: 'text css-nb-text',
    cNumber: 'bagde__number bagde__color bagde__pill css-bagde',
    title: 'Rooms',
    number: 1,
    path: "/"
  },
  {
    key: 5,
    cLinkName: 'slidebar-item css-check',
    cLinkActive: 'slidebar-item slidebar-item--is-active css-check',
    cFlexbox: 'flexbox css-nb',
    cText: 'text css-nb-text',
    cNumber: 'bagde__number bagde__color bagde__pill css-bagde',
    title: 'Room Facilities',
    number: 1,
    path: "/"
  },
  {
    key: 6,
    cLinkName: 'slidebar-item css-check',
    cLinkActive: 'slidebar-item slidebar-item--is-active css-check',
    cFlexbox: 'flexbox css-nb',
    cText: 'text css-nb-text',
    cNumber: 'bagde__number bagde__color bagde__pill css-bagde',
    title: 'Photos',
    number: 1,
    path: "/"
  },
  {
    key: 7,
    cLinkName: 'slidebar-item css-check',
    cLinkActive: 'slidebar-item slidebar-item--is-active css-check',
    cFlexbox: 'flexbox css-nb',
    cText: 'text css-nb-text',
    cNumber: 'bagde__number bagde__color bagde__pill css-bagde',
    title: 'Payment Information',
    number: 1,
    path: "/"
  }
];