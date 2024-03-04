'use strict';

/**
 * lms-course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lms-course.lms-course');
