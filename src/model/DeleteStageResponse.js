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
import DeleteStageResponseData from './DeleteStageResponseData';

/**
 * The DeleteStageResponse model module.
 * @module model/DeleteStageResponse
 * @version 1.0.0
 */
class DeleteStageResponse {
    /**
     * Constructs a new <code>DeleteStageResponse</code>.
     * @alias module:model/DeleteStageResponse
     */
    constructor() { 
        
        DeleteStageResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteStageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteStageResponse} obj Optional instance to populate.
     * @return {module:model/DeleteStageResponse} The populated <code>DeleteStageResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteStageResponse();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = DeleteStageResponseData.constructFromObject(data['data']);

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
DeleteStageResponse.prototype['success'] = undefined;

/**
 * @member {module:model/DeleteStageResponseData} data
 */
DeleteStageResponse.prototype['data'] = undefined;






export default DeleteStageResponse;
