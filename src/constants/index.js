import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "Sobre" },
    { href: "#products", label: "Produtos" },
    { href: "#contact-us", label: "Fale conosco" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Marcas' },
    { value: '500+', label: 'Compras' },
    { value: '250k+', label: 'Clientes' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "R$350.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "R$420.80",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "R$320.00",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "R$290.99",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Envio Grátis",
        subtext: "Desfrute de compras perfeitas com nosso serviço de remessa gratuita."
    },//
    {
        imgURL: shieldTick,
        label: "Pagamento Seguro",
        subtext: "Experimente transações sem preocupações com nossas opções de pagamento seguro."
    },
    {
        imgURL: support,
        label: "Suporte",
        subtext: "Nossa equipe dedicada está aqui para ajudá-lo em cada etapa do caminho."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Marcos Andrade',
        rating: 4.5,
        feedback: "A atenção aos detalhes e a qualidade do produto exederam minhas expectativas. Altamente recomendável!"
        
    },
    {
        imgURL: customer2,
        customerName: 'Fernanda Martins',
        rating: 4.5,
        feedback: "O produto não somente casou, mas excedeu minhas expectativas. Eu definitivamente serei uma cliente!"
        
    }
];


export const footerLinks = [
    {
        title: "Produtos",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Suporte",
        links: [
            { name: "Sobre Nós", link: "/" },
            { name: "Sac", link: "/" },
            { name: "Como funciona", link: "/" },
            { name: "Política de privacidade", link: "/" },
            { name: "Política de pagamento", link: "/" },
        ],
    },
    {
        title: "Fale conosco",
        links: [
            { name: "cliente@nike.com.br", link: "mailto:cliente@nike.com.br" },
            { name: "+55114862354", link: "tel:+55114862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];