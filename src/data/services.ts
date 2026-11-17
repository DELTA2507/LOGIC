import type { ImageMetadata } from "astro";

import diagnosticImage from "../assets/services/diagnostic.jpg";
import repairImage from "../assets/services/repair.jpg";
import maintenanceImage from "../assets/services/maintenance.jpg";

export interface Service {
    /** Se usa como ancla en la página de servicios: /services#slug */
    slug: string;
    title: string;
    /** Una sola línea */
    description: string;
    image: ImageMetadata;
    /** Punto focal del recorte (CSS object-position). Ej: "70% 50%" */
    imagePosition?: string;
    /** Qué incluye el servicio, de forma puntual (máx. 3-4 puntos) */
    includes: string[];
    /** Límite del servicio: lo que se cotiza aparte */
    notIncluded?: string;
}

export const services: Service[] = [
    {
        slug: "diagnostico",
        title: "Diagnóstico",
        description: "Se revisa y prueba el equipo y se identifica la falla.",
        image: diagnosticImage,
        imagePosition: "60% 50%",
        includes: [
            "Revisión completa del equipo",
            "Pruebas con instrumentos de medición",
            "Explicación de la falla encontrada",
        ],
        notIncluded: "La reparación se cotiza por aparte.",
    },
    {
        slug: "reparacion",
        title: "Reparación",
        description: "Corregimos la falla y dejamos el equipo funcionando.",
        image: repairImage,
        includes: [
            "Reparación de la falla diagnosticada",
            "Cambio de piezas y componentes",
            "Pruebas de funcionamiento al finalizar",
        ],
        notIncluded: "Los repuestos para la reparación se cotizan aparte.",
    },
    {
        slug: "mantenimiento",
        title: "Mantenimiento preventivo",
        description: "Mantén tu equipo estable y evita fallas inesperadas.",
        image: maintenanceImage,
        includes: [
            "Limpieza interna y externa",
            "Revisión de cabezales, cables y conexiones",
            "Calibración y pruebas finales",
        ],
        notIncluded: "Las reparaciones a fallos encontrados se cotizan aparte.",
    },
];