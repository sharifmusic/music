'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Album Schema
 */
var AlbumSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true
	},
	content: {
		type: String,
		default: '',
		trim: true
	},
	artist: {
		type: Schema.ObjectId,
		ref: 'Artist'
	},
    comments: [
        {
            user: {
                type: Schema.ObjectId,
                ref: 'User'
            },
            body: String,
            created: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

/**
 * Validations
 */
AlbumSchema.path('title').validate(function(title) {
	return title.length;
}, 'Title cannot be blank');

mongoose.model('Album', AlbumSchema);