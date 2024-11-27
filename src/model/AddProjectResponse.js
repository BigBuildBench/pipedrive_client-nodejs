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
import ProjectResponseObject from './ProjectResponseObject';

/**
 * The AddProjectResponse model module.
 * @module model/AddProjectResponse
 * @version 1.0.0
 */
class AddProjectResponse {
    /**
     * Constructs a new <code>AddProjectResponse</code>.
     * @alias module:model/AddProjectResponse
     */
    constructor() { 
        
        AddProjectResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddProjectResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddProjectResponse} obj Optional instance to populate.
     * @return {module:model/AddProjectResponse} The populated <code>AddProjectResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddProjectResponse();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ProjectResponseObject.constructFromObject(data['data']);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = ApiClient.convertToType(data['additional_data'], Object);

                delete data['additional_data'];
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
AddProjectResponse.prototype['success'] = undefined;

/**
 * @member {module:model/ProjectResponseObject} data
 */
AddProjectResponse.prototype['data'] = undefined;

/**
 * @member {Object} additional_data
 */
AddProjectResponse.prototype['additional_data'] = undefined;






export default AddProjectResponse;
