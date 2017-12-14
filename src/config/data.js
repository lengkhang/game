export const CUSTOMER_SATISFACTION = {
  ANGRY: -2,
  WARNING: -1,
  CONTEND: 0,
  HAPPY: 1
};

export const INITIAL_START_TIME = 180;

export default {
  customer: {
    A: {
      name: 'A',
      satisfaction: CUSTOMER_SATISFACTION.CONTEND,
      avatars: {
        '-2': require("../static/images/customer_1/customer1_mood4SVG.svg"),
        '-1': require("../static/images/customer_1/customer1_mood3SVG.svg"),
        '0': require("../static/images/customer_1/customer1_mood2SVG.svg"),
        '1': require("../static/images/customer_1/customer1_happySVG.svg")
      },
      lastSatisfactionChangedTime: INITIAL_START_TIME
    },
    B: {
      name: 'B',
      satisfaction: CUSTOMER_SATISFACTION.CONTEND,
      avatars: {
        '-2': require("../static/images/customer_2/customer2_mood4SVG.svg"),
        '-1': require("../static/images/customer_2/customer2_mood3SVG.svg"),
        '0': require("../static/images/customer_2/customer2_mood2SVG.svg"),
        '1': require("../static/images/customer_2/customer2_happySVG.svg")
      },
      lastSatisfactionChangedTime: INITIAL_START_TIME
    },
    C: {
      name: 'C',
      satisfaction: CUSTOMER_SATISFACTION.CONTEND,
      avatars: {
        '-2': require("../static/images/customer_3/customer3_mood4SVG.svg"),
        '-1': require("../static/images/customer_3/customer3_mood3SVG.svg"),
        '0': require("../static/images/customer_3/customer3_mood2SVG.svg"),
        '1': require("../static/images/customer_3/customer3_happySVG.svg")
      },
      lastSatisfactionChangedTime: INITIAL_START_TIME
    },
    D: {
      name: 'D',
      satisfaction: CUSTOMER_SATISFACTION.CONTEND,
      avatars: {
        '-2': require("../static/images/customer_4/customer4_mood4SVG.svg"),
        '-1': require("../static/images/customer_4/customer4_mood3SVG.svg"),
        '0': require("../static/images/customer_4/customer4_mood2SVG.svg"),
        '1': require("../static/images/customer_4/customer4_happySVG.svg")
      },
      lastSatisfactionChangedTime: INITIAL_START_TIME
    }
  },
  ingredients: [
    { id: 'egg', name: 'egg', image: require("../static/images/icon/egg.svg") },
    { id: 'bread', name: 'bread', image: require("../static/images/icon/toast.svg") },
    { id: 'mushroom', name: 'mushroom', image: require("../static/images/icon/mushroom.svg") },
    { id: 'avocado', name: 'avocado', image: require("../static/images/icon/avo.svg") }
  ],
  menu: {
    m1: {
      id: 1,
      name: 'Avo taost with egg',
      ingredients: ['egg', 'bread', 'avocado'],
      image: require('../static/images/icon/Avo_Egg_Toast_order.svg')
    },
    m2: {
      id: 2,
      name: 'Avo taost with mushroom',
      ingredients: ['avocado', 'bread', 'mushroom'],
      image: require('../static/images/icon/Avo__Mushroom_Toast_order.svg')
    },
    m3: {
      id: 3,
      name: 'Avo taost',
      ingredients: ['avocado', 'bread'],
      image: require('../static/images/icon/Avo_Toast_order.svg')
    },
    m4: {
      id: 4,
      name: 'Avo taost with egg and mushroom',
      ingredients: ['avocado', 'bread', 'egg', 'mushroom'],
      image: require('../static/images/icon/Avo_Egg__Mushroom_Toast_order.svg')
    },
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