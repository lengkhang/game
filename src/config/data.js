export const CUSTOMER_SATISFACTION = {
  ANGRY: -1,
  CONTEND: 0,
  HAPPY: 1
};

export default {
  customer: {
    A: {
      name: 'A',
      satisfaction: CUSTOMER_SATISFACTION.CONTEND,
      avatars: {
        '-1': require("../static/images/icon/happy.png"),
        '0': require("../static/images/icon/contend.png"),
        '1': require("../static/images/icon/happy.png")
      }
    },
    B: {
      name: 'B',
      satisfaction: CUSTOMER_SATISFACTION.CONTEND,
      avatars: {
        '-1': require("../static/images/icon/happy.png"),
        '0': require("../static/images/icon/contend.png"),
        '1': require("../static/images/icon/happy.png")
      }
    },
    C: {
      name: 'C',
      satisfaction: CUSTOMER_SATISFACTION.CONTEND,
      avatars: {
        '-1': require("../static/images/icon/happy.png"),
        '0': require("../static/images/icon/contend.png"),
        '1': require("../static/images/icon/happy.png")
      }
    }
  },
  ingredients: [
    { id: 'egg' },
    { id: 'avacado' },
    { id: 'mushroom' },
    { id: 'bread' }
  ],
  menu: [
    1: {
      ingredients: ['egg', 'bread', 'mushroom'],
      image: '...'
    },
    2: {
      ingredients: ['avacado', 'bread'],
      image: '...'
    }
  ],
  customerHappiness: {
    happy: {
      image: '...'
    },
    contend: {
      image: '...'
    },
    angry: {
      image: '...'
    }
  }
};