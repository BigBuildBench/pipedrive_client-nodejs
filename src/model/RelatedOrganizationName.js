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
 * The RelatedOrganizationName model module.
 * @module model/RelatedOrganizationName
 * @version 1.0.0
 */
class RelatedOrganizationName {
    /**
     * Constructs a new <code>RelatedOrganizationName</code>.
     * @alias module:model/RelatedOrganizationName
     */
    constructor() { 
        
        RelatedOrganizationName.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelatedOrganizationName</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelatedOrganizationName} obj Optional instance to populate.
     * @return {module:model/RelatedOrganizationName} The populated <code>RelatedOrganizationName</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelatedOrganizationName();

            if (data.hasOwnProperty('related_organization_name')) {
                obj['related_organization_name'] = ApiClient.convertToType(data['related_organization_name'], 'String');

                delete data['related_organization_name'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The name of the linked organization
 * @member {String} related_organization_name
 */
RelatedOrganizationName.prototype['related_organization_name'] = undefined;






export default RelatedOrganizationName;
