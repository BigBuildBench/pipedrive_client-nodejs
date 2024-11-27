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
import OrgAndOwnerId from './OrgAndOwnerId';
import Owner from './Owner';
import PersonNameInfo from './PersonNameInfo';
import RelationshipOrganizationInfoItemWithActiveFlag from './RelationshipOrganizationInfoItemWithActiveFlag';

/**
 * The PersonNameInfoWithOrgAndOwnerId model module.
 * @module model/PersonNameInfoWithOrgAndOwnerId
 * @version 1.0.0
 */
class PersonNameInfoWithOrgAndOwnerId {
    /**
     * Constructs a new <code>PersonNameInfoWithOrgAndOwnerId</code>.
     * @alias module:model/PersonNameInfoWithOrgAndOwnerId
     * @implements module:model/OrgAndOwnerId
     * @implements module:model/PersonNameInfo
     */
    constructor() { 
        OrgAndOwnerId.initialize(this);PersonNameInfo.initialize(this);
        PersonNameInfoWithOrgAndOwnerId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PersonNameInfoWithOrgAndOwnerId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonNameInfoWithOrgAndOwnerId} obj Optional instance to populate.
     * @return {module:model/PersonNameInfoWithOrgAndOwnerId} The populated <code>PersonNameInfoWithOrgAndOwnerId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonNameInfoWithOrgAndOwnerId();
            OrgAndOwnerId.constructFromObject(data, obj);
            PersonNameInfo.constructFromObject(data, obj);

            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = Owner.constructFromObject(data['owner_id']);

                delete data['owner_id'];
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = RelationshipOrganizationInfoItemWithActiveFlag.constructFromObject(data['org_id']);

                delete data['org_id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');

                delete data['first_name'];
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');

                delete data['last_name'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * @member {module:model/Owner} owner_id
 */
PersonNameInfoWithOrgAndOwnerId.prototype['owner_id'] = undefined;

/**
 * @member {module:model/RelationshipOrganizationInfoItemWithActiveFlag} org_id
 */
PersonNameInfoWithOrgAndOwnerId.prototype['org_id'] = undefined;

/**
 * The name of the person
 * @member {String} name
 */
PersonNameInfoWithOrgAndOwnerId.prototype['name'] = undefined;

/**
 * The first name of the person
 * @member {String} first_name
 */
PersonNameInfoWithOrgAndOwnerId.prototype['first_name'] = undefined;

/**
 * The last name of the person
 * @member {String} last_name
 */
PersonNameInfoWithOrgAndOwnerId.prototype['last_name'] = undefined;


// Implement OrgAndOwnerId interface:
/**
 * @member {module:model/Owner} owner_id
 */
OrgAndOwnerId.prototype['owner_id'] = undefined;
/**
 * @member {module:model/RelationshipOrganizationInfoItemWithActiveFlag} org_id
 */
OrgAndOwnerId.prototype['org_id'] = undefined;
// Implement PersonNameInfo interface:
/**
 * The name of the person
 * @member {String} name
 */
PersonNameInfo.prototype['name'] = undefined;
/**
 * The first name of the person
 * @member {String} first_name
 */
PersonNameInfo.prototype['first_name'] = undefined;
/**
 * The last name of the person
 * @member {String} last_name
 */
PersonNameInfo.prototype['last_name'] = undefined;




export default PersonNameInfoWithOrgAndOwnerId;
