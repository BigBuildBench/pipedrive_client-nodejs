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
import PersonData from './PersonData';
import PersonDataEmail from './PersonDataEmail';
import PersonDataPhone from './PersonDataPhone';
import PersonDataWithActiveFlagAllOf from './PersonDataWithActiveFlagAllOf';

/**
 * The PersonDataWithActiveFlag model module.
 * @module model/PersonDataWithActiveFlag
 * @version 1.0.0
 */
class PersonDataWithActiveFlag {
    /**
     * Constructs a new <code>PersonDataWithActiveFlag</code>.
     * The ID of the person associated with the item
     * @alias module:model/PersonDataWithActiveFlag
     * @implements module:model/PersonDataWithActiveFlagAllOf
     * @implements module:model/PersonData
     */
    constructor() { 
        PersonDataWithActiveFlagAllOf.initialize(this);PersonData.initialize(this);
        PersonDataWithActiveFlag.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PersonDataWithActiveFlag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonDataWithActiveFlag} obj Optional instance to populate.
     * @return {module:model/PersonDataWithActiveFlag} The populated <code>PersonDataWithActiveFlag</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonDataWithActiveFlag();
            PersonDataWithActiveFlagAllOf.constructFromObject(data, obj);
            PersonData.constructFromObject(data, obj);

            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], [PersonDataEmail]);

                delete data['email'];
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], [PersonDataPhone]);

                delete data['phone'];
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');

                delete data['owner_id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * Whether the associated person is active or not
 * @member {Boolean} active_flag
 */
PersonDataWithActiveFlag.prototype['active_flag'] = undefined;

/**
 * The ID of the person associated with the item
 * @member {Number} id
 */
PersonDataWithActiveFlag.prototype['id'] = undefined;

/**
 * The name of the person associated with the item
 * @member {String} name
 */
PersonDataWithActiveFlag.prototype['name'] = undefined;

/**
 * The emails of the person associated with the item
 * @member {Array.<module:model/PersonDataEmail>} email
 */
PersonDataWithActiveFlag.prototype['email'] = undefined;

/**
 * The phone numbers of the person associated with the item
 * @member {Array.<module:model/PersonDataPhone>} phone
 */
PersonDataWithActiveFlag.prototype['phone'] = undefined;

/**
 * The ID of the owner of the person that is associated with the item
 * @member {Number} owner_id
 */
PersonDataWithActiveFlag.prototype['owner_id'] = undefined;


// Implement PersonDataWithActiveFlagAllOf interface:
/**
 * Whether the associated person is active or not
 * @member {Boolean} active_flag
 */
PersonDataWithActiveFlagAllOf.prototype['active_flag'] = undefined;
// Implement PersonData interface:
/**
 * The ID of the person associated with the item
 * @member {Number} id
 */
PersonData.prototype['id'] = undefined;
/**
 * The name of the person associated with the item
 * @member {String} name
 */
PersonData.prototype['name'] = undefined;
/**
 * The emails of the person associated with the item
 * @member {Array.<module:model/PersonDataEmail>} email
 */
PersonData.prototype['email'] = undefined;
/**
 * The phone numbers of the person associated with the item
 * @member {Array.<module:model/PersonDataPhone>} phone
 */
PersonData.prototype['phone'] = undefined;
/**
 * The ID of the owner of the person that is associated with the item
 * @member {Number} owner_id
 */
PersonData.prototype['owner_id'] = undefined;




export default PersonDataWithActiveFlag;

