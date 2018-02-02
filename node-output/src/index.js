/**
 * TubeBuddy Notification API
 * TubeBuddy tweet notifications
 *
 * OpenAPI spec version: 1.0.0
 * Contact: aaron@tubebuddy.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Item from './model/Item';
import Tweets from './model/Tweets';
import AdminsApi from './api/AdminsApi';
import DevelopersApi from './api/DevelopersApi';


/**
* TubeBuddy_tweet_notifications.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var TubeBuddyNotificationApi = require('index'); // See note below*.
* var xxxSvc = new TubeBuddyNotificationApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new TubeBuddyNotificationApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new TubeBuddyNotificationApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new TubeBuddyNotificationApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Item model constructor.
     * @property {module:model/Item}
     */
    Item,

    /**
     * The Tweets model constructor.
     * @property {module:model/Tweets}
     */
    Tweets,

    /**
    * The AdminsApi service constructor.
    * @property {module:api/AdminsApi}
    */
    AdminsApi,

    /**
    * The DevelopersApi service constructor.
    * @property {module:api/DevelopersApi}
    */
    DevelopersApi
};