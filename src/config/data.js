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
        '-1': require("../static/images/icon/angry.png"),
        '0': require("../static/images/icon/contend.png"),
        '1': require("../static/images/icon/happy.png")
      },
      lastSatisfactionChangedTime: 300
    },
    B: {
      name: 'B',
      satisfaction: CUSTOMER_SATISFACTION.CONTEND,
      avatars: {
        '-1': require("../static/images/icon/angry.png"),
        '0': require("../static/images/icon/contend.png"),
        '1': require("../static/images/icon/happy.png")
      },
      lastSatisfactionChangedTime: 300
    },
    C: {
      name: 'C',
      satisfaction: CUSTOMER_SATISFACTION.CONTEND,
      avatars: {
        '-1': require("../static/images/icon/angry.png"),
        '0': require("../static/images/icon/contend.png"),
        '1': require("../static/images/icon/happy.png")
      },
      lastSatisfactionChangedTime: 300
    }
  },
  ingredients: [
    { id: 'egg', name: 'egg' },
    { id: 'avocado', name: 'avocado' },
    { id: 'mushroom', name: 'mushroom' },
    { id: 'toast', name: 'toast' }
  ],
  menu: {
    m1: {
      id: 1,
      name: 'Avo taost with egg"',
      ingredients: ['egg', 'bread', 'mushroom'],
      image: '...'
    },
    m2: {
      id: 2,
      name: 'Avo taost with mushroom',
      ingredients: ['avacado', 'bread', 'mushroom'],
      image: '...'
    }
  },
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