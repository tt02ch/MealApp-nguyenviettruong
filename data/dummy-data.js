export const CATEGORIES = [
  { id: '1', title: 'Món Tráng Miệng', image: require('../assets/categories/trangmieng.jpg') },
  { id: '2', title: 'Món Mặn', image: require('../assets/categories/monman.png') },
  { id: '3', title: 'Món Chay', image: require('../assets/categories/monchay.png') },
  { id: '4', title: 'Nước', image: require('../assets/categories/nuoc.jpg') },
  { id: '5', title: 'Hải Sản', image: require('../assets/categories/haisan.png') },
  { id: '6', title: 'Đồ Ăn Nhanh', image: require('../assets/categories/ff.png') },
];

export const MEALS = [
  // Món Tráng Miệng 1
  {
    id: '1',
    categoryId: '1',
    title: 'Bánh Tiramisu',
    image: require('../assets/meals/teramisu.png'),
    description: 'Bánh tiramisu với lớp kem mềm mịn, hương vị cà phê và rượu rum.',
    duration: 50,
    complexity: 'medium',
    affordability: 'expensive',
    ingredients: ['Bánh ladyfinger', 'Kem mascarpone', 'Cà phê', 'Cacao', 'Rượu rum'],
    steps: ['Chuẩn bị các nguyên liệu', 'Pha trộn kem', 'Lớp bánh và kem', 'Để lạnh trước khi thưởng thức']
  },
  {
    id: '2',
    categoryId: '1',
    title: 'Chè Khúc Bạch',
    image: require('../assets/meals/khuccbach.png'),
    description: 'Chè khúc bạch thanh mát với các viên khúc bạch béo ngậy, hạnh nhân và trái cây.',
    duration: 30,
    complexity: 'simple',
    affordability: 'affordable',
    ingredients: ['Sữa tươi', 'Gelatin', 'Đường', 'Hạnh nhân', 'Trái cây tươi'],
    steps: ['Làm khúc bạch', 'Chuẩn bị chè', 'Thêm hạnh nhân và trái cây']
  },

  // Món Mặn 2
  {
    id: '3',
    categoryId: '2',
    title: 'Thịt Kho Tàu',
    image: require('../assets/meals/thitkhotau.png'),
    description: 'Thịt kho tàu thơm ngon với trứng và nước dừa, hương vị đậm đà.',
    duration: 60,
    complexity: 'medium',
    affordability: 'affordable',
    ingredients: ['Thịt ba chỉ', 'Trứng vịt', 'Nước dừa', 'Nước mắm', 'Đường'],
    steps: ['Kho thịt với nước dừa', 'Thêm trứng', 'Nấu cho đến khi thịt mềm']
  },
  {
    id: '4',
    categoryId: '2',
    title: 'Gà Nướng Mật Ong',
    image: require('../assets/meals/ganuong.png'),
    description: 'Gà nướng với lớp mật ong ngọt dịu, thơm lừng.',
    duration: 45,
    complexity: 'medium',
    affordability: 'expensive',
    ingredients: ['Gà', 'Mật ong', 'Gia vị', 'Chanh'],
    steps: ['Ướp gà', 'Nướng gà', 'Thưởng thức với chanh']
  },

  // Món Chay 3
  {
    id: '5',
    categoryId: '3',
    title: 'Đậu Hũ Sốt Cà',
    image: require('../assets/meals/dauhusotca.png'),
    description: 'Đậu hũ mềm sốt cà chua đậm đà, thích hợp cho bữa ăn chay.',
    duration: 20,
    complexity: 'simple',
    affordability: 'affordable',
    ingredients: ['Đậu hũ', 'Cà chua', 'Hành lá', 'Nước mắm chay'],
    steps: ['Chiên đậu hũ', 'Nấu sốt cà', 'Kết hợp và thưởng thức']
  },
  {
    id: '6',
    categoryId: '3',
    title: 'Rau Cải Xào Tỏi',
    image: require('../assets/meals/raucaixao.png'),
    description: 'Món rau cải xào tỏi giòn ngon, đơn giản mà bổ dưỡng.',
    duration: 10,
    complexity: 'simple',
    affordability: 'affordable',
    ingredients: ['Rau cải', 'Tỏi', 'Dầu ăn', 'Muối'],
    steps: ['Xào rau cải với tỏi', 'Nêm muối và dầu']
  },

  // Nước 4
  {
    id: '7',
    categoryId: '4',
    title: 'Nước Ép Cam',
    image: require('../assets/meals/nuocepcam.png'),
    description: 'Nước ép cam tươi mát, giàu vitamin C.',
    duration: 5,
    complexity: 'simple',
    affordability: 'affordable',
    ingredients: ['Cam tươi', 'Đường', 'Đá viên'],
    steps: ['Ép cam', 'Thêm đường và đá']
  },
  {
    id: '8',
    categoryId: '4',
    title: 'Trà Đào',
    image: require('../assets/meals/tradao.png'),
    description: 'Trà đào ngọt ngào với những lát đào thơm lừng.',
    duration: 10,
    complexity: 'simple',
    affordability: 'affordable',
    ingredients: ['Trà', 'Đào', 'Đường'],
    steps: ['Pha trà', 'Thêm đào và đường']
  },

  // Hải Sản 5
  {
    id: '9',
    categoryId: '5',
    title: 'Tôm Hấp Nước Dừa',
    image: require('../assets/meals/tomhap.png'),
    description: 'Tôm hấp nước dừa thơm lừng, vị ngọt từ dừa thấm vào từng con tôm.',
    duration: 30,
    complexity: 'medium',
    affordability: 'expensive',
    ingredients: ['Tôm', 'Nước dừa', 'Sả'],
    steps: ['Hấp tôm với nước dừa', 'Thưởng thức']
  },
  {
    id: '10',
    categoryId: '5',
    title: 'Mực Xào Hành Tây',
    image: require('../assets/meals/mucxao.png'),
    description: 'Mực xào hành tây giòn giòn, thơm ngon.',
    duration: 20,
    complexity: 'simple',
    affordability: 'affordable',
    ingredients: ['Mực', 'Hành tây', 'Gia vị'],
    steps: ['Xào mực và hành tây', 'Thêm gia vị']
  },

  // Đồ Ăn Nhanh 6
  {
    id: '11',
    categoryId: '6',
    title: 'Khoai Tây Chiên',
    image: require('../assets/meals/khoaitaychien.png'),
    description: 'Khoai tây chiên giòn rụm, món ăn vặt yêu thích.',
    duration: 15,
    complexity: 'simple',
    affordability: 'affordable',
    ingredients: ['Khoai tây', 'Muối', 'Dầu ăn'],
    steps: ['Chiên khoai tây', 'Rắc muối và thưởng thức']
  },
  {
    id: '12',
    categoryId: '6',
    title: 'Hamburger Bò',
    image: require('../assets/meals/hamburger.png'),
    description: 'Hamburger bò với phô mai và rau xanh, ngon miệng.',
    duration: 20,
    complexity: 'simple',
    affordability: 'affordable',
    ingredients: ['Thịt bò', 'Bánh hamburger', 'Phô mai', 'Rau xanh'],
    steps: ['Nướng thịt', 'Kẹp bánh với các thành phần']
  }
];
