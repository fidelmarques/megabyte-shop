const productsData = [
    {
        'productId': '0',
        'productImg': [
            './src/img/office.png', 'Pacote Microsoft Office 365'
        ],
        'tagContainer': [
            'Software'
        ],
        'itemTitle': 'Licença do Pacote Microsoft Office 365',
        'itemDescription': 'Inclui os seguintes programas: Outlook, Word, Excel, Access e Publisher. Atenção: para ativação, é necessário...',
        'itemPrice': 'R$ 499.00'
    },
    {
        'productId': '1',
        'productImg': [
            './src/img/mouse-corsair-dark-core.webp', 'Mouse Corsair Dark Core'
        ],
        'tagContainer': [
            'Periféricos'
        ],
        'itemTitle': 'Mouse Gamer Sem Fio Corsair Dark Core RGB PRO SE, 18.000DPI',
        'itemDescription': 'O mouse gamer CORSAIR DARK CORE RGB SE usa uma conexão sem fio ultrarrápida de 2,4GHz com responsividade de 1ms, é compatível com o...',
        'itemPrice': 'R$ 725.90'
    },
    {
        'productId': '2',
        'productImg': [
            './src/img/windows-10.png', 'Licença do Microsoft Windows 10'
        ],
        'tagContainer': [
            'SALE', 'Software'
        ],
        'itemTitle': 'Licença do Microsoft Windows 10 Home 64-bits',
        'itemDescription': 'O Windows 10 é familiar e fácil de usar, muito parecido com o Windows 7, incluindo o menu Iniciar. Ele é inicializado e retomado com rapidez...',
        'itemPrice': 'R$ 347.13'
    },
    {
        'productId': '3',
        'productImg': [
            './src/img/kit-upgrade.jpg', 'Kit Upgrade B450M + Ryzen 5 5600x'
        ],
        'tagContainer': [
            'Hardware'
        ],
        'itemTitle': 'Kit Upgrade Asus Prime B450M Gaming/BR + AMD Ryzen 5 5600x',
        'itemDescription': 'Turbine sua máquina com o Kit Upgrade! Produtos com excelente desempenho, faça parte dessa nova família e eleve sua experiência ao máximo, com recursos...',
        'itemPrice': 'R$ 2038.90'
    },
    {
        'productId': '4',
        'productImg': [
            './src/img/placa-de-video.webp', 'Placa de Vídeo Asus GeForce RTX 3090'
        ],
        'tagContainer': [
            'Hardware'
        ],
        'itemTitle': 'Placa de Vídeo Asus, GeForce RTX 3090, Rog Strix, OC, 24GB, GDDR6X',
        'itemDescription': 'A ROG Strix GeForce RTX 3090 foi radicalmente aprimorada para acomodar os impressionantes novos chips Ampere da NVIDIA e para fornecer a próxima...',
        'itemPrice': 'R$ 19139.13'
    },
    {
        'productId': '5',
        'productImg': [
            './src/img/water-cooler.jpg', 'Water Cooler Corsair iCue H115i'
        ],
        'tagContainer': [
            'SALE', 'Hardware'
        ],
        'itemTitle': 'Water Cooler Corsair iCue H115i Elite Capellix',
        'itemDescription': 'O Cooler líquido para CPU CORSAIR iCUE H115i ELITE CAPELLIX oferece um resfriamento potente e silencioso para a sua CPU, com um radiador...',
        'itemPrice': 'R$ 1189.00'
    },
    
    {
        'productId': '6',
        'productImg': [
            './src/img/headset-gamer.jpg', 'Headset Gamer'
        ],
        'tagContainer': [
            'SALE', 'Periféricos'
        ],
        'itemTitle': 'Headset Gamer Havit HV-H2002D, 3.5mm, Drivers 53mm, Preto/Cinza',
        'itemDescription': 'Recomendado para quem quer um par de fones de ouvido acessíveis, o Havit é capaz de fornecer som de qualidade, seja em jogos, aplicativos...',
        'itemPrice': 'R$ 219.00'
    },
    {
        'productId': '7',
        'productImg': [
            './src/img/adobe-creative-cloud.png', 'Adobe Creative Cloud'
        ],
        'tagContainer': [
            'Software'
        ],
        'itemTitle': 'Adobe Creative Cloud (Photoshop, Illustrator, Premiere Pro, etc...)',
        'itemDescription': 'A Creative Cloud é uma coleção com mais de 20 aplicativos para fotografia, vídeo, design, Web, experiência do usuário e redes sociais, além de...',
        'itemPrice': 'R$ 124.00'
    },
    {
        'productId': '8',
        'productImg': [
            './src/img/teclado-corsair-k70.webp', 'Teclado Corsair K70'
        ],
        'tagContainer': [
            'SALE', 'Periféricos'
        ],
        'itemTitle': 'Teclado Mecânico Gamer Corsair K70 RGB, Cherry MX Red, ABNT2',
        'itemDescription': 'O CORSAIR K70 RGB MK.2 é um teclado mecânico para jogos com estrutura em alumínio resistente, teclas 100% CHERRY MX e 8 MB de armazenamento ...',
        'itemPrice': 'R$ 1109.00'
    },
    {
        'productId': '9',
        'productImg': [
            './src/img/mouse-logitech-g903.webp', 'Mouse Logitech G903'
        ],
        'tagContainer': [
            'SALE', 'Periféricos'
        ],
        'itemTitle': 'Mouse Gamer Logitech G903 LIGHTSPEED, 16000 DPI, RGB',
        'itemDescription': 'O Logitech G903 agora incluí o revolucionário sensor HERO 16K, oferecendo rastreamento aprimorado e 10x mais eficiência de energia.',
        'itemPrice': 'R$ 689.90'
    },
    {
        'productId': '10',
        'productImg': [
            './src/img/DaVinci_Resolve_17_logo.png', 'DaVinci Resolve 17'
        ],
        'tagContainer': [
            'Software'
        ],
        'itemTitle': 'DaVinci Resolve 17 - Edição, Cores, Efeitos e Pós de Som Profissionais',
        'itemDescription': 'O DaVinci Resolve é a única solução do mercado que combina edição profissional, correção de cores, efeitos visuais, gráficos em movimento...',
        'itemPrice': 'R$ 2200.00'
    },
    {
        'productId': '11',
        'productImg': [
            './src/img/memoria-corsair-vengeance-ddr4.webp', 'Memória DDR4 Corsair Vengeance'
        ],
        'tagContainer': [
            'SALE', 'Hardware'
        ],
        'itemTitle': 'Memória DDR4 Corsair Vengeance RGB Pro, 16GB (2x8GB) 3200MHz',
        'itemDescription': 'A memória DDR4 VENGEANCE RGB PRO Series da CORSAIR com overclocking ilumina seu PC com luzes RGB dinâmicas multizona enquanto...',
        'itemPrice': 'R$ 699.00'
    }
];