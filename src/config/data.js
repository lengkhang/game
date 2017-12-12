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