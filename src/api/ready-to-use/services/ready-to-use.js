'use strict';

/**
 * ready-to-use service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ready-to-use.ready-to-use');
