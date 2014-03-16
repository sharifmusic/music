'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Artist Schema
 */
var ArtistSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
	name: {
		type: String,
		default: '',
		trim: true
	},
	biography: {
		type: String,
		default: '',
		trim: true
	}
});

/**
 * Validations
 */
ArtistSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

mongoose.model('Artist', ArtistSchema);