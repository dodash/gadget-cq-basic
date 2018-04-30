function init() {
	DEBUG&&console.log("init");
	if (prefs.getInt("logLevel") < 4){
		DEBUG = true;
	}else{
		DEBUG = false;
	}

	DEBUG&&console.log("init DEBUG", DEBUG);
	DEBUG&&console.log("init entry");
	DEBUG&&console.log("init isEditMode " + isEditMode);
	loadMain();
}

function loadMain(){
	DEBUG&&console.log("loadMain");
	loadPrefs();
	// have to start cqweb and db selection?
	ensureDatabaseChosen(main);
}

function main(){
	DEBUG&&console.log("main");
}

function callGetRecordTypes() {
	DEBUG&&console.log("callGetRecordTypes");
	getRecordTypes(db, function(res){
		DEBUG&&console.log("callGetRecordTypes res", res);
		var str = JSON.stringify(res, null, 2);
		$("#getRecordTypesOutput").html(str);
	});
}

function callGetUserDatabases() {
	DEBUG&&console.log("callGetUserDatabases");
	getUserDatabases(repo, function(res){
		DEBUG&&console.log("callGetUserDatabases res", res);
		var str = JSON.stringify(res, null, 2);
		$("#getUserDatabasesOutput").html(str);
	});
}

function callGetSchemaRepositories() {
	DEBUG&&console.log("callGetSchemaRepositories");
	getSchemaRepositories("http://localhost:9080/cqweb", function(res){
		DEBUG&&console.log("callGetSchemaRepositories res", res);
		var str = JSON.stringify(res, null, 2);
		$("#getSchemaRepositoriesOutput").html(str);
	});
}