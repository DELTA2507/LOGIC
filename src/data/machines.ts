import type { ImageMetadata } from "astro";

import iplMachine from "../assets/machines/ipl-machine.jpg";
import ipl2Machine from "../assets/machines/ipl2-machine.jpg";
import laserMachine from "../assets/machines/laser-machine.jpg";
import radiofrecuenciaMachine from "../assets/machines/radiofrecuencia-machine.png";
import crioterapiaMachine from "../assets/machines/crioterapia-machine.png";
import ultracavitacionMachine from "../assets/machines/ultracavitacion-machine.jpg";
import picosecondLampMachine from "../assets/machines/picosecond-lamp-machine.jpg";

export interface Machine {
    /** Nombre visible de la máquina (solo el tipo, sin marca ni modelo) */
    name: string;
    image: ImageMetadata;
    /** Etiqueta corta sobre la imagen: tipo de tratamiento */
    category: string;
    /** Una línea: para qué sirve el equipo. Ayuda a identificarlo aunque tenga otro nombre comercial */
    description: string;
    /** Opcional: si no se define, se usa `name` como alt */
    alt?: string;
}

/**
 * Fuente única de verdad para las máquinas.
 * Agregar o quitar un objeto aquí actualiza el landing y el AboutCarousel.
 *
 * ⚠️ category y description son borradores: confirmar con el técnico.
 */
export const machines: Machine[] = [
    {
        name: "IPL",
        image: iplMachine,
        alt: "Equipo IPL Estándar",
        category: "Luz pulsada",
        description: "Depilación, manchas y rejuvenecimiento de la piel.",
    },
    {
        name: "Candela Nordlys (SWT / IPL)",
        image: ipl2Machine,
        alt: "Equipo Candela Nordlys (SWT / IPL)",
        category: "Luz pulsada",
        description: "Equipo de luz pulsada de uso profesional en clínica.",
    },
    {
        name: "Depilación láser",
        image: laserMachine,
        category: "Láser",
        description: "Eliminación progresiva del vello en distintas zonas.",
    },
    {
        name: "Radiofrecuencia",
        image: radiofrecuenciaMachine,
        category: "Facial y corporal",
        description: "Reafirmación de la piel y tratamientos reductores.",
    },
    {
        name: "Crioterapia",
        image: crioterapiaMachine,
        category: "Corporal",
        description: "Tratamientos con frío para grasa localizada.",
    },
    {
        name: "Ultracavitación",
        image: ultracavitacionMachine,
        category: "Corporal",
        description: "Reducción de grasa localizada por ultrasonido.",
    },
    {
        name: "Lámpara Picosecond",
        image: picosecondLampMachine,
        category: "Láser",
        description: "Manchas pigmentarias y eliminación de tatuajes.",
    },
];