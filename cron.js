    // utilize the underscore and async packages
    var  _  = require("underscore")
    , async = require("async")
    ;
	// define tasks to be run periodically
    function computeGyms(callback){
        // perform some actions and then return a callback with status
		console.log('Gym calling')
        return callback(err);
    }

    /* set up the object to keep track of the cron system
     * the object will have the format
     * {
     *  taskName: {task: <task>, frequency: <frequency>, lastrun: <time task was last run> }
     * }
     */

    var cronRecord = {};
	
    var Cron = {
        addTask: function(taskName, task, frequency){
            var lastrun = null;
            //
            // you should probably do some validation of your arguments
            // to ensure "task" is really a function and 
            // "frequency" is a time period in the appropriate units
            // e.g. seconds
			
            // let's check if the taskName already exists.
            // if so, just update the properties
            //
            if(_.contains(Object.keys(cronRecord), taskName)){
                // get the last time the task was run
                lastrun = cronRecord[taskName]lastrun;
            }

            cronRecord[taskName] = {
                task: task,
                frequency: frequency,
                lastrun: lastrun 
            };
        },

        removeTask: function(taskName){
            delete cronRecord[taskName];
        },

        run: function(req, res, callback){
            // req and res are the express request and response objects

            // set timestamp for when cron is invoked
            var now = Date.now();

            // set up array to contain cron tasks that are ready to execute
            var scheduledTasks = [];

            _.forEach(cronRecord, function(taskDefinition, taskName){
                // check if the task is due
                if(taskDefinition.lastrun === null || _checkIfTaskIsDue(taskDefinition, now){
                    scheduledTasks.push(
                        function(asyncCallback){
                            taskDefinition.task(asyncCallback);
                        }
                    );
                }
            });

            // if there are tasks due, run them
            if(scheduledTasks.length > 0){
                async.parallel(scheduledTasks, function(err){
                    // cron tasks will have run
                    return callback(err);
                });
            } else {
                // no cron tasks are due
                return callback(null);
            }

            // function to check if a cron task is due to be executed
            // returns true if the cron task is due, returns false otherwise

            function _checkIfTaskIsDue(description, invokeTime){
                // set default value of lastrun to 0
                description.lastrun = description.lastrun || 0;

                // check how long it has been since the last time
                // the task was executed
                var elapsedTime = invokeTime - description.lastrun;

                // return true if the elapsed time is greater than or
                // equal to the cron frequency 
                if(elapsedTime - description.frequency * 1000 >= 0){
                    return true;
                }

                // return false otherwise
                return false;   
            }
        }),
    };