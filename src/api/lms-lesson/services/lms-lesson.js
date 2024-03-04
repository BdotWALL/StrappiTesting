'use strict';

/**
 * lms-lesson service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lms-lesson.lms-lesson');
