'use strict';

/**
 *  ready-to-use controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ready-to-use.ready-to-use');
