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
 * The AddNoteRequestAllOf model module.
 * @module model/AddNoteRequestAllOf
 * @version 1.0.0
 */
class AddNoteRequestAllOf {
    /**
     * Constructs a new <code>AddNoteRequestAllOf</code>.
     * @alias module:model/AddNoteRequestAllOf
     * @param content {String} The content of the note in HTML format. Subject to sanitization on the back-end.
     */
    constructor(content) { 
        
        AddNoteRequestAllOf.initialize(this, content);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, content) { 
        obj['content'] = content;
    }

    /**
     * Constructs a <code>AddNoteRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddNoteRequestAllOf} obj Optional instance to populate.
     * @return {module:model/AddNoteRequestAllOf} The populated <code>AddNoteRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddNoteRequestAllOf();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');

                delete data['content'];
            }
            if (data.hasOwnProperty('lead_id')) {
                obj['lead_id'] = ApiClient.convertToType(data['lead_id'], 'String');

                delete data['lead_id'];
            }
            if (data.hasOwnProperty('deal_id')) {
                obj['deal_id'] = ApiClient.convertToType(data['deal_id'], 'Number');

                delete data['deal_id'];
            }
            if (data.hasOwnProperty('person_id')) {
                obj['person_id'] = ApiClient.convertToType(data['person_id'], 'Number');

                delete data['person_id'];
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'Number');

                delete data['org_id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The content of the note in HTML format. Subject to sanitization on the back-end.
 * @member {String} content
 */
AddNoteRequestAllOf.prototype['content'] = undefined;

/**
 * The ID of the lead the note will be attached to. This property is required unless one of (`deal_id/person_id/org_id`) is specified.
 * @member {String} lead_id
 */
AddNoteRequestAllOf.prototype['lead_id'] = undefined;

/**
 * The ID of the deal the note will be attached to. This property is required unless one of (`lead_id/person_id/org_id`) is specified.
 * @member {Number} deal_id
 */
AddNoteRequestAllOf.prototype['deal_id'] = undefined;

/**
 * The ID of the person this note will be attached to. This property is required unless one of (`deal_id/lead_id/org_id`) is specified.
 * @member {Number} person_id
 */
AddNoteRequestAllOf.prototype['person_id'] = undefined;

/**
 * The ID of the organization this note will be attached to. This property is required unless one of (`deal_id/lead_id/person_id`) is specified.
 * @member {Number} org_id
 */
AddNoteRequestAllOf.prototype['org_id'] = undefined;






export default AddNoteRequestAllOf;
