"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Mock exam",
          content: "pictures",
          imageUrl:
            "https://images.theconversation.com/files/360064/original/file-20200925-22-vgu7h0.jpg?ixlib=rb-1.1.0&rect=300%2C84%2C4533%2C3076&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "Mock exam database",
          content: "photos",
          imageUrl:
            "https://res.cloudinary.com/cruiseimages/q_auto,f_auto,w_667,ar_4:3,c_fit/cruisingarea/1049112.png",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "Yeah",
          content: "pictures",
          imageUrl:
            "https://images.theconversation.com/files/360064/original/file-20200925-22-vgu7h0.jpg?ixlib=rb-1.1.0&rect=300%2C84%2C4533%2C3076&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "NICE",
          content: "photos",
          imageUrl:
            "https://res.cloudinary.com/cruiseimages/q_auto,f_auto,w_667,ar_4:3,c_fit/cruisingarea/1049112.png",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
