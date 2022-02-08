/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["../accUtils"],(function(t){return function(){this.connected=()=>{t.announce("About page loaded.","assertive"),document.title="About"},this.disconnected=()=>{},this.transitionCompleted=()=>{}}}));