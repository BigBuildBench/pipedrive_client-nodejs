/**
 * Pipedrive API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The NewGoal model module.
 * @module model/NewGoal
 * @version 1.0.0
 */
class NewGoal {
    /**
     * Constructs a new <code>NewGoal</code>.
     * @alias module:model/NewGoal
     * @param assignee {Object} Who this goal is assigned to. It requires the following JSON structure: `{ \"id\": \"1\", \"type\": \"person\" }`. `type` can be either `person`, `company` or `team`. ID of the assignee person, company or team.
     * @param type {Object} The type of the goal. It requires the following JSON structure: `{ \"name\": \"deals_started\", \"params\": { \"pipeline_id\": [1, 2], \"activity_type_id\": [9] } }`. Type can be one of: `deals_won`, `deals_progressed`, `activities_completed`, `activities_added`, `deals_started` or `revenue_forecast`. `params` can include `pipeline_id`, `stage_id` or `activity_type_id`. `stage_id` is related to only `deals_progressed` type of goals and `activity_type_id` to `activities_completed` or `activities_added` types of goals. The `pipeline_id` and `activity_type_id` need to be given as an array of integers. To track the goal in all pipelines, set `pipeline_id` as `null` and similarly, to track the goal for all activities, set `activity_type_id` as `null`.”
     * @param expectedOutcome {Object} The expected outcome of the goal. Expected outcome can be tracked either by `quantity` or by `sum`. It requires the following JSON structure: `{ \"target\": \"50\", \"tracking_metric\": \"quantity\" }` or `{ \"target\": \"50\", \"tracking_metric\": \"sum\", \"currency_id\": 1 }`. `currency_id` should only be added to `sum` type of goals.
     * @param duration {Object} The date when the goal starts and ends. It requires the following JSON structure: `{ \"start\": \"2019-01-01\", \"end\": \"2022-12-31\" }`. Date in format of YYYY-MM-DD. \"end\" can be set to `null` for an infinite, open-ended goal.
     * @param interval {module:model/NewGoal.IntervalEnum} The interval of the goal
     */
    constructor(assignee, type, expectedOutcome, duration, interval) { 
        
        NewGoal.initialize(this, assignee, type, expectedOutcome, duration, interval);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, assignee, type, expectedOutcome, duration, interval) { 
        obj['assignee'] = assignee;
        obj['type'] = type;
        obj['expected_outcome'] = expectedOutcome;
        obj['duration'] = duration;
        obj['interval'] = interval;
    }

    /**
     * Constructs a <code>NewGoal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewGoal} obj Optional instance to populate.
     * @return {module:model/NewGoal} The populated <code>NewGoal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewGoal();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');

                delete data['title'];
            }
            if (data.hasOwnProperty('assignee')) {
                obj['assignee'] = ApiClient.convertToType(data['assignee'], Object);

                delete data['assignee'];
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], Object);

                delete data['type'];
            }
            if (data.hasOwnProperty('expected_outcome')) {
                obj['expected_outcome'] = ApiClient.convertToType(data['expected_outcome'], Object);

                delete data['expected_outcome'];
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], Object);

                delete data['duration'];
            }
            if (data.hasOwnProperty('interval')) {
                obj['interval'] = ApiClient.convertToType(data['interval'], 'String');

                delete data['interval'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The title of the goal
 * @member {String} title
 */
NewGoal.prototype['title'] = undefined;

/**
 * Who this goal is assigned to. It requires the following JSON structure: `{ \"id\": \"1\", \"type\": \"person\" }`. `type` can be either `person`, `company` or `team`. ID of the assignee person, company or team.
 * @member {Object} assignee
 */
NewGoal.prototype['assignee'] = undefined;

/**
 * The type of the goal. It requires the following JSON structure: `{ \"name\": \"deals_started\", \"params\": { \"pipeline_id\": [1, 2], \"activity_type_id\": [9] } }`. Type can be one of: `deals_won`, `deals_progressed`, `activities_completed`, `activities_added`, `deals_started` or `revenue_forecast`. `params` can include `pipeline_id`, `stage_id` or `activity_type_id`. `stage_id` is related to only `deals_progressed` type of goals and `activity_type_id` to `activities_completed` or `activities_added` types of goals. The `pipeline_id` and `activity_type_id` need to be given as an array of integers. To track the goal in all pipelines, set `pipeline_id` as `null` and similarly, to track the goal for all activities, set `activity_type_id` as `null`.”
 * @member {Object} type
 */
NewGoal.prototype['type'] = undefined;

/**
 * The expected outcome of the goal. Expected outcome can be tracked either by `quantity` or by `sum`. It requires the following JSON structure: `{ \"target\": \"50\", \"tracking_metric\": \"quantity\" }` or `{ \"target\": \"50\", \"tracking_metric\": \"sum\", \"currency_id\": 1 }`. `currency_id` should only be added to `sum` type of goals.
 * @member {Object} expected_outcome
 */
NewGoal.prototype['expected_outcome'] = undefined;

/**
 * The date when the goal starts and ends. It requires the following JSON structure: `{ \"start\": \"2019-01-01\", \"end\": \"2022-12-31\" }`. Date in format of YYYY-MM-DD. \"end\" can be set to `null` for an infinite, open-ended goal.
 * @member {Object} duration
 */
NewGoal.prototype['duration'] = undefined;

/**
 * The interval of the goal
 * @member {module:model/NewGoal.IntervalEnum} interval
 */
NewGoal.prototype['interval'] = undefined;





/**
 * Allowed values for the <code>interval</code> property.
 * @enum {String}
 * @readonly
 */
NewGoal['IntervalEnum'] = {

    /**
     * value: "weekly"
     * @const
     */
    "weekly": "weekly",

    /**
     * value: "monthly"
     * @const
     */
    "monthly": "monthly",

    /**
     * value: "quarterly"
     * @const
     */
    "quarterly": "quarterly",

    /**
     * value: "yearly"
     * @const
     */
    "yearly": "yearly"
};



export default NewGoal;
