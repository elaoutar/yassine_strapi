'use strict';

/**
 * verb service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::verb.verb');
