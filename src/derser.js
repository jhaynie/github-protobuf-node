var crypto = require('crypto'),
	fs = require('fs'),
	path = require('path');

function sign (key, blob) {
	return 'sha1=' + crypto.createHmac('sha1', key).update(blob).digest('hex');
}

var eventMap = {
	"commit_comment":                        "CommitCommentEvent",
	"create":                                "CreateEvent",
	"delete":                                "DeleteEvent",
	"deployment":                            "DeploymentEvent",
	"deployment_status":                     "DeploymentStatusEvent",
	"fork":                                  "ForkEvent",
	"gollum":                                "GollumEvent",
	"integration_installation":              "IntegrationInstallationEvent",
	"integration_installation_repositories": "IntegrationInstallationRepositoriesEvent",
	"issue_comment":                         "IssueCommentEvent",
	"issues":                                "IssuesEvent",
	"member":                                "MemberEvent",
	"membership":                            "MembershipEvent",
	"page_build":                            "PageBuildEvent",
	"ping":                                  "Ping",
	"public":                                "PublicEvent",
	"pull_request_review_comment":           "PullRequestReviewCommentEvent",
	"pull_request":                          "PullRequestEvent",
	"push":                                  "PushEvent",
	"repository":                            "RepositoryEvent",
	"release":                               "ReleaseEvent",
	"status":                                "StatusEvent",
	"team_add":                              "TeamAddEvent",
	"watch":                                 "WatchEvent"
};

function getEventCtor(o, event) {
	var n = eventMap[event];
	if (n in o) {
		return o[n];
	}
}

function getEventClass(event) {
	var p = path.join(__dirname, event + '_pb.js');
	if (fs.existsSync(p)) {
		var o = getEventCtor(require(p), event);
		if (o) {
			return o;
		}
	}
	p = path.join(__dirname, event + '_event_pb.js');
	if (fs.existsSync(p)) {
		var o = getEventCtor(require(p), event);
		if (o) {
			return o;
		}
	}
	throw new Error('Invalid event');
}

function validatePayload (req, secretKey, callback) {
	var sig = req.headers['x-hub-signature'],
		event = req.headers['x-github-event'],
		id = req.headers['x-github-delivery'];

	if (!sig) {
		return callback(new Error('Missing required X-Hub-Signature in request headers'));
	}
	if (!event) {
		return callback(new Error('Missing required X-Github-Event in request headers'));
	}
	if (!id) {
		return callback(new Error('Missing required X-Github-Delivery in request headers'));
	}
	var data = req.body;
	if (typeof(data) === 'object') {
		data = JSON.stringify(data);
	}
	var computedSig = sign(secretKey, data);
	if (computedSig === sig) {
		try {
			var Class = getEventClass(event);
			var instance = new Class();
			// console.log('instance', instance);
			// console.log('body', req.body);
			instance.fromJSON(req.body);
			callback(null, instance, event, id);
		} catch (e) {
			return callback(e);
		}
	} else {
		callback(new Error('Invalid security'));
	}
}

exports.validatePayload = validatePayload;

// for testing
exports.sign = sign;
