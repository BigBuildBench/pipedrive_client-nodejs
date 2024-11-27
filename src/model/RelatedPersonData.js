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

/**
 * The RelatedPersonData model module.
 * @module model/RelatedPersonData
 * @version 1.0.0
 */
class RelatedPersonData {
    /**
     * Constructs a new <code>RelatedPersonData</code>.
     * @alias module:model/RelatedPersonData
     */
    constructor() { 
        
        RelatedPersonData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelatedPersonData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelatedPersonData} obj Optional instance to populate.
     * @return {module:model/RelatedPersonData} The populated <code>RelatedPersonData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelatedPersonData();

            if (data.hasOwnProperty('PERSON_ID')) {
                obj['PERSON_ID'] = ApiClient.convertToType(data['PERSON_ID'], PersonData);

                delete data['PERSON_ID'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the person associated with the item
 * @member {module:model/PersonData} PERSON_ID
 */
RelatedPersonData.prototype['PERSON_ID'] = undefined;






export default RelatedPersonData;

