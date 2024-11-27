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


import ApiClient from "../ApiClient";
import AddLeadRequest from '../model/AddLeadRequest';
import GetLeadIdResponse from '../model/GetLeadIdResponse';
import GetLeadResponse from '../model/GetLeadResponse';
import GetLeadsResponse from '../model/GetLeadsResponse';
import LeadNotFoundResponse from '../model/LeadNotFoundResponse';
import LeadSearchResponse from '../model/LeadSearchResponse';
import UpdateLeadRequest from '../model/UpdateLeadRequest';
import UserIDs from '../model/UserIDs';

/**
* Leads service.
* @module api/LeadsApi
* @version 1.0.0
*/
export default class LeadsApi {

    /**
    * Constructs a new LeadsApi. 
    * @alias module:api/LeadsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient;
    }



    /**
     * Add a lead
     * Creates a lead. A lead always has to be linked to a person or an organization or both. All leads created through the Pipedrive API will have a lead source and origin set to `API`. Here's the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-lead\" target=\"_blank\" rel=\"noopener noreferrer\">adding a lead</a>. If a lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the lead, it won't appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields' structure from deals. See an example given in the <a href=\"https://pipedrive.readme.io/docs/updating-custom-field-value\" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields' values tutorial</a>.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddLeadRequest} opts.addLeadRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLeadResponse} and HTTP response
     */
    addLeadWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['addLeadRequest'];

