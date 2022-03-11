const models = require('../models');

// 기존 db가 있더라도 다 날려버리고 새로 만들겠다.
models.sequelize.sync({force:true});

