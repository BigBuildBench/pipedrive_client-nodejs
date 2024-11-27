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
import GetLeadsSourceResponseData from './GetLeadsSourceResponseData';

/**
 * The GetLeadsSourceResponse model module.
 * @module model/GetLeadsSourceResponse
 * @version 1.0.0
 */
class GetLeadsSourceResponse {
    /**
     * Constructs a new <code>GetLeadsSourceResponse</code>.
     * @alias module:model/GetLeadsSourceResponse
     */
    constructor() { 
        
        GetLeadsSourceResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLeadsSourceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLeadsSourceResponse} obj Optional instance to populate.
     * @return {module:model/GetLeadsSourceResponse} The populated <code>GetLeadsSourceResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLeadsSourceResponse();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [GetLeadsSourceResponseData]);

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
 * @member {Boolean} success
 */
GetLeadsSourceResponse.prototype['success'] = undefined;

/**
 * @member {Array.<module:model/GetLeadsSourceResponseData>} data
 */
GetLeadsSourceResponse.prototype['data'] = undefined;






export default GetLeadsSourceResponse;
