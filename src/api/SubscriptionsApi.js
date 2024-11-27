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
import PaymentsResponse from '../model/PaymentsResponse';
import SubscriptionInstallmentCreateRequest from '../model/SubscriptionInstallmentCreateRequest';
import SubscriptionInstallmentUpdateRequest from '../model/SubscriptionInstallmentUpdateRequest';
import SubscriptionRecurringCancelRequest from '../model/SubscriptionRecurringCancelRequest';
import SubscriptionRecurringCreateRequest from '../model/SubscriptionRecurringCreateRequest';
import SubscriptionRecurringUpdateRequest from '../model/SubscriptionRecurringUpdateRequest';
import SubscriptionsIdResponse from '../model/SubscriptionsIdResponse';

/**
* Subscriptions service.
* @module api/SubscriptionsApi
* @version 1.0.0
*/
export default class SubscriptionsApi {

    /**
    * Constructs a new SubscriptionsApi. 
    * @alias module:api/SubscriptionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient;
    }



    /**
     * Add a recurring subscription
     * Adds a new recurring subscription.
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionRecurringCreateRequest} opts.subscriptionRecurringCreateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionsIdResponse} and HTTP response
     */
    addRecurringSubscriptionWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['subscriptionRecurringCreateRequest'];

      if (opts['deal_id'] === undefined || opts['deal_id'] === null) {
        throw new Error("Missing the required parameter 'deal_id' when calling addRecurringSubscription");
      }
      if (opts['currency'] === undefined || opts['currency'] === null) {
        throw new Error("Missing the required parameter 'currency' when calling addRecurringSubscription");
      }
      if (opts['cadence_type'] === undefined || opts['cadence_type'] === null) {
        throw new Error("Missing the required parameter 'cadence_type' when calling addRecurringSubscription");
      }
      if (opts['cycle_amount'] === undefined || opts['cycle_amount'] === null) {
        throw new Error("Missing the required parameter 'cycle_amount' when calling addRecurringSubscription");
      }
      if (opts['start_date'] === undefined || opts['start_date'] === null) {
        throw new Error("Missing the required parameter 'start_date' when calling addRecurringSubscription");
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
      let returnType = SubscriptionsIdResponse;
      return this.apiClient.callApi(
        '/subscriptions/recurring', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a recurring subscription
     * Adds a new recurring subscription.
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionRecurringCreateRequest} opts.subscriptionRecurringCreateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionsIdResponse}
     */
    addRecurringSubscription(opts) {
      return this.addRecurringSubscriptionWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Add an installment subscription
     * Adds a new installment subscription.
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionInstallmentCreateRequest} opts.subscriptionInstallmentCreateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionsIdResponse} and HTTP response
     */
    addSubscriptionInstallmentWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['subscriptionInstallmentCreateRequest'];

      if (opts['deal_id'] === undefined || opts['deal_id'] === null) {
        throw new Error("Missing the required parameter 'deal_id' when calling addSubscriptionInstallment");
      }
      if (opts['currency'] === undefined || opts['currency'] === null) {
        throw new Error("Missing the required parameter 'currency' when calling addSubscriptionInstallment");
      }
      if (opts['payments'] === undefined || opts['payments'] === null) {
        throw new Error("Missing the required parameter 'payments' when calling addSubscriptionInstallment");
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
      let returnType = SubscriptionsIdResponse;
      return this.apiClient.callApi(
        '/subscriptions/installment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add an installment subscription
     * Adds a new installment subscription.
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionInstallmentCreateRequest} opts.subscriptionInstallmentCreateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionsIdResponse}
     */
    addSubscriptionInstallment(opts) {
      return this.addSubscriptionInstallmentWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Cancel a recurring subscription
     * Cancels a recurring subscription.
     * @param {Number} id The ID of the subscription
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionRecurringCancelRequest} opts.subscriptionRecurringCancelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionsIdResponse} and HTTP response
     */
    cancelRecurringSubscriptionWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['subscriptionRecurringCancelRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cancelRecurringSubscription");
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
      let returnType = SubscriptionsIdResponse;
      return this.apiClient.callApi(
        '/subscriptions/recurring/{id}/cancel', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Cancel a recurring subscription
     * Cancels a recurring subscription.
     * @param {Number} id The ID of the subscription
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionRecurringCancelRequest} opts.subscriptionRecurringCancelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionsIdResponse}
     */
    cancelRecurringSubscription(id, opts) {
      return this.cancelRecurringSubscriptionWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a subscription
     * Marks an installment or a recurring subscription as deleted.
     * @param {Number} id The ID of the subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionsIdResponse} and HTTP response
     */
    deleteSubscriptionWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteSubscription");
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
      let returnType = SubscriptionsIdResponse;
      return this.apiClient.callApi(
        '/subscriptions/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a subscription
     * Marks an installment or a recurring subscription as deleted.
     * @param {Number} id The ID of the subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionsIdResponse}
     */
    deleteSubscription(id) {
      return this.deleteSubscriptionWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Find subscription by deal
     * Returns details of an installment or a recurring subscription by the deal ID.
     * @param {Number} dealId The ID of the deal
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionsIdResponse} and HTTP response
     */
    findSubscriptionByDealWithHttpInfo(dealId) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'dealId' is set
      if (dealId === undefined || dealId === null) {
        throw new Error("Missing the required parameter 'dealId' when calling findSubscriptionByDeal");
      }

      let pathParams = {
        'dealId': dealId,
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
      let returnType = SubscriptionsIdResponse;
      return this.apiClient.callApi(
        '/subscriptions/find/{dealId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find subscription by deal
     * Returns details of an installment or a recurring subscription by the deal ID.
     * @param {Number} dealId The ID of the deal
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionsIdResponse}
     */
    findSubscriptionByDeal(dealId) {
      return this.findSubscriptionByDealWithHttpInfo(dealId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get details of a subscription
     * Returns details of an installment or a recurring subscription.
     * @param {Number} id The ID of the subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionsIdResponse} and HTTP response
     */
    getSubscriptionWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSubscription");
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
      let returnType = SubscriptionsIdResponse;
      return this.apiClient.callApi(
        '/subscriptions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get details of a subscription
     * Returns details of an installment or a recurring subscription.
     * @param {Number} id The ID of the subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionsIdResponse}
     */
    getSubscription(id) {
      return this.getSubscriptionWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all payments of a subscription
     * Returns all payments of an installment or recurring subscription.
     * @param {Number} id The ID of the subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentsResponse} and HTTP response
     */
    getSubscriptionPaymentsWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSubscriptionPayments");
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
      let returnType = PaymentsResponse;
      return this.apiClient.callApi(
        '/subscriptions/{id}/payments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all payments of a subscription
     * Returns all payments of an installment or recurring subscription.
     * @param {Number} id The ID of the subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentsResponse}
     */
    getSubscriptionPayments(id) {
      return this.getSubscriptionPaymentsWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update a recurring subscription
     * Updates a recurring subscription.
     * @param {Number} id The ID of the subscription
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionRecurringUpdateRequest} opts.subscriptionRecurringUpdateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionsIdResponse} and HTTP response
     */
    updateRecurringSubscriptionWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['subscriptionRecurringUpdateRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateRecurringSubscription");
      }

      if (opts['effective_date'] === undefined || opts['effective_date'] === null) {
        throw new Error("Missing the required parameter 'effective_date' when calling updateRecurringSubscription");
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
      let returnType = SubscriptionsIdResponse;
      return this.apiClient.callApi(
        '/subscriptions/recurring/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a recurring subscription
     * Updates a recurring subscription.
     * @param {Number} id The ID of the subscription
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionRecurringUpdateRequest} opts.subscriptionRecurringUpdateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionsIdResponse}
     */
    updateRecurringSubscription(id, opts) {
      return this.updateRecurringSubscriptionWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update an installment subscription
     * Updates an installment subscription.
     * @param {Number} id The ID of the subscription
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionInstallmentUpdateRequest} opts.subscriptionInstallmentUpdateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionsIdResponse} and HTTP response
     */
    updateSubscriptionInstallmentWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['subscriptionInstallmentUpdateRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateSubscriptionInstallment");
      }

      if (opts['payments'] === undefined || opts['payments'] === null) {
        throw new Error("Missing the required parameter 'payments' when calling updateSubscriptionInstallment");
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
      let returnType = SubscriptionsIdResponse;
      return this.apiClient.callApi(
        '/subscriptions/installment/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update an installment subscription
     * Updates an installment subscription.
     * @param {Number} id The ID of the subscription
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionInstallmentUpdateRequest} opts.subscriptionInstallmentUpdateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionsIdResponse}
     */
    updateSubscriptionInstallment(id, opts) {
      return this.updateSubscriptionInstallmentWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
