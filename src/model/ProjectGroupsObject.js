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
 * The ProjectGroupsObject model module.
 * @module model/ProjectGroupsObject
 * @version 1.0.0
 */
class ProjectGroupsObject {
    /**
     * Constructs a new <code>ProjectGroupsObject</code>.
     * @alias module:model/ProjectGroupsObject
     */
    constructor() { 
        
        ProjectGroupsObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProjectGroupsObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectGroupsObject} obj Optional instance to populate.
     * @return {module:model/ProjectGroupsObject} The populated <code>ProjectGroupsObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProjectGroupsObject();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('order_nr')) {
                obj['order_nr'] = ApiClient.convertToType(data['order_nr'], 'Number');

                delete data['order_nr'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * ID of the group
 * @member {Number} id
 */
ProjectGroupsObject.prototype['id'] = undefined;

/**
 * Name of the group
 * @member {String} name
 */
ProjectGroupsObject.prototype['name'] = undefined;

/**
 * Order number of the group
 * @member {Number} order_nr
 */
ProjectGroupsObject.prototype['order_nr'] = undefined;






export default ProjectGroupsObject;
