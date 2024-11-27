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
 * The OrganizationsDeleteResponseData model module.
 * @module model/OrganizationsDeleteResponseData
 * @version 1.0.0
 */
class OrganizationsDeleteResponseData {
    /**
     * Constructs a new <code>OrganizationsDeleteResponseData</code>.
     * @alias module:model/OrganizationsDeleteResponseData
     */
    constructor() { 
        
        OrganizationsDeleteResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationsDeleteResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationsDeleteResponseData} obj Optional instance to populate.
     * @return {module:model/OrganizationsDeleteResponseData} The populated <code>OrganizationsDeleteResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationsDeleteResponseData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], ['Number']);

                delete data['id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The IDs of the organizations that were deleted
 * @member {Array.<Number>} id
 */
OrganizationsDeleteResponseData.prototype['id'] = undefined;






export default OrganizationsDeleteResponseData;

