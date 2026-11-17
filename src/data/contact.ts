export interface ContactItem {
    id: "address" | "whatsapp" | "email" | "facebook";
    icon: string;
    title: string;
    description: string;
    /** A dónde lleva el elemento al hacer clic */
    href: string;
    /** true = se abre en pestaña nueva (http/https). mailto: no lo necesita */
    external: boolean;
    /** Color de marca para el hover. Sin valor = hover neutro */
    hoverColor?: string;
}

export const contact: ContactItem[] = [
    {
        id: "address",
        icon: "mdi:location",
        title: "Dirección",
        description: "Barva, Heredia, Santa Lucía\nCosta Rica",
        href: "https://www.google.com/maps?q=10.016738,-84.119899",
        external: true,
    },
    {
        id: "whatsapp",
        icon: "mdi:whatsapp",
        title: "Teléfono",
        description: "+506-8380-2710",
        href: "https://wa.me/50683802710",
        external: true,
        hoverColor: "#25D366",
    },
    {
        id: "email",
        icon: "mdi:email",
        title: "Correo Electrónico",
        description: "carlos.alberto.ugalde@gmail.com",
        href: "mailto:carlos.alberto.ugalde@gmail.com",
        external: false,
        hoverColor: "#EA4335", // rojo Gmail
    },
    {
        id: "facebook",
        icon: "mdi:facebook",
        title: "Facebook",
        description: "LOGIC ST",
        href: "https://www.facebook.com/logic.estetica",
        external: true,
        hoverColor: "#4267B2", // mismo azul que btn-facebook
    },
];