import { ServiceCategory } from '@/types';

export const ServiceCategories: Record<ServiceCategory, {
  name: string;
  description: string;
  icon: string;
  color: string;
}> = {
  plumbing: {
    name: 'Plomería',
    description: 'Instalación y reparación de tuberías, grifos y sistemas de agua',
    icon: 'wrench',
    color: '#06b6d4',
  },
  electrical: {
    name: 'Electricidad',
    description: 'Instalaciones eléctricas, reparación de cables y enchufes',
    icon: 'zap',
    color: '#f59e0b',
  },
  hvac: {
    name: 'Climatización',
    description: 'Aire acondicionado, calefacción y ventilación',
    icon: 'thermometer',
    color: '#22c55e',
  },
  carpentry: {
    name: 'Carpintería',
    description: 'Muebles, repisas, reparación de madera',
    icon: 'hammer',
    color: '#8b5cf6',
  },
  painting: {
    name: 'Pintura',
    description: 'Pintura de interiores y exteriores, decoración',
    icon: 'paintbrush',
    color: '#ef4444',
  },
  cleaning: {
    name: 'Limpieza',
    description: 'Limpieza profunda, mantenimiento y desinfección',
    icon: 'sparkles',
    color: '#06b6d4',
  },
  appliance_repair: {
    name: 'Electrodomésticos',
    description: 'Reparación de heladeras, lavarropas, hornos',
    icon: 'microwave',
    color: '#6b7280',
  },
  landscaping: {
    name: 'Jardinería',
    description: 'Cuidado de jardines, poda y mantenimiento de plantas',
    icon: 'leaf',
    color: '#22c55e',
  },
  security: {
    name: 'Seguridad',
    description: 'Instalación de alarmas, cámaras y sistemas de seguridad',
    icon: 'shield',
    color: '#1e3a8a',
  },
  general_maintenance: {
    name: 'Mantenimiento General',
    description: 'Reparaciones menores y mantenimiento preventivo',
    icon: 'settings',
    color: '#6b7280',
  },
};

export const getServiceCategoryInfo = (category: ServiceCategory) => {
  return ServiceCategories[category];
};

export const getAllServiceCategories = () => {
  return Object.entries(ServiceCategories).map(([key, value]) => ({
    id: key as ServiceCategory,
    ...value,
  }));
};