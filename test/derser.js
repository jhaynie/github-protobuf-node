var should = require('should'),
	derser = require('../src/derser');

describe('derser', function () {

	it('should require X-Hub-Signature header', function (done) {
		var secret = '1234';
		var req = {
			headers: {
			},
			body: {
			}
		};
		derser.validatePayload (req, secret, function (err, result) {
			should(err).not.be.null;
			should(err.message).be.equal('Missing required X-Hub-Signature in request headers');
			done();
		});
	});

	it('should require X-Github-Event header', function (done) {
		var secret = '1234';
		var req = {
			headers: {
				'x-hub-signature': '123'
			},
			body: {
			}
		};
		derser.validatePayload (req, secret, function (err, result) {
			should(err).not.be.null;
			should(err.message).be.equal('Missing required X-Github-Event in request headers');
			done();
		});
	});

	it('should require X-Github-Delivery header', function (done) {
		var secret = '1234';
		var req = {
			headers: {
				'x-hub-signature': '123',
				'x-github-event': 'ping'
			},
			body: {
			}
		};
		derser.validatePayload (req, secret, function (err, result) {
			should(err).not.be.null;
			should(err.message).be.equal('Missing required X-Github-Delivery in request headers');
			done();
		});
	});

	it('should not validate on invalid hash', function (done) {
		var secret = '1234';
		var req = {
			headers: {
				'x-hub-signature': '123',
				'x-github-event': 'ping',
				'x-github-delivery': '1234567890'
			},
			body: {
			}
		};
		derser.validatePayload (req, secret, function (err, result) {
			should(err).not.be.null;
			should(err.message).be.equal('Invalid security');
			done();
		});
	});

	it('should validate hash but invalidate event', function (done) {
		var secret = '1234';
		var hash = derser.sign(secret, JSON.stringify({}));
		var req = {
			headers: {
				'x-hub-signature': hash,
				'x-github-event': 'foo',
				'x-github-delivery': '1234567890'
			},
			body: {}
		};
		derser.validatePayload (req, secret, function (err, result) {
			should(err).not.be.null;
			should(err.message).be.equal('Invalid event');
			done();
		});
	});

	it('should validate hash and event', function (done) {
		var secret = '1234';
		var event = {
			"zen": "Non-blocking is better than blocking.",
			"hook_id": 10746963,
			"hook": {
			  "type": "Integration",
			  "id": 10746963,
			  "name": "web",
			  "active": true,
			  "events": [
				 "commit_comment",
				 "create",
				 "delete",
				 "deployment",
				 "deployment_status",
				 "fork",
				 "issues",
				 "issue_comment",
				 "membership",
				 "public",
				 "pull_request",
				 "pull_request_review",
				 "pull_request_review_comment",
				 "push",
				 "release",
				 "repository",
				 "status",
				 "team_add",
				 "watch"
			  ],
			  "config": {
				 "content_type": "json",
				 "insecure_ssl": "0",
				 "url": "http://61464913.ngrok.io/"
			  },
			  "updated_at": "2016-11-17T05:21:33Z",
			  "created_at": "2016-11-17T05:21:33Z",
			  "integration_id": 661
			}
		};
		var hash = derser.sign(secret, JSON.stringify(event));
		var req = {
			headers: {
				'x-hub-signature': hash,
				'x-github-event': 'ping',
				'x-github-delivery': '1234567890'
			},
			body: event
		};
		derser.validatePayload (req, secret, function (err, instance, event, eventid) {
			should(err).be.null;
			should(instance).be.an.object;
			should(event).be.an.string;
			should(eventid).be.an.string;
			should(instance.toJSON()).be.eql({
				hook: {
					events: [
						'commit_comment',
						'create',
						'delete',
						'deployment',
						'deployment_status',
						'fork',
						'issues',
						'issue_comment',
						'membership',
						'public',
						'pull_request',
						'pull_request_review',
						'pull_request_review_comment',
						'push',
						'release',
						'repository',
						'status',
						'team_add',
						'watch'
					],
					config: {
						content_type: 'json',
						insecure_ssl: '0',
						url: 'http://61464913.ngrok.io/'
					},
					updated_at: '2016-11-17T05:21:33Z',
					created_at: '2016-11-17T05:21:33Z',
					integration_id: 661
				},
				hook_id: 10746963
			});
			should(event).be.equal('ping');
			should(eventid).be.equal('1234567890');
			done();
		});
	});

});
