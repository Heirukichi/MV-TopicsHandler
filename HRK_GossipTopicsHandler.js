/*****************************************************************************
 * Filename       : HRK_GossipTopicsHandler.js
 * Last Update    : November 8th 2019
 * Author         : Heirukichi
 ****************************************************************************/
/*:
 * @plugindesc v1.0.0 - Last update: 11-08-2019 [MM-DD-YYYY]
 * This plugin allows you to control topics used in dialogues.
 * @author Heirukichi
 * ----------------------------------------------------------------------------
 *
 * @param Dedicated Variable
 * @desc
 * A variable used to store the total amount of possible topics.
 * Refrain from using it in your game.
 * @default 10
 *
 * @param Total Topics
 * @desc
 * The total amount of topics the player can unlock using this plugin.
 * @default 10
 *
 * @param Starting Topic Value
 * @desc
 * The initial value for unknown topics.
 * @default -1
 *
 * @param Known Topic Value
 * @desc
 * The standard value for known topics that have NOT been discussed.
 * @default 0
 *
 * @help
 * This plugin was originally a commission from Treynor from the RPG Maker Web
 * community. since this plugin would have never existed without the said
 * commission, special thanks go to him.
 *
 * ============================================================================
 * INSTRUCTIONS
 * ============================================================================
 * Please, read the following instructions carefully before using this plugin.
 * I do not provide support if you fail to understand these instructions and/or
 * if your lack of knowledge about the engine does not allow you to let this
 * plugin work at its best potential.
 *
 * Should something like that occur, I strongly recommend following tutorials
 * about how the engine works and how to interact with events/variables, and to
 * read carefully what you can do with RPG Maker MV Script calls.
 * This basic information can be found on RPG Maker Web, the official Degica
 * forum.
 *
 * ----------------------------------------------------------------------------
 * > Requirements
 * ----------------------------------------------------------------------------
 * None. This plugin is plug and play. Once you load it into your project, you
 * only need to configure the plugin parameters and it works. No other plugin
 * required.
 *
 * ----------------------------------------------------------------------------
 * > Plugin Commands
 * ----------------------------------------------------------------------------
 * This plugin allows you to initialize your topics to the default value set
 * when configuring the plugin parameters using the following plugin command:
 *
 * initializeTopics
 *
 * While it is usually recommended to initialize variables before using them,
 * this plugin automatically checks for topics initialization whenever a new
 * topic is added to the list. For this reason, this plugin command is not
 * required in any part of the game where this plugin is being used.
 *
 * ----------------------------------------------------------------------------
 * > Script Calls
 * ----------------------------------------------------------------------------
 * To allow you to make checks involving the various topics discussed, this
 * plugin offers a certain amount of script calls. When using a script call in
 * an event, regardless of where you are using it (script calls or script boxes
 * in conditional branches are the same), the keyword "this" should be used
 * before the script call itself.
 *
 * Example:
 * To initialize your topics with a script call you can use the script call
 * initializeGossipTopics()
 * However, in the event you have to use this line instead:
 * this.initializeGossipTopics();
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * NOTICE:
 * The semicolon at the end of the script call is not mandatory when you use it
 * in the script box of a Conditional Branch (or in that of a Control Variable
 * or Control Switch event command). However, when adding it to a script call,
 * the semicolon at the end is mandatory.
 * The script calls in the list below are without a semicolon, remember where
 * you have to put it and where it is not required.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 * The following script calls can be used to control your topics.
 *
 * - topicsInitialized()
 *   this script call takes no arguments and returns true if your topics have
 *   already been initialized, false otherwise.
 *
 * - initializeGossipTopics()
 *   this script call takes no arguments and initializes your topics. It works
 *   in the same way as the plugin command listed above. As a matter of fact,
 *   the plugin command calls this internally.
 *
 * - canDiscussTopic(topic, stage)
 *   topic is the topic ID of the topic that you want to check;
 *   stage is the stage that you want to check for the said topic.
 *   If the current stage of the topic checked is the same as "stage", the
 *   topic can be discussed, if not, this returns false.
 *   It is recommended to use this inside the script box of script calls to
 *   check if certain messages can be displayed or not.
 *
 * - addGossipTopic(topic)
 *   topic is the topic ID of the topic that you want to check.
 *   This script call sets the topic value to 0.
 *
 * - discussTopic(topic, newStage)
 *   topic is the topic that is going to be discussed;
 *   newStage is the stage that the topic is going to have after this call.
 *   When using this script call, newStage can be higher or lower than the
 *   previous topic stage. This can be used to handle quest stages and mark
 *   success (progressing to a greater stage value) or failure (bringing the
 *   topic to a stage where it can no longer be discussed).
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * IMPORTANT NOTICE
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * When handling topics keep in mind that you CANNOT use 0 as a topic ID. The
 * said value is used to check if your topics have been initialized or not. If
 * you set a different value for the said topic, whenever you use a script call
 * to handle your topics, the engine will automatically reset all your topics
 * to their starting initialization value!
 * Use numbers from 1 onward as topics ID to avoid this.
 *
 * ============================================================================
 * LICENSE
 * ============================================================================
 * This plugin is licensed under the GNU General Public License 3.0. This means
 * that you can:
 * - use this plugin for both commercial and non commercial projects as long as
 *  * proper credit is given to me (Heirukichi);
 *  * a link to my website is provided;
 * - modify this plugin as much as you want as long as
 *  * you do not pretend you wrote the whole plugin;
 *  * you still give credit to me for the original work;
 *  * you provide a link to my website instead of reposting my plugin when you
 *    post the modified version of the plugin.
 *
 * You can review the complete license here:
 * https://www.gnu.org/licenses/gpl-3.0.html
 *
 * If you are using this plugin for a commercial game, I would like to receive
 * a link of your game page. The link does not need to contain a free copy of
 * your game and it is only used to keep track of games where my plugins are
 * being used.
 *
 * While this is not mandatory for non commercial games, I really appreciate if
 * you could send me a link regardless of your game being commercial or not.
 * You can contact me using the Contacts form on my website or by sending me a
 * private message on RPG Maker Web forum.
 *
 * IMPORTANT NOTICE:
 * You are free to distribute this plugin as long as you provide a link to my
 * website with it. In case you downloaded this plugin from my website, provide
 * a link to its download page instead of copy/pasting the code.
 *
 */
