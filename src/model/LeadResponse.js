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
import LeadValue from './LeadValue';
import VisibleTo from './VisibleTo';

/**
 * The LeadResponse model module.
 * @module model/LeadResponse
 * @version 1.0.0
 */
class LeadResponse {
    /**
     * Constructs a new <code>LeadResponse</code>.
     * @alias module:model/LeadResponse
     */
    constructor() { 
        
        LeadResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LeadResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeadResponse} obj Optional instance to populate.
     * @return {module:model/LeadResponse} The populated <code>LeadResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeadResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');

                delete data['id'];
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');

                delete data['title'];
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');

                delete data['owner_id'];
            }
            if (data.hasOwnProperty('creator_id')) {
                obj['creator_id'] = ApiClient.convertToType(data['creator_id'], 'Number');

                delete data['creator_id'];
            }
            if (data.hasOwnProperty('label_ids')) {
                obj['label_ids'] = ApiClient.convertToType(data['label_ids'], ['String']);

                delete data['label_ids'];
            }
            if (data.hasOwnProperty('person_id')) {
                obj['person_id'] = ApiClient.convertToType(data['person_id'], 'Number');

                delete data['person_id'];
            }
            if (data.hasOwnProperty('organization_id')) {
                obj['organization_id'] = ApiClient.convertToType(data['organization_id'], 'Number');

                delete data['organization_id'];
            }
            if (data.hasOwnProperty('source_name')) {
                obj['source_name'] = ApiClient.convertToType(data['source_name'], 'String');

                delete data['source_name'];
            }
            if (data.hasOwnProperty('origin')) {
                obj['origin'] = ApiClient.convertToType(data['origin'], 'String');

                delete data['origin'];
            }
            if (data.hasOwnProperty('origin_id')) {
                obj['origin_id'] = ApiClient.convertToType(data['origin_id'], 'String');

                delete data['origin_id'];
            }
            if (data.hasOwnProperty('channel')) {
                obj['channel'] = ApiClient.convertToType(data['channel'], 'Number');

                delete data['channel'];
            }
            if (data.hasOwnProperty('channel_id')) {
                obj['channel_id'] = ApiClient.convertToType(data['channel_id'], 'String');

                delete data['channel_id'];
            }
            if (data.hasOwnProperty('is_archived')) {
                obj['is_archived'] = ApiClient.convertToType(data['is_archived'], 'Boolean');

                delete data['is_archived'];
            }
            if (data.hasOwnProperty('was_seen')) {
                obj['was_seen'] = ApiClient.convertToType(data['was_seen'], 'Boolean');

                delete data['was_seen'];
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = LeadValue.constructFromObject(data['value']);

                delete data['value'];
            }
            if (data.hasOwnProperty('expected_close_date')) {
                obj['expected_close_date'] = ApiClient.convertToType(data['expected_close_date'], 'Date');

                delete data['expected_close_date'];
            }
            if (data.hasOwnProperty('next_activity_id')) {
                obj['next_activity_id'] = ApiClient.convertToType(data['next_activity_id'], 'Number');

                delete data['next_activity_id'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'Date');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'Date');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], VisibleTo);

                delete data['visible_to'];
            }
            if (data.hasOwnProperty('cc_email')) {
                obj['cc_email'] = ApiClient.convertToType(data['cc_email'], 'String');

                delete data['cc_email'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The unique ID of the lead in the UUID format
 * @member {String} id
 */
LeadResponse.prototype['id'] = undefined;

/**
 * The title of the lead
 * @member {String} title
 */
LeadResponse.prototype['title'] = undefined;

/**
 * The ID of the user who owns the lead
 * @member {Number} owner_id
 */
LeadResponse.prototype['owner_id'] = undefined;

/**
 * The ID of the user who created the lead
 * @member {Number} creator_id
 */
LeadResponse.prototype['creator_id'] = undefined;

/**
 * The IDs of the lead labels which are associated with the lead
 * @member {Array.<String>} label_ids
 */
LeadResponse.prototype['label_ids'] = undefined;

/**
 * The ID of a person which this lead is linked to
 * @member {Number} person_id
 */
LeadResponse.prototype['person_id'] = undefined;

/**
 * The ID of an organization which this lead is linked to
 * @member {Number} organization_id
 */
LeadResponse.prototype['organization_id'] = undefined;

/**
 * Defines where the lead comes from. Will be `API` if the lead was created through the Public API and will be `Manually created` if the lead was created manually through the UI. 
 * @member {String} source_name
 */
LeadResponse.prototype['source_name'] = undefined;

/**
 * The way this Lead was created. `origin` field is set by Pipedrive when Lead is created and cannot be changed.
 * @member {String} origin
 */
LeadResponse.prototype['origin'] = undefined;

/**
 * The optional ID to further distinguish the origin of the lead - e.g. Which API integration created this Lead.
 * @member {String} origin_id
 */
LeadResponse.prototype['origin_id'] = undefined;

/**
 * The ID of your Marketing channel this Lead was created from. Recognized Marketing channels can be configured in your <a href=\"https://app.pipedrive.com/settings/fields\" target=\"_blank\" rel=\"noopener noreferrer\">Company settings</a>.
 * @member {Number} channel
 */
LeadResponse.prototype['channel'] = undefined;

/**
 * The optional ID to further distinguish the Marketing channel.
 * @member {String} channel_id
 */
LeadResponse.prototype['channel_id'] = undefined;

/**
 * A flag indicating whether the lead is archived or not
 * @member {Boolean} is_archived
 */
LeadResponse.prototype['is_archived'] = undefined;

/**
 * A flag indicating whether the lead was seen by someone in the Pipedrive UI
 * @member {Boolean} was_seen
 */
LeadResponse.prototype['was_seen'] = undefined;

/**
 * @member {module:model/LeadValue} value
 */
LeadResponse.prototype['value'] = undefined;

/**
 * The date of when the deal which will be created from the lead is expected to be closed. In ISO 8601 format: YYYY-MM-DD.
 * @member {Date} expected_close_date
 */
LeadResponse.prototype['expected_close_date'] = undefined;

/**
 * The ID of the next activity associated with the lead
 * @member {Number} next_activity_id
 */
LeadResponse.prototype['next_activity_id'] = undefined;

/**
 * The date and time of when the lead was created. In ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
 * @member {Date} add_time
 */
LeadResponse.prototype['add_time'] = undefined;

/**
 * The date and time of when the lead was last updated. In ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
 * @member {Date} update_time
 */
LeadResponse.prototype['update_time'] = undefined;

/**
 * The visibility of the lead. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user.<table><tr><th>Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner &amp; followers (private)</td></tr><tr><td>`3`</td><td>Entire company (shared)</td></tr></table>
 * @member {module:model/VisibleTo} visible_to
 */
LeadResponse.prototype['visible_to'] = undefined;

/**
 * The BCC email of the lead
 * @member {String} cc_email
 */
LeadResponse.prototype['cc_email'] = undefined;






export default LeadResponse;
