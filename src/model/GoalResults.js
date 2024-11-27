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
import GoalsResponseComponent from './GoalsResponseComponent';

/**
 * The GoalResults model module.
 * @module model/GoalResults
 * @version 1.0.0
 */
class GoalResults {
    /**
     * Constructs a new <code>GoalResults</code>.
     * @alias module:model/GoalResults
     */
    constructor() { 
        
        GoalResults.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GoalResults</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GoalResults} obj Optional instance to populate.
     * @return {module:model/GoalResults} The populated <code>GoalResults</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GoalResults();

            if (data.hasOwnProperty('progress')) {
                obj['progress'] = ApiClient.convertToType(data['progress'], 'Number');

                delete data['progress'];
            }
            if (data.hasOwnProperty('goal')) {
                obj['goal'] = GoalsResponseComponent.constructFromObject(data['goal']);

                delete data['goal'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The numeric progress of the goal
 * @member {Number} progress
 */
GoalResults.prototype['progress'] = undefined;

/**
 * @member {module:model/GoalsResponseComponent} goal
 */
GoalResults.prototype['goal'] = undefined;






export default GoalResults;

