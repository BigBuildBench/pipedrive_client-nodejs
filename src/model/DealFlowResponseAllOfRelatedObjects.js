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
import RelatedDealData from './RelatedDealData';
import RelatedOrganizationData from './RelatedOrganizationData';
import RelatedPersonDataWithActiveFlag from './RelatedPersonDataWithActiveFlag';
import RelatedUserData from './RelatedUserData';

/**
 * The DealFlowResponseAllOfRelatedObjects model module.
 * @module model/DealFlowResponseAllOfRelatedObjects
 * @version 1.0.0
 */
class DealFlowResponseAllOfRelatedObjects {
    /**
     * Constructs a new <code>DealFlowResponseAllOfRelatedObjects</code>.
     * @alias module:model/DealFlowResponseAllOfRelatedObjects
     */
    constructor() { 
        
        DealFlowResponseAllOfRelatedObjects.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealFlowResponseAllOfRelatedObjects</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealFlowResponseAllOfRelatedObjects} obj Optional instance to populate.
     * @return {module:model/DealFlowResponseAllOfRelatedObjects} The populated <code>DealFlowResponseAllOfRelatedObjects</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealFlowResponseAllOfRelatedObjects();

            if (data.hasOwnProperty('deal')) {
                obj['deal'] = RelatedDealData.constructFromObject(data['deal']);

                delete data['deal'];
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = RelatedOrganizationData.constructFromObject(data['organization']);

                delete data['organization'];
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = RelatedUserData.constructFromObject(data['user']);

                delete data['user'];
            }
            if (data.hasOwnProperty('person')) {
                obj['person'] = RelatedPersonDataWithActiveFlag.constructFromObject(data['person']);

                delete data['person'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * @member {module:model/RelatedDealData} deal
 */
DealFlowResponseAllOfRelatedObjects.prototype['deal'] = undefined;

/**
 * @member {module:model/RelatedOrganizationData} organization
 */
DealFlowResponseAllOfRelatedObjects.prototype['organization'] = undefined;

/**
 * @member {module:model/RelatedUserData} user
 */
DealFlowResponseAllOfRelatedObjects.prototype['user'] = undefined;

/**
 * @member {module:model/RelatedPersonDataWithActiveFlag} person
 */
DealFlowResponseAllOfRelatedObjects.prototype['person'] = undefined;






export default DealFlowResponseAllOfRelatedObjects;

