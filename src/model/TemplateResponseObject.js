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
import TemplateObject from './TemplateObject';

/**
 * The TemplateResponseObject model module.
 * @module model/TemplateResponseObject
 * @version 1.0.0
 */
class TemplateResponseObject {
    /**
     * Constructs a new <code>TemplateResponseObject</code>.
     * @alias module:model/TemplateResponseObject
     * @implements module:model/TemplateObject
     */
    constructor() { 
        TemplateObject.initialize(this);
        TemplateResponseObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TemplateResponseObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateResponseObject} obj Optional instance to populate.
     * @return {module:model/TemplateResponseObject} The populated <code>TemplateResponseObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateResponseObject();
            TemplateObject.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');

                delete data['title'];
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');

                delete data['description'];
            }
            if (data.hasOwnProperty('projects_board_id')) {
                obj['projects_board_id'] = ApiClient.convertToType(data['projects_board_id'], 'Number');

                delete data['projects_board_id'];
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');

                delete data['owner_id'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of a template
 * @member {Number} id
 */
TemplateResponseObject.prototype['id'] = undefined;

/**
 * The title of a template
 * @member {String} title
 */
TemplateResponseObject.prototype['title'] = undefined;

/**
 * The description of a template
 * @member {String} description
 */
TemplateResponseObject.prototype['description'] = undefined;

/**
 * The ID of the project board this template is associated with
 * @member {Number} projects_board_id
 */
TemplateResponseObject.prototype['projects_board_id'] = undefined;

/**
 * The ID of a template owner
 * @member {Number} owner_id
 */
TemplateResponseObject.prototype['owner_id'] = undefined;

/**
 * The creation date and time of the template in UTC. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} add_time
 */
TemplateResponseObject.prototype['add_time'] = undefined;

/**
 * The update date and time of the template in UTC. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} update_time
 */
TemplateResponseObject.prototype['update_time'] = undefined;


// Implement TemplateObject interface:
/**
 * The ID of a template
 * @member {Number} id
 */
TemplateObject.prototype['id'] = undefined;
/**
 * The title of a template
 * @member {String} title
 */
TemplateObject.prototype['title'] = undefined;
/**
 * The description of a template
 * @member {String} description
 */
TemplateObject.prototype['description'] = undefined;
/**
 * The ID of the project board this template is associated with
 * @member {Number} projects_board_id
 */
TemplateObject.prototype['projects_board_id'] = undefined;
/**
 * The ID of a template owner
 * @member {Number} owner_id
 */
TemplateObject.prototype['owner_id'] = undefined;
/**
 * The creation date and time of the template in UTC. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} add_time
 */
TemplateObject.prototype['add_time'] = undefined;
/**
 * The update date and time of the template in UTC. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} update_time
 */
TemplateObject.prototype['update_time'] = undefined;




export default TemplateResponseObject;
