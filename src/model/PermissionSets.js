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
import BaseResponse from './BaseResponse';
import PermissionSetsAllOf from './PermissionSetsAllOf';
import PermissionSetsItem from './PermissionSetsItem';

/**
 * The PermissionSets model module.
 * @module model/PermissionSets
 * @version 1.0.0
 */
class PermissionSets {
    /**
     * Constructs a new <code>PermissionSets</code>.
     * @alias module:model/PermissionSets
     * @implements module:model/BaseResponse
     * @implements module:model/PermissionSetsAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);PermissionSetsAllOf.initialize(this);
        PermissionSets.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PermissionSets</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionSets} obj Optional instance to populate.
     * @return {module:model/PermissionSets} The populated <code>PermissionSets</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionSets();
            BaseResponse.constructFromObject(data, obj);
            PermissionSetsAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [PermissionSetsItem]);

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
 * If the response is successful or not
 * @member {Boolean} success
 */
PermissionSets.prototype['success'] = undefined;

/**
 * The array of permission set
 * @member {Array.<module:model/PermissionSetsItem>} data
 */
PermissionSets.prototype['data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement PermissionSetsAllOf interface:
/**
 * The array of permission set
 * @member {Array.<module:model/PermissionSetsItem>} data
 */
PermissionSetsAllOf.prototype['data'] = undefined;




export default PermissionSets;
