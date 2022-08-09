const { RESTDataSource } = require('apollo-datasource-rest');

// Inheriting RESTDataSource class
class TrackAPI extends RESTDataSource {
    constructor() {
        // We call super() to make sure we get access to our RESTDataSource features
        super();
        this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
    }

    getTracksForHome() {
        // get method is inherited from RESTDataSource
        return this.get('tracks');
    }

    getAuthor(authorId) {
        // get method is inherited from RESTDataSource
        return this.get(`author/${authorId}`);
    }
}

module.exports = TrackAPI;
