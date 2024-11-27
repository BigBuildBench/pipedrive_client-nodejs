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
import DeleteRoleAssignmentAllOfData from './DeleteRoleAssignmentAllOfData';

/**
 * The DeleteRoleAssignmentAllOf model module.
 * @module model/DeleteRoleAssignmentAllOf
 * @version 1.0.0
 */
class DeleteRoleAssignmentAllOf {
    /**
     * Constructs a new <code>DeleteRoleAssignmentAllOf</code>.
     * @alias module:model/DeleteRoleAssignmentAllOf
     */
    constructor() { 
        
        DeleteRoleAssignmentAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteRoleAssignmentAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteRoleAssignmentAllOf} obj Optional instance to populate.
     * @return {module:model/DeleteRoleAssignmentAllOf} The populated <code>DeleteRoleAssignmentAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteRoleAssignmentAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = DeleteRoleAssignmentAllOfData.constructFromObject(data['data']);

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
 * @member {module:model/DeleteRoleAssignmentAllOfData} data
 */
DeleteRoleAssignmentAllOf.prototype['data'] = undefined;






export default DeleteRoleAssignmentAllOf;

