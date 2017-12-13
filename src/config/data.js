const CUSTOMER_SATISFACTION = {
  CONTEND: 'contend',
  HAPPY: 'happy',
  ANGRY: 'angry'
};

export default {
  customer: {
    A: {
      name: 'A',
      satisfaction: CUSTOMER_SATISFACTION.CONTEND,
      avatars: {
        'contend': require("../static/images/icon/contend.png"),
        'happy': require("../static/images/icon/happy.png"),
        'angry': require("../static/images/icon/contend.png")
      }
    },
    B: {
      name: 'B',
      satisfaction: CUSTOMER_SATISFACTION.CONTEND,
      avatars: {
        'contend': require("../static/images/icon/contend.png"),
        'happy': require("../static/images/icon/happy.png"),
        'angry': require("../static/images/icon/contend.png")
      }
    },
    C: {
      name: 'C',
      satisfaction: CUSTOMER_SATISFACTION.CONTEND,
      avatars: {
        'contend': require("../static/images/icon/contend.png"),
        'happy': require("../static/images/icon/happy.png"),
        'angry': require("../static/images/icon/contend.png")
      }
    }
  },
  ingredients: [
    { id: 'egg', name: 'egg' },
    { id: 'avacado', name: 'avacado' },
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