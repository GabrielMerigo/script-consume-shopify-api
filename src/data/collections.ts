import { PRODUCT_TITLE_SELECTOR } from '../constants';
import { Collections, SizeTypes } from '../types';

export const collections: Collections = {
  blusoes: {
    id: 460110201136,
    urlHandle: '/inverno/blusa-de-frio',
    title: 'Blusões',
    sizeType: SizeTypes.SHIRT_LETTER,
    productPrice: '159.90',
    productBodyHtml: `Apresentamos o nosso mais recente blusão de inverno, uma peça essencial para o seu guarda-roupa.\n\n**Design Elegante**: Com um design moderno e elegante, este blusão é perfeito para mantê-lo aquecido e com estilo.\n\n**Tecido Quente e Confortável**: Fabricado com materiais de alta qualidade, o tecido proporciona calor e conforto em dias frios.\n\n**Versatilidade de Uso**: Adequado para diversas ocasiões, desde passeios casuais até aventuras ao ar livre.\n\nAdquira o seu blusão agora e esteja preparado para enfrentar o inverno com estilo e conforto.`
  },
  'calcas-jeans': {
    id: 457581003056,
    urlHandle: '/calcas/calca-jeans',
    title: 'Calças Jeans',
    sizeType: SizeTypes.PANTS_NUMBER,
    productPrice: '189.90',
    productBodyHtml: `Apresentamos a icônica {{PRODUCT_TITLE_SELECT$O}:\n\nTecido durável: Fabricada em jeans de alta qualidade, proporcionando durabilidade.\n\nEsta calça é a fusão perfeita entre moda, conforto e consciência ambiental. Seja para ocasiões casuais ou encontros, a ${PRODUCT_TITLE_SELECTOR} oferece estilo e qualidade excepcionais.`
  },
  'calcas-sarja': {
    id: 458204807472,
    urlHandle: '/calcas/calca-sarja',
    title: 'Calças Sarja',
    sizeType: SizeTypes.PANTS_NUMBER,
    productPrice: '199.90',
    productBodyHtml: `Apresentamos a icônica {{PRODUCT_TITLE_SELECT$O}:\n\nTecido Durável: Fabricada com sarja de alta qualidade, garantindo resistência e longevidade.\n\nEsta calça é a fusão perfeita entre moda, conforto e consciência ambiental. Seja para ocasiões casuais ou encontros, a ${PRODUCT_TITLE_SELECTOR} oferece estilo e qualidade excepcionais. Com sua sarja de alta durabilidade, você estará pronto para enfrentar qualquer desafio com um toque de elegância.`
  },
  'camisas-sociais': {
    id: 457100296496,
    urlHandle: 'camisas/camisa-manga-longa',
    title: 'Camisas Sociais',
    sizeType: SizeTypes.SHIRT_LETTER,
    productPrice: '229.90',
    productBodyHtml: `Experiencie o luxo discreto com a {{PRODUCT_TITLE_SELECT$O}. Cada costura é um testemunho da qualidade impecável e atenção aos detalhes que a marca representa. Seja para um evento especial ou uma ocasião formal, esta camisa é um símbolo de sofisticação minimalista. Vista a excelência.`
  },
  camisetas: {
    id: 457099477296,
    urlHandle: '/camisetas/camisetas-importadas',
    title: 'Camisetas',
    sizeType: SizeTypes.SHIRT_LETTER,
    productPrice: '89.90',
    productBodyHtml: `Apresentamos ${PRODUCT_TITLE_SELECTOR} uma peça de moda importada que combina estilo e qualidade. Com estampa no busto, gola redonda, manga longa e barra reta, essa camiseta é a escolha perfeita para qualquer ocasião.\n\nCaracterísticas Principais:\n\n- Camiseta Manga Longa Importada: Importada para garantir qualidade internacional.\n- Estampa no Busto: Detalhe elegante que acrescenta sofisticação ao seu look.\n- Gola Redonda: Clássica e versátil, perfeita para combinar com diferentes peças.\n- Manga Longa e Barra Reta: Adequada para todas as estações e situações.\n- Modelagem Custom Slim Fit: Ajuste perfeito ao corpo para um visual elegante.\n- Tecido 40.1: Feita de algodão com elastano para conforto e durabilidade.\n\nVista-se com elegância e qualidade. Adquira a Camiseta Armani Preta agora e eleve o seu estilo a outro nível!`
  },
  polos: {
    id: 457095774512,
    urlHandle: '/polos',
    title: 'Polos',
    sizeType: SizeTypes.SHIRT_LETTER,
    productPrice: '139.90',
    productBodyHtml: `Apresentamos a ${PRODUCT_TITLE_SELECTOR}, uma combinação impecável de estilo e qualidade.\n\nCaracterísticas:\n\nModelagem: Custom Fit, proporcionando um caimento sob medida que se adapta confortavelmente ao corpo.\n\nTecido: Confeccionada em piquet 100% algodão, oferecendo um toque suave e agradável à pele.\n\nFio 30: A utilização do fio 30 confere durabilidade e resistência à peça, garantindo que ela mantenha sua elegância ao longo do tempo.\n\nCor Vermelha: Um tom vibrante que adiciona sofisticação e destaque ao seu visual.\n\nDetalhes de Qualidade: Os acabamentos refinados e a atenção aos detalhes tornam esta camisa polo uma escolha que exala classe.\n\nA ${PRODUCT_TITLE_SELECTOR} é uma fusão perfeita entre conforto e estilo, tornando-a uma peça versátil que se encaixa tanto em ocasiões casuais quanto em momentos mais formais. Adicione um toque de elegância atemporal ao seu guarda-roupa com esta peça única.`
  }
};
