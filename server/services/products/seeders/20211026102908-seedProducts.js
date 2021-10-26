'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {
        name: 'Kaos polos hitam',
        description: 'Kaos polos bahan tipis warna hitam',
        imgUrl: 'https://cf.shopee.co.id/file/e7e4fc1cd889153622715774b0193f54',
        stock: 50,
        type: 'T-Shirt',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jacket jeans',
        description: 'jacket jeans warna biru',
        imgUrl: 'https://cf.shopee.co.id/file/a1b6d4318291abac69296d12e379a133',
        stock: 11,
        type: 'Jacket',
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jacket hoodie polos',
        description: 'jacket hoodie hitam polos bahan tebal',
        imgUrl: 'https://ae01.alicdn.com/kf/HTB1MEQxxkCWBuNjy0Faq6xUlXXax/Bahasa-Rusia-dengan-Harga-Murah-Hoodie-Pria-Wanita-Anak-Laki-laki-Sweatshirt-Berkerudung-Hoody-Solid-Pakaian.jpg_Q90.jpg_.webp',
        stock: 30,
        type: 'Jacket',
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Flanel',
        description: 'Flanen bahan adem',
        imgUrl: 'https://cf.shopee.co.id/file/6f9e73603629c803601a6f2cab37c03e',
        stock: 45,
        type: 'Shirt',
        UserId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('Products', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