      if (opts['title'] === undefined || opts['title'] === null) {
        throw new Error("Missing the required parameter 'title' when calling addLead");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = ['application/json', ];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = GetLeadResponse;
      return this.apiClient.callApi(
        '/leads', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a lead
     * Creates a lead. A lead always has to be linked to a person or an organization or both. All leads created through the Pipedrive API will have a lead source and origin set to `API`. Here's the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-lead\" target=\"_blank\" rel=\"noopener noreferrer\">adding a lead</a>. If a lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the lead, it won't appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields' structure from deals. See an example given in the <a href=\"https://pipedrive.readme.io/docs/updating-custom-field-value\" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields' values tutorial</a>.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddLeadRequest} opts.addLeadRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLeadResponse}
     */
    addLead(opts) {
      return this.addLeadWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a lead
     * Deletes a specific lead.
     * @param {String} id The ID of the lead
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLeadIdResponse} and HTTP response
     */
    deleteLeadWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteLead");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = GetLeadIdResponse;
      return this.apiClient.callApi(
        '/leads/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a lead
     * Deletes a specific lead.
     * @param {String} id The ID of the lead
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLeadIdResponse}
     */
    deleteLead(id) {
      return this.deleteLeadWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get one lead
     * Returns details of a specific lead. If a lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the lead, it won't appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from deals.
     * @param {String} id The ID of the lead
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLeadResponse} and HTTP response
     */
    getLeadWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getLead");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = GetLeadResponse;
      return this.apiClient.callApi(
        '/leads/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get one lead
     * Returns details of a specific lead. If a lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the lead, it won't appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from deals.
     * @param {String} id The ID of the lead
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLeadResponse}
     */
    getLead(id) {
      return this.getLeadWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * List permitted users
     * Lists the users permitted to access a lead.
     * @param {String} id The ID of the lead
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserIDs} and HTTP response
     */
    getLeadUsersWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getLeadUsers");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = UserIDs;
      return this.apiClient.callApi(
        '/leads/{id}/permittedUsers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List permitted users
     * Lists the users permitted to access a lead.
     * @param {String} id The ID of the lead
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserIDs}
     */
    getLeadUsers(id) {
      return this.getLeadUsersWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all leads
     * Returns multiple leads. Leads are sorted by the time they were created, from oldest to newest. Pagination can be controlled using `limit` and `start` query parameters. If a lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the lead, it won't appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields' structure from deals. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.
     * @param {Number} opts.start For pagination, the position that represents the first result for the page
     * @param {module:model/String} opts.archivedStatus Filtering based on the archived status of a lead. If not provided, `All` is used.
     * @param {Number} opts.ownerId If supplied, only leads matching the given user will be returned. However, `filter_id` takes precedence over `owner_id` when supplied.
     * @param {Number} opts.personId If supplied, only leads matching the given person will be returned. However, `filter_id` takes precedence over `person_id` when supplied.
     * @param {Number} opts.organizationId If supplied, only leads matching the given organization will be returned. However, `filter_id` takes precedence over `organization_id` when supplied.
     * @param {Number} opts.filterId The ID of the filter to use
     * @param {module:model/String} opts.sort The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLeadsResponse} and HTTP response
     */
    getLeadsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;









      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'] === undefined ? opts['limit'] : opts['limit'],
        'start': opts['start'] === undefined ? opts['start'] : opts['start'],
        'archived_status': opts['archived_status'] === undefined ? opts['archivedStatus'] : opts['archived_status'],
        'owner_id': opts['owner_id'] === undefined ? opts['ownerId'] : opts['owner_id'],
        'person_id': opts['person_id'] === undefined ? opts['personId'] : opts['person_id'],
        'organization_id': opts['organization_id'] === undefined ? opts['organizationId'] : opts['organization_id'],
        'filter_id': opts['filter_id'] === undefined ? opts['filterId'] : opts['filter_id'],
        'sort': opts['sort'] === undefined ? opts['sort'] : opts['sort'],
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = GetLeadsResponse;
      return this.apiClient.callApi(
        '/leads', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all leads
     * Returns multiple leads. Leads are sorted by the time they were created, from oldest to newest. Pagination can be controlled using `limit` and `start` query parameters. If a lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the lead, it won't appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields' structure from deals. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.
     * @param {Number} opts.start For pagination, the position that represents the first result for the page
     * @param {module:model/String} opts.archivedStatus Filtering based on the archived status of a lead. If not provided, `All` is used.
     * @param {Number} opts.ownerId If supplied, only leads matching the given user will be returned. However, `filter_id` takes precedence over `owner_id` when supplied.
     * @param {Number} opts.personId If supplied, only leads matching the given person will be returned. However, `filter_id` takes precedence over `person_id` when supplied.
     * @param {Number} opts.organizationId If supplied, only leads matching the given organization will be returned. However, `filter_id` takes precedence over `organization_id` when supplied.
     * @param {Number} opts.filterId The ID of the filter to use
     * @param {module:model/String} opts.sort The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLeadsResponse}
     */
    getLeads(opts) {
      return this.getLeadsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Search leads
     * Searches all leads by title, notes and/or custom fields. This endpoint is a wrapper of <a href=\"https://developers.pipedrive.com/docs/api/v1/ItemSearch#searchItem\">/v1/itemSearch</a> with a narrower OAuth scope. Found leads can be filtered by the person ID and the organization ID.
     * @param {String} term The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.fields A comma-separated string array. The fields to perform the search from. Defaults to all of them.
     * @param {Boolean} opts.exactMatch When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.
     * @param {Number} opts.personId Will filter leads by the provided person ID. The upper limit of found leads associated with the person is 2000.
     * @param {Number} opts.organizationId Will filter leads by the provided organization ID. The upper limit of found leads associated with the organization is 2000.
     * @param {module:model/String} opts.includeFields Supports including optional fields in the results which are not provided by default
     * @param {Number} opts.start Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter. (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LeadSearchResponse} and HTTP response
     */
    searchLeadsWithHttpInfo(term, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'term' is set
      if (term === undefined || term === null) {
        throw new Error("Missing the required parameter 'term' when calling searchLeads");
      }








      let pathParams = {
      };
      let queryParams = {
        'term': term,
        'fields': opts['fields'] === undefined ? opts['fields'] : opts['fields'],
        'exact_match': opts['exact_match'] === undefined ? opts['exactMatch'] : opts['exact_match'],
        'person_id': opts['person_id'] === undefined ? opts['personId'] : opts['person_id'],
        'organization_id': opts['organization_id'] === undefined ? opts['organizationId'] : opts['organization_id'],
        'include_fields': opts['include_fields'] === undefined ? opts['includeFields'] : opts['include_fields'],
        'start': opts['start'] === undefined ? opts['start'] : opts['start'],
        'limit': opts['limit'] === undefined ? opts['limit'] : opts['limit'],
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = LeadSearchResponse;
      return this.apiClient.callApi(
        '/leads/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Search leads
     * Searches all leads by title, notes and/or custom fields. This endpoint is a wrapper of <a href=\"https://developers.pipedrive.com/docs/api/v1/ItemSearch#searchItem\">/v1/itemSearch</a> with a narrower OAuth scope. Found leads can be filtered by the person ID and the organization ID.
     * @param {String} term The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.fields A comma-separated string array. The fields to perform the search from. Defaults to all of them.
     * @param {Boolean} opts.exactMatch When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.
     * @param {Number} opts.personId Will filter leads by the provided person ID. The upper limit of found leads associated with the person is 2000.
     * @param {Number} opts.organizationId Will filter leads by the provided organization ID. The upper limit of found leads associated with the organization is 2000.
     * @param {module:model/String} opts.includeFields Supports including optional fields in the results which are not provided by default
     * @param {Number} opts.start Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter. (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LeadSearchResponse}
     */
    searchLeads(term, opts) {
      return this.searchLeadsWithHttpInfo(term, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update a lead
     * Updates one or more properties of a lead. Only properties included in the request will be updated. Send `null` to unset a property (applicable for example for `value`, `person_id` or `organization_id`). If a lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the lead, it won't appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from deals. See an example given in the <a href=\"https://pipedrive.readme.io/docs/updating-custom-field-value\" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields’ values tutorial</a>.
     * @param {String} id The ID of the lead
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateLeadRequest} opts.updateLeadRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLeadResponse} and HTTP response
     */
    updateLeadWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['updateLeadRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateLead");
      }


      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = ['application/json', ];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = GetLeadResponse;
      return this.apiClient.callApi(
        '/leads/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a lead
     * Updates one or more properties of a lead. Only properties included in the request will be updated. Send `null` to unset a property (applicable for example for `value`, `person_id` or `organization_id`). If a lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the lead, it won't appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from deals. See an example given in the <a href=\"https://pipedrive.readme.io/docs/updating-custom-field-value\" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields’ values tutorial</a>.
     * @param {String} id The ID of the lead
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateLeadRequest} opts.updateLeadRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLeadResponse}
     */
    updateLead(id, opts) {
      return this.updateLeadWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}