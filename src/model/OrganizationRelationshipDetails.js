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
import OrganizationRelationshipWithCalculatedFields from './OrganizationRelationshipWithCalculatedFields';
import RelatedOrganizationName from './RelatedOrganizationName';
import RelationshipOrganizationInfoItem from './RelationshipOrganizationInfoItem';

/**
 * The OrganizationRelationshipDetails model module.
 * @module model/OrganizationRelationshipDetails
 * @version 1.0.0
 */
class OrganizationRelationshipDetails {
    /**
     * Constructs a new <code>OrganizationRelationshipDetails</code>.
     * @alias module:model/OrganizationRelationshipDetails
     * @implements module:model/OrganizationRelationshipWithCalculatedFields
     * @implements module:model/RelatedOrganizationName
     */
    constructor() { 
        OrganizationRelationshipWithCalculatedFields.initialize(this);RelatedOrganizationName.initialize(this);
        OrganizationRelationshipDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationRelationshipDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationRelationshipDetails} obj Optional instance to populate.
     * @return {module:model/OrganizationRelationshipDetails} The populated <code>OrganizationRelationshipDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationRelationshipDetails();
            OrganizationRelationshipWithCalculatedFields.constructFromObject(data, obj);
            RelatedOrganizationName.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');

                delete data['type'];
            }
            if (data.hasOwnProperty('rel_owner_org_id')) {
                obj['rel_owner_org_id'] = RelationshipOrganizationInfoItem.constructFromObject(data['rel_owner_org_id']);

                delete data['rel_owner_org_id'];
            }
            if (data.hasOwnProperty('rel_linked_org_id')) {
                obj['rel_linked_org_id'] = RelationshipOrganizationInfoItem.constructFromObject(data['rel_linked_org_id']);

                delete data['rel_linked_org_id'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'String');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('calculated_type')) {
                obj['calculated_type'] = ApiClient.convertToType(data['calculated_type'], 'String');

                delete data['calculated_type'];
            }
            if (data.hasOwnProperty('calculated_related_org_id')) {
                obj['calculated_related_org_id'] = ApiClient.convertToType(data['calculated_related_org_id'], 'Number');

                delete data['calculated_related_org_id'];
            }
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
 * The ID of the organization relationship
 * @member {Number} id
 */
OrganizationRelationshipDetails.prototype['id'] = undefined;

/**
 * The type of the relationship
 * @member {String} type
 */
OrganizationRelationshipDetails.prototype['type'] = undefined;

/**
 * @member {module:model/RelationshipOrganizationInfoItem} rel_owner_org_id
 */
OrganizationRelationshipDetails.prototype['rel_owner_org_id'] = undefined;

/**
 * @member {module:model/RelationshipOrganizationInfoItem} rel_linked_org_id
 */
OrganizationRelationshipDetails.prototype['rel_linked_org_id'] = undefined;

/**
 * The creation date and time of the relationship
 * @member {String} add_time
 */
OrganizationRelationshipDetails.prototype['add_time'] = undefined;

/**
 * The last updated date and time of the relationship
 * @member {String} update_time
 */
OrganizationRelationshipDetails.prototype['update_time'] = undefined;

/**
 * Whether the relationship is active or not
 * @member {String} active_flag
 */
OrganizationRelationshipDetails.prototype['active_flag'] = undefined;

/**
 * The calculated type of the relationship with the linked organization
 * @member {String} calculated_type
 */
OrganizationRelationshipDetails.prototype['calculated_type'] = undefined;

/**
 * The ID of the linked organization
 * @member {Number} calculated_related_org_id
 */
OrganizationRelationshipDetails.prototype['calculated_related_org_id'] = undefined;

/**
 * The name of the linked organization
 * @member {String} related_organization_name
 */
OrganizationRelationshipDetails.prototype['related_organization_name'] = undefined;


// Implement OrganizationRelationshipWithCalculatedFields interface:
/**
 * The ID of the organization relationship
 * @member {Number} id
 */
OrganizationRelationshipWithCalculatedFields.prototype['id'] = undefined;
/**
 * The type of the relationship
 * @member {String} type
 */
OrganizationRelationshipWithCalculatedFields.prototype['type'] = undefined;
/**
 * @member {module:model/RelationshipOrganizationInfoItem} rel_owner_org_id
 */
OrganizationRelationshipWithCalculatedFields.prototype['rel_owner_org_id'] = undefined;
/**
 * @member {module:model/RelationshipOrganizationInfoItem} rel_linked_org_id
 */
OrganizationRelationshipWithCalculatedFields.prototype['rel_linked_org_id'] = undefined;
/**
 * The creation date and time of the relationship
 * @member {String} add_time
 */
OrganizationRelationshipWithCalculatedFields.prototype['add_time'] = undefined;
/**
 * The last updated date and time of the relationship
 * @member {String} update_time
 */
OrganizationRelationshipWithCalculatedFields.prototype['update_time'] = undefined;
/**
 * Whether the relationship is active or not
 * @member {String} active_flag
 */
OrganizationRelationshipWithCalculatedFields.prototype['active_flag'] = undefined;
/**
 * The calculated type of the relationship with the linked organization
 * @member {String} calculated_type
 */
OrganizationRelationshipWithCalculatedFields.prototype['calculated_type'] = undefined;
/**
 * The ID of the linked organization
 * @member {Number} calculated_related_org_id
 */
OrganizationRelationshipWithCalculatedFields.prototype['calculated_related_org_id'] = undefined;
// Implement RelatedOrganizationName interface:
/**
 * The name of the linked organization
 * @member {String} related_organization_name
 */
RelatedOrganizationName.prototype['related_organization_name'] = undefined;




export default OrganizationRelationshipDetails;

