'use strict';

/**
 * ready-to-use router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::ready-to-use.ready-to-use');
