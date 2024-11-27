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
import GoalResults from './GoalResults';

/**
 * The GetGoalResultResponse model module.
 * @module model/GetGoalResultResponse
 * @version 1.0.0
 */
class GetGoalResultResponse {
    /**
     * Constructs a new <code>GetGoalResultResponse</code>.
     * @alias module:model/GetGoalResultResponse
     */
    constructor() { 
        
        GetGoalResultResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGoalResultResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGoalResultResponse} obj Optional instance to populate.
     * @return {module:model/GetGoalResultResponse} The populated <code>GetGoalResultResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGoalResultResponse();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = GoalResults.constructFromObject(data['data']);

                delete data['data'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * If the request was successful or not
 * @member {Boolean} success
 */
GetGoalResultResponse.prototype['success'] = undefined;

/**
 * @member {module:model/GoalResults} data
 */
GetGoalResultResponse.prototype['data'] = undefined;






export default GetGoalResultResponse;
