/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["../accUtils"],(function(n){return function(){this.connected=()=>{n.announce("Incidents page loaded.","assertive"),document.title="Incidents"},this.disconnected=()=>{},this.transitionCompleted=()=>{}}}));