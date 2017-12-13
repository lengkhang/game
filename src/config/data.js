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
        '-2': require("../static/images/customer_3/customer3_mood4SVG.svg"),
        '-1': require("../static/images/customer_3/customer3_mood3SVG.svg"),
        '0': require("../static/images/customer_3/customer3_mood2SVG.svg"),
        '1': require("../static/images/customer_3/customer3_happySVG.svg")
      },
      lastSatisfactionChangedTime: INITIAL_START_TIME
    }
  },
  ingredients: [
    { id: 'egg', name: 'egg' },
    { id: 'avocado', name: 'avocado' },
    { id: 'mushroom', name: 'mushroom' },
    { id: 'bread', name: 'bread' }
  ],
  menu: {
    m1: {
      id: 1,
      name: 'Avo taost with egg',
      ingredients: ['egg', 'bread', 'avocado'],
      image: '...'
    },
    m2: {
      id: 2,
      name: 'Avo taost with mushroom',
      ingredients: ['avocado', 'bread', 'mushroom'],
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