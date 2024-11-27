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
import RolesAdditionalData from './RolesAdditionalData';
import SubRole from './SubRole';

/**
 * The GetRoleSubrolesAllOf model module.
 * @module model/GetRoleSubrolesAllOf
 * @version 1.0.0
 */
class GetRoleSubrolesAllOf {
    /**
     * Constructs a new <code>GetRoleSubrolesAllOf</code>.
     * @alias module:model/GetRoleSubrolesAllOf
     */
    constructor() { 
        
        GetRoleSubrolesAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRoleSubrolesAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRoleSubrolesAllOf} obj Optional instance to populate.
     * @return {module:model/GetRoleSubrolesAllOf} The populated <code>GetRoleSubrolesAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRoleSubrolesAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [SubRole]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = RolesAdditionalData.constructFromObject(data['additional_data']);

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
 * The array of sub-roles
 * @member {Array.<module:model/SubRole>} data
 */
GetRoleSubrolesAllOf.prototype['data'] = undefined;

/**
 * @member {module:model/RolesAdditionalData} additional_data
 */
GetRoleSubrolesAllOf.prototype['additional_data'] = undefined;






export default GetRoleSubrolesAllOf;