(function(){
  /***************************************************************************
   * Plugin Parameters
   ***************************************************************************/
  var HRK_GTH_params = PluginManager.parameters("HRK_GossipTopicsHandler");
  var paramTopicsVarId = Number(HRK_GTH_params["Dedicated Variable"] || 0);
  var paramTotalTopics = Number(HRK_GTH_params["Total Topics"] || 0);
  var paramTopicInitVal = Number(HRK_GTH_params["Starting Topic Value"] || 0);
  var paramTopicKnown = Number(HRK_GTH_params["Known Topic Value"] || 0);
   /***************************************************************************
   * Plugin Command
   ***************************************************************************/
  var HRK_GTH_pluginCommand_old = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    HRK_GTH_pluginCommand_old.apply(this, arguments);
    if (command == 'initializeTopics') {
      this.initializeGossipTopics();
    }
  }; // Plugin Command
  /***************************************************************************
   * Check If Topics Have Been Initialized
   ***************************************************************************/
  Game_Interpreter.prototype.topicsInitialized = function() {
    console.log("Checking Topics Initialization..");
    var result = false;
    if (Array.isArray($gameVariables.value(paramTopicsVarId))) {
      if ($gameVariables.value(paramTopicsVarId)[0] === "HRK_GTH_Init") {
        result = true;
      }
    }
    return result;
  }; // Check If Topics Have Been Initialized
  /***************************************************************************
   * Initialize Topics
   ***************************************************************************/
  Game_Interpreter.prototype.initializeGossipTopics = function() {
    if (this.topicsInitialized()) {
      return $gameVariables.value(paramTopicsVarId);
    }
    var topics = new Array(paramTotalTopics + 1);
    var topicId = 0;
    for (topicId = 0; topicId <= paramTotalTopics; topicId++) {
      if (topicId === 0) {
        topics[topicId] = "HRK_GTH_Init";
      }
      else {
        topics[topicId] = paramTopicInitVal;
      }
    }
    $gameVariables.setValue(paramTopicsVarId, topics);
    return $gameVariables.value(paramTopicsVarId);
  }; // Initialize Topics
  /***************************************************************************
   * Check If Topic Can Be Discussed
   ***************************************************************************/
  Game_Interpreter.prototype.canDiscussTopic = function(topicId, stage) {
    var topics = $gameVariables.value(paramTopicsVarId);
    if (!this.topicsInitialized()) {
      return false;
    }
    return (topics[topicId] == stage);
  }; // Check If Topic Can Be Discussed
  /***************************************************************************
   * Add New Topic
   ***************************************************************************/
  Game_Interpreter.prototype.addGossipTopic = function(topicId) {
    var topics = $gameVariables.value(paramTopicsVarId);
    if (!this.topicsInitialized()) {
      topics = this.initializeGossipTopics();
    }
    if (topics[topicId] < 0) {
      topics[topicId] = paramTopicKnown;
    }
  }; // Add New Topic
  /***************************************************************************
   * Discuss Topic
   ***************************************************************************/
  Game_Interpreter.prototype.discussTopic = function(topicId, newValue) {
    console.log("Discussing Gossip Topic..");
    var topics = $gameVariables.value(paramTopicsVarId);
    if (!this.topicsInitialized()) {
      topics = this.initializeGossipTopics();
    }
    topics[topicId] = newValue;
  }; // Discuss Topic
})(); // end of the Plugin